import { writable } from 'svelte/store';
const _dom = writable(undefined);
export const content = _dom;
export const setContent = (content) => {
    _dom.update((dom) => dom ? content : document.createElement("p"));
};
