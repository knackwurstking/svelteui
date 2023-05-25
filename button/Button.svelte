<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { createRippleAnimation } from ".";

  let _class = "";
  export { _class as class };

  //export let variant: "text" | "raised" | "unelevated" | "outlined" =
  export let variant: "unelevated" | "outlined" = "unelevated";
  export let color: "primary" | "secondary" = "primary";

  const dispatch = createEventDispatcher();

  function _click(
    ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    createRippleAnimation(ev, ev.currentTarget as HTMLButtonElement);
    dispatch("click", ev);
  }
</script>

<button
  class={`custom-button ${variant} ${color} ` + _class}
  style={`` + $$props.style || ""}
  {...$$restProps}
  on:click={_click}
>
  <slot />
</button>

<style>
  .custom-button {
    margin-left: 0;
    margin-right: 0;
  }
</style>
