<script lang="ts">
  import { createListItem, type CreateListItemOptions } from ".";

  export let data: CreateListItemOptions[] | null = null;
  $: !!data && renderList(...data);

  export let renderItemHandler:
    | ((data: CreateListItemOptions) => HTMLLIElement)
    | null = createListItem;

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
</script>

<ul class="custom-list">
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
