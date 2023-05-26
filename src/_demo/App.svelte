<script lang="ts">
  // TODO: showcase (and testing) all the components here
  import { Router, Link, Route } from "svelte-routing";

  import Drawer from "../../drawer";
  import List, { Item, Separator } from "../../list";

  import Buttons from "./routes/buttons/Buttons.svelte";
  import Checkboxes from "./routes/checkboxes/Checkboxes.svelte";
  import Lists from "./routes/lists/Lists.svelte";
  import Misc from "./routes/misc/Misc.svelte";
  import Sliders from "./routes/sliders/Sliders.svelte";

  let drawerItems: { name: string }[] = [
    { name: "Install" },
    { name: "Theme" },
    { name: "Button" },
    { name: "IconButton" },
    { name: "Checkbox" },
    { name: "Slider" },
    { name: "Drawer" },
    { name: "List" },
    { name: "Misc" },
  ];
</script>

<svelte:head>
  <title>Demo</title>
</svelte:head>

<Router>
  <Drawer fixed>
    <!-- TODO: need some (sub)header item -->
    <List
      checkable
      on:itemcheck={() => console.log("itemcheck")}
      on:itemuncheck={() => console.log("itemuncheck")}
    >
      {#each drawerItems as item}
        <Item style="user-select: none;" primaryText={item.name} value={item} />
        <Separator />
      {/each}
    </List>
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
