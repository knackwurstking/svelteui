export { default } from "./List.svelte";
export { default as Item } from "./Item.svelte";
export { default as Meta } from "./Meta.svelte";

import { createRippleAnimation as _createRippleAnimation, type RippleOptions } from "../button";

export function createRippleAnimation(ev: MouseEvent, el: HTMLLIElement, options: RippleOptions = null) {
  // @ts-expect-error
  return _createRippleAnimation(ev, el, options);
}

export function createMeta(...children: HTMLElement[]): HTMLSpanElement {
  const span = document.createElement("span");

  span.classList.add("custom-list-item__meta");
  span.append(...children);

  return span
}

export function createItem(data: any, options: { leftMeta: HTMLElement[], rightMeta: HTMLElement[] } = { leftMeta: [], rightMeta: [] }): HTMLLIElement {
  const item = document.createElement("li");

  item.classList.add("custom-list-item");
  item.setAttribute("data-value", JSON.stringify(data));
  item.style.height = "fit-content";

  let el: HTMLSpanElement;
  if (options?.leftMeta?.length) {
    el = createMeta(...options.leftMeta);
    item.appendChild(el);
  }

  el = document.createElement("span");
  el.classList.add("custom-list-item__text");
  el.innerHTML = `
    <span class="custom-list-item__primary-text"></span><br />
    <span class="custom-list-item__secondary-text"></span>
  `;
  item.appendChild(el);

  if (options?.rightMeta?.length) {
    el = createMeta(...options.leftMeta);
    item.appendChild(el);
  }

  return item;
}
