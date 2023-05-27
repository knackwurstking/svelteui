<script lang="ts">
  export let orientation: "horizontal" | "vertical";
</script>

<div class="custom-infinite-swipe">
  <slot />
</div>

<style>
  .custom-infinite-swipe {
    overflow: hidden;
    scroll-snap-type: x mandatory;
  }
</style>
