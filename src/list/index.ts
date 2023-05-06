export { default } from "./List.svelte";
export { default as Item } from "./Item.svelte";
export { default as Meta } from "./Meta.svelte";

import { createRippleAnimation as _createRippleAnimation } from "../button";

export function createRippleAnimation(ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
  return _createRippleAnimation(ev);
}

export function createItem(data: any): HTMLLIElement {
  const item = document.createElement("li");

  item.classList.add("custom-list-item");
  item.setAttribute("data-value", JSON.stringify(data));
  item.style.height = "fit-content";
  item.innerHTML = `
    <slot name="left" />

    <span class="custom-list-item__text">
      <span class="custom-list-item__primary-text">{primaryText}</span><br />
      <span class="custom-list-item__secondary-text">{secondaryText}</span>
    </span>

    <slot name="right" />
  `;

  return item;
}
