<script lang="ts">
  // TODO: showcase (and testing) all the components here
  import { Router, Link, Route } from "svelte-routing";
  import Drawer from "../../drawer";
  import Buttons from "./routes/buttons/Buttons.svelte";
  import Checkboxes from "./routes/checkboxes/Checkboxes.svelte";
  import Lists from "./routes/lists/Lists.svelte";
  import Misc from "./routes/misc/Misc.svelte";
  import Sliders from "./routes/sliders/Sliders.svelte";

  let drawerItems: { name: string }[] = [];
</script>

<svelte:head>
  <title>Demo</title>
</svelte:head>

<Router>
  <Drawer fixed>
    <!-- TODO: items: "button", "checkbox", "drawer", ... -->
    <!-- TODO: need some (sub)header item -->
    {#each drawerItems as item}
      <!-- TODO component name and on:click handler (set .active item) -->
    {/each}
  </Drawer>

  <div class="content">
    <!-- TODO: routes (showcase components in a iframe?) -->
  </div>
</Router>

<style>
  .content {
    position: relative;
    left: 300px;
    top: 0;
    width: calc(100% - 301px);
    height: 100vh;
  }
</style>
