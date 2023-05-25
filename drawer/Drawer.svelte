<script lang="ts">
  import { onMount } from "svelte";

  let _class = "";
  export { _class as class };

  /** swipeable will enable open/close per swipe (touch) */
  export let swipeable: boolean = false;
  export let width: number = 300;
  /** fixed will disable swipeable */
  export let fixed: boolean = false;
  export let open: boolean = false;

  function _clickOuter(
    ev: MouseEvent & { currentTarget: EventTarget & HTMLDivElement } & {
      target: EventTarget & HTMLElement;
    }
  ) {
    if (!ev.target.classList?.contains("custom-drawer__outer")) return;
    open = false;
  }

  onMount(() => {
    if (fixed || !swipeable) return;

    // TODO: add swipeable handler
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={"custom-drawer__outer " + _class}
  class:custom-drawer__fixed={fixed}
  class:custom-drawer__open={open}
  on:click={!fixed ? _clickOuter : null}
>
  <div
    class="custom-drawer"
    style={`
      width: ${width}px;
      left: -${width}px;
      ${
        fixed
          ? `transform: translateX(${width}px);`
          : open
          ? `transform: translateX(${width}px);`
          : ""
      }
    `}
    {...$$restProps}
  >
    <slot />
  </div>
</div>

<style>
  .custom-drawer__outer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    bottom: 0;
    z-index: 1;
    transition: background-color 0.25s ease;
  }

  .custom-drawer__outer:not(.custom-drawer__open),
  .custom-drawer__fixed {
    pointer-events: none;
  }

  .custom-drawer {
    position: relative;
    top: 0;
    height: 100%;
    transition: transform 0.25s ease;
  }
</style>
