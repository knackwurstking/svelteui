<script lang="ts">
  let _class = "";
  export { _class as class };

  export let vertical: boolean = false;
</script>

<div
  class={"custom-list-separator " + _class}
  class:custom-list-separator__vertical={vertical}
  {...$$restProps}
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
