<script lang="ts">
  let _css = "";
  export { _css as css };

  let _styles = "";
  export { _styles as styles };

  export let height: number = 50;
</script>

<nav
  class={"custom-topappbar " + _css}
  style={`
    width: 100%;
    height: ${height}px;
  ` + _styles}
  {...$$restProps}
>
  <slot name="left" />
  <div class="spacer" />
  <slot name="right" />
</nav>
