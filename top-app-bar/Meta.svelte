<script lang="ts">
  let _css = "";
  export { _css as css };
</script>

<div 
  class={"custom-topappbar-meta " + _css}
  {...$$restProps}
>
  <slot />
</div>
