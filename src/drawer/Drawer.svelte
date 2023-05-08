<script lang="ts">
  /** swipeable will enable open/close per swipe (touch) */
  export let swipeable: boolean = false;
  export let width: number = 300;
</script>

<div
  class="custom-drawer"
  class:custom-drawer__swipeable={swipeable}
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
    transition: left 0.25s ease;
  }

  .custom-drawer__swipeable {
  }
</style>
