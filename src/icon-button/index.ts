export { default } from "./IconButton.svelte";

import { createRippleAnimation as _createRippleAnimation } from "../button";

export function createRippleAnimation(ev: MouseEvent, el: HTMLSpanElement, options: RippleOptions | null = null) {
  // @ts-expect-error
  return _createRippleAnimation(ev, el, options);
}
