<script lang="ts">
  import { Router, Route, navigate } from "svelte-routing";

  import Drawer from "../../drawer";
  import List, { Item, Separator } from "../../list";

  import Theme from "./views/theme/Theme.svelte";
  import Buttons from "./views/buttons/Buttons.svelte";

  interface Item {
    name: string;
    route?: string;
    disabled: boolean;
    description?: string;
  }

  let drawerWidth: number;
  let drawerOpen: boolean;
  let drawerItems: Item[] = [
    { name: "Install", disabled: true },
    {
      name: "Theme",
      route: "/theme",
      disabled: false,
      description: "How to use a theme",
    },
    {
      name: "TopAppBar",
      route: "/top-app-bar",
      disabled: true,
      description: "An app bar on top?",
    },
    {
      name: "Buttons",
      route: "/buttons",
      disabled: false,
      description: "Button and Button Group examples",
    },
    { name: "IconButton", disabled: true },
    { name: "Checkbox", disabled: true },
    { name: "Slider", disabled: true },
    { name: "Drawer", disabled: true },
    { name: "List", disabled: true },
    {
      name: "Infinite Swipe",
      disabled: true,
      description: "Infinite horizontal or vertical swipe",
    },
    {
      name: "Misc",
      disabled: true,
      description: "Just some random components",
    },
  ];

  function _drawerItemChecked(ev: CustomEvent<{ data: Item }>) {
    const data = ev.detail.data;
    if (data.route) navigate(data.route);
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
      preventUncheck
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
          checked={location.pathname === item.route}
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
    <Route path="/theme" component={Theme} />
    <Route path="/buttons" component={Buttons} />
  </div>
</Router>
