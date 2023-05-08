<script lang="ts">
  // NOTE: move drawer (swipeable) per transform

  /** swipeable will enable open/close per swipe (touch) */
  export let swipeable: boolean = false;
  export let width: number = 300;
  /** fixed will disable swipeable */
  export let fixed: boolean = false;
</script>

<div
  class="custom-drawer"
  class:custom-drawer__swipeable={!fixed && swipeable}
  class:custom-drawer__fixed={fixed}
  style={`
    width: ${width}px;
    left: -${width}px;
  `}
  {...$$restProps}
>
  <slot />
</div>

<style>
  .custom-drawer {
    position: absolute;
    top: 0;
    bottom: 0;
    transition: transform 0.25s ease;
  }

  .custom-drawer__swipeable {
  }

  .custom-drawer__fixed {
    left: 0 !important;
  }
</style>
