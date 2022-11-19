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

  /** @type {HTMLUListElement} */
  let ul;

  /** @param {any[]} data */
  async function render(...data) {
    console.log(`Render data list with ${data.length} items.`);

    while (ul.lastChild) ul.removeChild(ul.lastChild);
    if (!data.length) return;

    const interval = setInterval(() => {
      try {
        const item = renderItem(data.shift());
        if (item) {
          item.classList.add("list-item")
          ul.appendChild(item);
        }
      } catch (err) {
        clearInterval(interval)
        console.warn(err)
        return
      }

      if (!data.length) clearInterval(interval);
    }, 1);
  }

  onMount(async () => {
    rendered = true;
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<ul
  bind:this={ul}
  on:click={(ev) => {
    /** @type {HTMLDivElement} */
    let item;

    let el;
    // @ts-ignore
    for (el of ev?.path || []) {
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
/>

<style>
  ul {
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
