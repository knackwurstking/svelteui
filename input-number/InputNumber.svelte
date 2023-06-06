<script lang="ts">
  let _class = "";
  export { _class as class }

  export let value: number;

  export let min:number = null;
  export let max:number = null;
  export let readonly = false;
  export let disabled = false;
  export let invalid = false;
</script>

<label
  class={"custom-input " + _class}
  class:readonly
  class:disabled
  class:invalid
>
  <span><slot /></span>
  <input bind:value
    type="number"
    {min}
    {max}
    {disabled}
    {readonly}
    {...$$restProps}
  />
</label>

<style>
  .custom-input input[type="number"] {
    width: 100%;
  }
</style>
