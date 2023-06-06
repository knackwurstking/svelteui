<script lang="ts">
  import { onMount } from "svelte";

  let _class = "";
  export { _class as class }

  export let value: any;

  export let min: number;
  export let max: number;
  export let readonly = false;
  export let disabled = false;
</script>

<label
  class={"custom-input " + _class}
  class:readonly
  class:disabled
>
  {#if !!$$slots.default}
    <span><slot /></span>
    <input bind:value
      {min}
      {max}
      {disabled}
      {readonly}
      {...$$restProps}
    />
  {:else}
    <input bind:value
      {min}
      {max}
      {disabled}
      {readonly}
      {...$$restProps}
    />
  {/if}
</label>

<style>
  /*
  .custom-input {
    border: 1px solid red;
  }
  */

  .custom-input input {
    width: 100%;
  }
</style>
