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

  interface Item {
    name: string;
    disabled: boolean;
    description?: string;
  }

  interface View {
    title: string;
  }

  let drawerWidth: number;
  let drawerOpen: boolean;
  let drawerItems: Item[] = [
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

  let view: View = {
    title: "",
  };

  function _drawerItemChecked(ev: CustomEvent<{ data: Item }>) {
    const data = ev.detail.data;
    view = {
      title: data.name,
    };
  }
</script>

<svelte:head>
  <title>Demo</title>
</svelte:head>

<Router>
  <Drawer fixed bind:width={drawerWidth} bind:open={drawerOpen}>
    <List
      style={`
        padding: 8px;
      `}
      checkable
      on:itemcheck={(ev) => _drawerItemChecked(ev)}
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

  <div
    style={`
      position: relative;
      left: ${drawerOpen ? drawerWidth || 0 : 0}px;
      top: 0;
      width: calc(100% - ${drawerOpen ? drawerWidth || 0 : 0}px);
      height: 100vh;
    `}
    class="views"
  >
    {#if view.title !== ""}
      <iframe title={view.title} />
    {/if}
  </div>
</Router>

<style>
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
