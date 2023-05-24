<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let _class = "";
  export { _class as class };

  function _click() {
    dispatch("click");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
  class={"custom-icon-button material-symbols-outlined " + _class}
  {...$$restProps}
  on:click={_click}
>
  <slot />
</span>
