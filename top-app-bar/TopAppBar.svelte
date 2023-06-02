<script lang="ts">
  let _css = "";
  export { _css as css };

  let _styles = "";
  export { _styles as styles };

  // TopAppBar.svelte
  export let height: number = 50;
  // TODO: need a slot for meta "left" and "right"
</script>

<nav
  class={`custom-topappbar ` + _css}
  style={`
    width: 100%;
    height: ${height}px;
  ` + _styles}
  {...$$restProps}
>
  <!-- TODO: left and right meta slots -->
</nav>
