export { default } from "./Button.svelte";

export { default as Group } from "./Group.svelte";
export { default as Label } from "./Label.svelte";

export interface RippleOptions {
  reverse?: boolean;
}

export function createRippleAnimation(ev: MouseEvent, el: HTMLButtonElement, options: RippleOptions = null) {
  const rect = el.getBoundingClientRect();

  const cursorX = ev.clientX - rect.x;
  const cursorY = ev.clientY - rect.y;

  const circle = document.createElement("span");
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${cursorX - radius}px`;
  circle.style.top = `${cursorY - radius}px`;
  if (options?.reverse) circle.classList.add("ripple__reverse");
  circle.classList.add("ripple");

  const ripple = el.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  el.appendChild(circle);
}
