<script lang="ts">
  export let data: any[] | null | undefined;
  $: !!data && renderList(...data);

  let customList: HTMLUListElement;
  let renderListInterval: number | null = null;

  function renderList(...data: any[]) {
    if (!customList) return;

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
      // ...
    }, 1);
  }
</script>

<ul class="custom-list">
  <slot />
</ul>
