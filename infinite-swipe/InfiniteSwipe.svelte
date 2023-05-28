<script lang="ts">
  export let orientation: "horizontal" | "vertical";

  let swipeContainer: HTMLDivElement;

  $: {
    if (swipeContainer) {
      // TODO: add pointer event handlers (move if button !== 0)
      swipeContainer.onpointermove = (ev) => {
        const clientX = ev.clientX;
        const clientY = ev.clientY;
        console.debug(`clientX=${clientX}, clientY=${clientY}`);
      };
    }
  }
</script>

<div bind:this={swipeContainer} class="custom-infinite-swipe">
  <slot />
</div>

<style>
  .custom-infinite-swipe {
    overflow: hidden;
    scroll-snap-type: x mandatory;
  }
</style>
