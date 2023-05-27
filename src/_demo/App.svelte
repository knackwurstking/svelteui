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

  let drawerItems: { name: string; disabled: boolean; description?: string }[] =
    [
      { name: "Install", disabled: true },
      { name: "Theme", disabled: false, description: "How to use a theme" },
      { name: "Button", disabled: true },
      { name: "IconButton", disabled: true },
      { name: "Checkbox", disabled: true },
      { name: "Slider", disabled: true },
      { name: "Drawer", disabled: true },
      { name: "List", disabled: true },
      { name: "Misc", disabled: true },
    ];
</script>

<svelte:head>
  <title>Demo</title>
</svelte:head>

<Router>
  <Drawer fixed>
    <List
      style={`
        padding: 8px;
      `}
      checkable
      on:itemcheck={() => console.log("itemcheck")}
      on:itemuncheck={() => console.log("itemuncheck")}
    >
      {#each drawerItems as item}
        <Item
          style={`
            user-select: none;
            border-radius: var(--theme-border-radius);
            margin: 4px 0;
          `}
          primaryText={item.name}
          secondaryText={item.description || ""}
          value={item}
          disabled={item.disabled}
        />
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
