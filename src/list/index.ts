import { createRippleAnimation as _createRippleAnimation } from "../button";
import List from "./List.svelte";

export interface CreateListItemOptions {
  primaryText: string,
  secondaryText: string,
  checkList: boolean,
  meta: HTMLElement[] | null,
}

const defaultOptions: CreateListItemOptions = {
  primaryText: "",
  secondaryText: "",
  checkList: false,
  meta: null,
};

export function createRippleAnimation(ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
  return _createRippleAnimation(ev);
}

export function createMeataElement(list: HTMLUListElement, el: HTMLElement): HTMLSpanElement {
  const meta = document.createElement("span");

  // ...

  return meta;
}

export function createListItem(list: HTMLUListElement, options: CreateListItemOptions | null = null): HTMLLIElement {
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

  list.appendChild(item);

  return item;
}

export default List;
