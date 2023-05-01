const defaultOptions: CreateListItemOptions = {
  primaryText: "",
  secondaryText: "",
  meta: null,
}

export interface CreateListItemOptions {
  primaryText: string,
  secondaryText: string,
  meta: HTMLElement[] | null,
}

export function createListItem(list: HTMLElement, options: CreateListItemOptions | null = null): HTMLLIElement {
  if (!options) {
    options = defaultOptions;
  } else {
    options = {
      ...defaultOptions,
      ...options,
    };
  }

  const li = document.createElement("li");

  // TODO: create li elemnt with data from options
  li.classList.add("custom-list-item");

  list.appendChild(li);

  return li
}
