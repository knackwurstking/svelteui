<script lang="ts">
  export let value: any;
</script>

<div class="custom-infinite-swipe__item" data-value={value}>
  <slot />
</div>

<style>
  .custom-infinite-swipe__item {
    scroll-snap-align: center;
  }
</style>
