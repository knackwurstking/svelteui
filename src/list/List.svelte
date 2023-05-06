<script lang="ts">
  export let checkable: boolean = false;
  export let multiple: boolean = false;

  /** List with selected list items (item name) */
  export let group: any[] = [];

  export let data: any[] | null = null;
  $: !!data && !!renderItemHandler && renderList(...data);

  export let renderItemHandler: ((data: any) => HTMLLIElement) | null = null;

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

    if (!renderItemHandler) throw `renderItemHandler missing!`;
    renderListInterval = setInterval(() => {
      try {
        const item = renderItemHandler(data.shift());
        if (item) {
          customList.appendChild(item);
        }
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
    // TODO: get clicked item, handle checked or uncheck and dispatch (with some data)
    //       adding item value (data) to group
    let item: HTMLUListElement;

    // TODO: get item from `ev?.path || ev.composedPath() || []`
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<ul class="custom-list" on:click={checkable ? (ev) => _click(ev) : null}>
  <slot />
</ul>

<style>
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
