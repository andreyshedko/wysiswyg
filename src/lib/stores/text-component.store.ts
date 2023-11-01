import { writable, type Writable } from "svelte/store";

const text: Writable<Editor.TextElementProps> = writable({} as Editor.TextElementProps);
export const content: Writable<Editor.TextElementProps> = text;

export const setType = (type: "header" | "content"): void => {
    content.update((state: Editor.TextElementProps) => ({ ...state, appearance: { ...state.appearance, type} }));
}

export const setColor = (color: Editor.Color): void => {
    content.update((state: Editor.TextElementProps) => ({ ...state, appearance: { ...state.appearance, color} }));
}