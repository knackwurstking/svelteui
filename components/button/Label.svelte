<script lang="ts">
  let _class = "";
  export { _class as class };
</script>

<span class={"custom-button__label " + _class} {...$$restProps}><slot /></span>

<style>
  span {
    position: relative;
  }
</style>
