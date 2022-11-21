<script>
  import { createEventDispatcher, onMount } from "svelte";

  /** @type {any[]} */
  export let data;
  $: rendered && !!data && render(...data);

  /** @type {(data: any) => HTMLElement} */
  export let renderItem;

  /** @type {boolean} */
  export let single = false;

  const dispatch = createEventDispatcher();

  /** @type {boolean} */
  let rendered = false;

  /** @type {HTMLDivElement} */
  let ul;

  let renderInterval;

  /** @param {any[]} data */
  async function render(...data) {
    if (renderInterval) {
      clearInterval(renderInterval);
      console.log(`Render data list with ${data.length} [CANCEL].`)
    }

    console.log(`Render data list with ${data.length} items [START]`);

    while (ul.lastChild) ul.removeChild(ul.lastChild);
    if (!data.length) return;

    renderInterval = setInterval(() => {
      try {
        const item = renderItem(data.shift());
        if (item) {
          item.classList.add("list-item")
          ul.appendChild(item);
        }
      } catch (err) {
        clearInterval(renderInterval)
        console.log(`Render data list with ${data.length} [ABOARD]`)
        console.warn(err)
        return
      }

      if (!data.length) {
        clearInterval(renderInterval);
        console.log(`Render data list with ${data.length} [FINISHED]`)
      }
    }, 1);
  }

  onMount(async () => {
    if (data && renderItem) rendered = true;
  });
</script>

<div
  bind:this={ul}
  on:click={(ev) => {
    /** @type {HTMLDivElement} */
    let item;

    let el;
    // @ts-ignore
    for (el of (ev?.path || ev.composedPath() || [])) {
      if (el.classList?.contains("list-item")) {
        item = el;
        break;
      }
    }

    if (item) {
      item.classList.toggle("selected");
      if (single) {
        // deselect all other elements
        let child;
        for (child of ul.children) {
          if (child !== item) {
            child.classList.remove("selected");
          }
        }
      }

      if (item.classList.contains("selected")) {
        dispatch("select", { item: item });
      } else {
        // only fired if not single
        if (!single) dispatch("deselect", { item: item });
      }
    }
  }}
  {...$$restProps}
>
  <slot />
</div>

<style>
  div {
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
