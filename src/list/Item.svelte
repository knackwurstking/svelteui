<script lang="ts">
  export let height: number | string = "fit-content";
  export let primaryText: string = "";
  export let secondaryText: string = "";
</script>

<li
  class="custom-list-item"
  style={`height: ${typeof height === "number" ? `${height}px` : `${height}`}`}
>
  <!-- TODO: primary and secondary text -->
  <span class="custom-list-item__text">
    <span class="custom-list-item__primary-text" />
    <span class="custom-list-item__secondary-text" />
  </span>

  <span class="custom-list-item__meta">
    <slot />
  </span>
</li>

<style>
  /* TODO: move styles to theme (css) file */
  .custom-list-item {
    position: relative;
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }

  .custom-list-item__text {
    display: inline-block;
    height: 100%;
    padding: 4px 8px;

    border: 1px solid green;
  }

  .custom-list-item__meta {
    display: inline-block;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    border: 1px solid yellow;
  }
</style>
