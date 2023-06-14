# Svetle UI

## Projects using this

- [picow-rgbw-web](https://github.com/knackwurstking/picow-rgbw-web.git)
- [shift-scheduler](https://github.com/knackwurstking/shift-scheduler/tree/svelte)

## Examples

### Ripple

```typescript
declare interface RippleOptions {
  reverse?: boolean;
  startFromCenter?: boolean;
}

export function createRippleAnimation(ev: MouseEvent, el: HTMLElement, options: RippleOptions | null = null) {
    // ...
}
```

```svelte
<script lang="ts">
    import { createRippleAnimation } from "svelteui/ripple";

    const _click = (ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => 
        createRippleAnimation(ev, ev.currentTarget, null);
</script>

<div on:click={(ev) => _click(ev)}>Ripple Test</div>
```
