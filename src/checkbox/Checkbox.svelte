<script lang="ts">
  /* disableUserActions will only allow check and uncheck programmatically */
  export let disableUserActions: boolean = false;
  export let checked: boolean = false;

  function _click(
    ev: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }
  ) {
    // TODO: add value to group (or remove)
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="custom-checkbox"
  class:checked
  on:click={disableUserActions ? _click : null}
  {...$$restProps}
>
  {#if checked}
    <div class="material-icons">check_box</div>
  {:else}
    <div class="material-icons">check_box_outline_blank</div>
  {/if}
</div>

<style>
  /* TODO: move styles to theme */
</style>
