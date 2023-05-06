export { default } from "./List.svelte";
export { default as Item } from "./Item.svelte";
export { default as Meta } from "./Meta.svelte";

import { createRippleAnimation as _createRippleAnimation } from "../button";

export interface PrimaryTextOptions {
  text: string;
}

export interface SecondaryTextOptions {
  text: string;
}

export interface TextOptions {
  primary: PrimaryTextOptions;
  secondary: SecondaryTextOptions;
}

export interface ItemOptions {
  text: TextOptions;
  checkList: boolean,
  meta: HTMLSpanElement[] | null,
}

const defaultPrimaryTextOptions: PrimaryTextOptions = {
  text: "",
}

const defaultSecondaryTextOptions: SecondaryTextOptions = {
  text: "",
}

const defaultTextOptions: TextOptions = {
  primary: defaultPrimaryTextOptions,
  secondary: defaultSecondaryTextOptions,
}

const defaultOptions: ItemOptions = {
  text: defaultTextOptions,
  checkList: false,
  meta: null,
};

export type MetaPosition = ("right" | "left"); // NOTE: there is only right or left of text

export function createRippleAnimation(ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
  return _createRippleAnimation(ev);
}

export function createPrimaryText(options: PrimaryTextOptions | null = null) {
  if (!options) options = defaultPrimaryTextOptions
  else options = { ...defaultPrimaryTextOptions, ...options }

  // TODO: ...
}

export function createSecondaryText(options: SecondaryTextOptions | null = null) {
  if (!options) options = defaultSecondaryTextOptions
  else options = { ...defaultSecondaryTextOptions, ...options }

  // TODO: ...
}

export function createText(options: TextOptions) {
  if (!options) options = defaultTextOptions
  else options = { ...defaultTextOptions, ...options }

  const text = document.createElement("span");
  const primary = createPrimaryText(options.primary);
  const secondary = createSecondaryText(options.secondary);

  // TODO: ...
}



export function createMeta(position: MetaPosition, ...childs: HTMLElement[]): HTMLSpanElement {
  const meta = document.createElement("span");

  meta.classList.add("custom-list-item__meta");

  for (const c of childs) meta.appendChild(c);

  // TODO: handle position (as slot), ...

  return meta;
}

export function createItem(options: ItemOptions | null = null): HTMLLIElement {
  if (!options) options = defaultOptions;
  else options = { ...defaultOptions, ...options };

  const item = document.createElement("li");

  // TODO: create li elemnt with data from options

  item.classList.add("custom-list-item");

  return item;
}
