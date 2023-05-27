<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { createItem, createRippleAnimation } from ".";

  const dispatch = createEventDispatcher();

  let _class = "";
  export { _class as class };

  export let checkable: boolean = false;
  export let preventUncheck: boolean = false;
  export let multiple: boolean = false;

  /** checklist disable all the highlighting */
  export let checklist: boolean = false;

  export let group: any[] = [];

  /** data need a renderItemHandler callback */
  export let data: any[] | null = null;
  /** renderItemHandler renders list items from data */
  export let renderItemHandler:
    | ((item: HTMLLIElement, data: any) => HTMLLIElement)
    | null = null;

  $: !!data && renderList(...data);

  let _ul: HTMLUListElement;
  let _renderListInterval: number | null = null;

  function renderList(...data: any[]) {
    if (!_ul || !data) return;

    if (_renderListInterval !== null) {
      clearInterval(_renderListInterval);
      console.debug(`[list] Current list rendering canceled!`);
    }

    console.debug(`[list] Render data list with ${data.length} items`);

    // clear list
    while (_ul.lastChild) _ul.removeChild(_ul.lastChild);
    // return if data list is empty
    if (!data.length) return;

    _renderListInterval = setInterval(() => {
      try {
        const _data = data.shift();
        const item: HTMLLIElement = !!renderItemHandler
          ? renderItemHandler(createItem(_data), _data)
          : createItem(_data);
        _ul.appendChild(item);
      } catch (err) {
        clearInterval(_renderListInterval);
        console.warn(`[list] Rendering data list failed!`);
        console.error(err);
      }

      if (!data.length) {
        clearInterval(_renderListInterval);
        console.log(`[list] Rendering data done`);
      }
    }, 1);
  }

  function _click(
    ev: MouseEvent & { currentTarget: EventTarget & HTMLUListElement }
  ) {
    let item: HTMLLIElement;

    // @ts-expect-error "path does not exists"
    for (const el of ev?.path || ev.composedPath() || []) {
      if (el.classList?.contains("custom-list-item")) {
        item = el;
        break;
      }
    }

    if (!item) return;
    else if (item.classList.contains("disabled")) return;

    if (!multiple && !item.classList.contains("checked")) {
      for (let c of _ul.children) {
        if (!c.classList.contains("custom-list-item")) {
          c = c.querySelector(".custom-list-item") || c;
        }

        if (
          c.classList.contains("custom-list-item") &&
          c.classList.contains("checked")
        ) {
          c.classList.remove("checked");

          const dataValue = JSON.parse(c.getAttribute("data-value"));

          {
            const idx = group.indexOf(dataValue);
            if (idx >= 0)
              group = [...group.slice(0, idx), ...group.slice(idx + 1)];
          }

          createRippleAnimation(ev, c as HTMLLIElement, {
            reverse: !checklist,
          });
          dispatch("itemuncheck", { data: dataValue });
        }
      }
    }

    if (preventUncheck && item.classList.contains("checked")) return;

    item.classList.toggle("checked");

    const dataValue = JSON.parse(item.getAttribute("data-value"));

    if (item.classList.contains("checked")) {
      if (group.indexOf(dataValue) < 0) {
        group.push(dataValue);
        group = group;
      }

      createRippleAnimation(ev, item);
      dispatch("itemcheck", { data: dataValue });
    } else {
      {
        const idx = group.indexOf(dataValue);
        if (idx >= 0) group = [...group.slice(0, idx), ...group.slice(idx + 1)];
      }

      createRippleAnimation(ev, item, { reverse: !checklist });
      dispatch("itemuncheck", { data: dataValue });
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<ul
  bind:this={_ul}
  class={"custom-list " + _class}
  class:checklist
  {...$$restProps}
  on:click={checkable ? (ev) => _click(ev) : null}
>
  <slot />
</ul>
