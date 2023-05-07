<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { createItem, createRippleAnimation } from ".";

  const dispatch = createEventDispatcher();

  export let checkable: boolean = false;
  export let multiple: boolean = false;

  /** checklist will disable all the highlighting for the items ".checked" class */
  export let checklist: boolean = false;

  export let data: any[] | null = null;
  $: !!data && renderList(...data);

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
    item.classList.toggle("checked");
    createRippleAnimation(ev, item);

    if (item.classList.contains("checked"))
      dispatch("itemcheck", {
        data: JSON.parse(item.getAttribute("data-value")),
      });
    else
      dispatch("itemuncheck", {
        data: JSON.parse(item.getAttribute("data-value")),
      });

    if (!multiple && item.classList.contains("checked")) {
      for (const c of customList.children) {
        if (c.classList.contains("custom-list-item"))
          c.classList.remove("checked");
        dispatch("uncheck", { data: JSON.parse(c.getAttribute("data-value")) });
      }
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<ul
  class="custom-list"
  class:checklist
  on:click={checkable ? (ev) => _click(ev) : null}
>
  <slot />
</ul>

<style>
  /* TODO: Move styles to theme */

  .custom-list {
    position: relative;
    width: 100%;
    max-height: 100%;

    list-style-type: none;
    padding: 0;
    margin: 0;

    overflow: auto;
    scroll-behavior: smooth;
  }
</style>
