import { writable } from "svelte/store";
const text = writable({});
export const content = text;
export const setType = (type) => {
    content.update((state) => ({ ...state, appearance: { ...state.appearance, type } }));
};
export const setColor = (color) => {
    content.update((state) => ({ ...state, appearance: { ...state.appearance, color } }));
};
