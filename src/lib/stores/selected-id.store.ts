import { writable, type Writable } from "svelte/store";

const _selected: Writable<string> = writable('');

export const selected: Readonly<Writable<string>> = _selected;

export const setSelectedId = (id: string) => {
    _selected.set(id);
}