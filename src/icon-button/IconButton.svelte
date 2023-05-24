<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { createRippleAnimation } from ".";

  const dispatch = createEventDispatcher();

  let _class = "";
  export { _class as class };

  function _click(ev: MouseEvent) {
    createRippleAnimation(ev, ev.currentTarget as HTMLSpanElement);
    dispatch("click");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={"custom-icon-button material-symbols-outlined " + _class}
  {...$$restProps}
  on:click={_click}
>
  <slot />
</div>
