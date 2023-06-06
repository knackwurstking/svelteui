export { default } from "./Button.svelte";

export { default as Group } from "./Group.svelte";
export { default as Label } from "./Label.svelte";

import { createRippleAnimation as _createRippleAnimation } from "../ripple";

export function createRippleAnimation(ev: MouseEvent, el: HTMLButtonElement, options: RippleOptions | null = null) {
  _createRippleAnimation(ev, el, options)
}
