export { default } from "./List.svelte";
export { default as Item } from "./Item.svelte";
export { default as Meta } from "./Meta.svelte";

import { createRippleAnimation as _createRippleAnimation } from "../button";

export function createRippleAnimation(ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
  return _createRippleAnimation(ev);
}
