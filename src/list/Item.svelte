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
  data-value={JSON.stringify(value)}
  {...$$restProps}
>
  <slot name="left" />

  <span class="custom-list-item__text">
    <span class="custom-list-item__primary-text">{primaryText}</span><br />
    <span class="custom-list-item__secondary-text">{secondaryText}</span>
  </span>

  <slot name="right" />
</li>
