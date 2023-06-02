<script lang="ts">
  // TopAppBar.svelte
  export let height: number = 50;
  // TODO: need a slot for meta "left" and "right"
</script>

<nav
  style={`
    width: 100%;
    height: ${height}px;
  `}
>
  <!-- TODO: left and right meta slots -->
</nav>

<style>
  nav {
    border: 1px solid red;
  }
</style>
