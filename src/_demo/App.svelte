<script lang="ts">
  // TODO: showcase (and testing) all the components here
  import { Router, Link, Route } from "svelte-routing";
  import Drawer from "../../drawer";
  import Buttons from "./routes/buttons/Buttons.svelte";
  import Checkboxes from "./routes/checkboxes/Checkboxes.svelte";
  import Lists from "./routes/lists/Lists.svelte";
  import Misc from "./routes/misc/Misc.svelte";
  import Sliders from "./routes/sliders/Sliders.svelte";
</script>

<svelte:head>
  <title>Demo</title>
</svelte:head>

<Router>
  <!-- TODO: a drawer component here to choose which route to go? -->
  <Drawer fixed />
  <div>
    <!-- TODO: routes (showcase components in a iframe?) -->
  </div>
</Router>

<style>
</style>
