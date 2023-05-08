<script lang="ts">
  export let vertical: boolean = false;
</script>

<div
  class="custom-list-separator"
  class:custom-list-separator__vertical={vertical}
/>

<style>
  .custom-list-separator {
    position: relative;
    width: 100%;
    height: 1px;
    background-color: var(--theme-border-color);
  }

  .custom-list-separator__vertical {
    width: 1px;
    height: 100%;
  }
</style>
