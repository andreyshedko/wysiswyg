import { writable, type Writable } from 'svelte/store';

const _dom: Writable<HTMLElement | undefined> = writable(undefined);

export const content: Writable<HTMLElement | undefined> = _dom;

export const setContent = (content: HTMLElement) => {
    _dom.update((dom) => dom ? content : document.createElement("p"));
}