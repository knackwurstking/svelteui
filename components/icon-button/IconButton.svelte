<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { createRippleAnimation } from "../../lib/ripple";

  const dispatch = createEventDispatcher();

  let _class = "";
  export { _class as class };

  export let disabled = false;

  function _click(ev: MouseEvent) {
    createRippleAnimation(ev, ev.currentTarget as HTMLSpanElement, {
      startFromCenter: true,
    });
    dispatch("click");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={"custom-icon-button material-symbols-outlined " + _class}
  class:disabled
  {...$$restProps}
  on:click={!disabled && _click}
>
  <slot />
</div>
