<script lang="ts">
  export let height: number | string = "fit-content";
  export let primaryText: string = "";
  export let secondaryText: string = "";

  /** Used for List item (un)check */
  export let value: any = null;
</script>

<li
  class="custom-list-item"
  style={`height: ${typeof height === "number" ? `${height}px` : `${height}`}`}
>
  <slot name="left" />

  <span class="custom-list-item__text">
    <span class="custom-list-item__primary-text">{primaryText}</span><br />
    <span class="custom-list-item__secondary-text">{secondaryText}</span>
  </span>

  <slot name="right" />
</li>

<style>
  .custom-list-item {
    position: relative;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    overflow: hidden;
  }

  .custom-list-item__text {
    height: 100%;
    padding: 8px;

    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .custom-list-item__text .custom-list-item__primary-text {
    font-size: 1em;
    font-weight: 400;
    font-family: FiraCode;
  }

  .custom-list-item__text .custom-list-item__secondary-text {
    font-size: 0.85em;
    font-weight: 400;
  }
</style>
