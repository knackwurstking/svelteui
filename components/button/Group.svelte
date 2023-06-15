<script lang="ts">
  let _class = "";
  export { _class as class };
</script>

<div class={"custom-button__group " + _class} {...$$restProps}>
  <slot />
</div>

<style>
  .custom-button__group {
    display: inline-flex;
  }
</style>
