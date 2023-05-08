<script lang="ts">
  /* disableUserActions will only allow check and uncheck programmatically */
  export let disableUserActions: boolean = false;
  export let group: any[] = [];
  export let value: any = undefined;

  function _click(
    ev: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }
  ) {
    // TODO: add value to group (or remove)
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="custom-checkbox"
  class:checked={group.indexOf(value) >= 0}
  on:click={disableUserActions ? _click : null}
  {...$$restProps}
>
  {#if group.indexOf(value) >= 0}
    <div class="material-icons">check_box</div>
  {:else}
    <div class="material-icons">check_box_outline_blank</div>
  {/if}
</div>

<style>
  /* TODO: move styles to theme */
</style>
