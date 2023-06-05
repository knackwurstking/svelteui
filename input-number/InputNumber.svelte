<script lang="ts">
  export let value: number;

  export let min:number = null;
  export let max:number = null;
  export let noedit = false;
  export let disabled = false;
</script>

<label
  class="custom-input"
  class:noedit
  class:disabled
>
  <span><slot /></span>
  <input bind:value type="number" {min} {max} />
</label>

<style>
  .custom-input[type="number"] {
  }

  .custom-input[type="number"].noedit {
  }

  .custom-input[type="number"].disabled {
  }
</style>
