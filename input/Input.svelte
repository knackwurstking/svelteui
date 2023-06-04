<script lang="ts">
  export let noedit = false;
  export let disabled = false;
</script>

<label
  class="custom-input"
  class:noedit
  class:disabled
>
  <span><slot /></span>
  <input />
</label>

<style>
  .custom-input {
  }

  .custom-input.noedit {
  }

  .custom-input.disabled {
  }
</style>
