<script lang="ts">
  /** swipeable will enable open/close per swipe (touch) */
  export let swipeable: boolean = false;
</script>

<div class="custom-drawer" class:custom-drawer__swipeable={swipeable}>
  <slot />
</div>

<style>
  .custom-drawer {
    position: absolute;
  }

  .custom-drawer__swipeable {
  }
</style>
