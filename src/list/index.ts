export { default } from "./List.svelte";

import { createRippleAnimation as _createRippleAnimation } from "../button";

export interface CreateListItemOptions {
  primaryText: string,
  secondaryText: string,
  checkList: boolean,
  meta: HTMLSpanElement[] | null,
}

const defaultOptions: CreateListItemOptions = {
  primaryText: "",
  secondaryText: "",
  checkList: false,
  meta: null,
};

export type MetaPosition = ("right" | "left"); // NOTE: there is only right or left of text

export function createRippleAnimation(ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
  return _createRippleAnimation(ev);
}

export function createMetaElement(position: MetaPosition, ...childs: HTMLElement[]): HTMLSpanElement {
  const meta = document.createElement("span");

  meta.classList.add("custom-list-item__meta");

  for (const c of childs) meta.appendChild(c);

  return meta;
}

export function createListItem(options: CreateListItemOptions | null = null): HTMLLIElement {
  if (!options) {
    options = defaultOptions;
  } else {
    options = {
      ...defaultOptions,
      ...options,
    };
  }

  const item = document.createElement("li");

  // TODO: create li elemnt with data from options

  item.classList.add("custom-list-item");

  return item;
}
