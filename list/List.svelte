<script lang="ts">
  // TODO: clean up this mess

  import { createEventDispatcher } from "svelte";

  import { createItem, createRippleAnimation } from ".";

  const dispatch = createEventDispatcher();

  let _class = "";
  export { _class as class };

  export let checkable: boolean = false;
  export let multiple: boolean = false;

  /** checklist will disable all the highlighting for the items ".checked" class */
  export let checklist: boolean = false;

  export let data: any[] | null = null;
  $: !!data && renderList(...data);

  export let group: any[] = [];

  export let renderItemHandler:
    | ((item: HTMLLIElement, data: any) => HTMLLIElement)
    | null = null;

  let customList: HTMLUListElement;
  let renderListInterval: number | null = null;

  function renderList(...data: any[]) {
    if (!customList || !data) return;

    if (renderListInterval !== null) {
      clearInterval(renderListInterval);
      console.debug(`[list] Current list rendering canceled!`);
    }

    console.debug(`[list] Render data list with ${data.length} items`);

    // clear list
    while (customList.lastChild) customList.removeChild(customList.lastChild);
    // return if data list is empty
    if (!data.length) return;

    renderListInterval = setInterval(() => {
      try {
        const _data = data.shift();
        const item: HTMLLIElement = !!renderItemHandler
          ? renderItemHandler(createItem(_data), _data)
          : createItem(_data);
        customList.appendChild(item);
      } catch (err) {
        clearInterval(renderListInterval);
        console.warn(`[list] Rendering data list failed!`);
        console.error(err);
      }

      if (!data.length) {
        clearInterval(renderListInterval);
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

    if (!multiple && !item.classList.contains("checked")) {
      for (const c of customList.children) {
        if (c.classList.contains("custom-list-item")) {
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
  bind:this={customList}
  class={"custom-list " + _class}
  class:checklist
  {...$$restProps}
  on:click={checkable ? (ev) => _click(ev) : null}
>
  <slot />
</ul>
