import { writable, type Writable } from "svelte/store";

const text: Writable<Editor.TextElementProps> = writable({} as Editor.TextElementProps);
export const content: Writable<Editor.TextElementProps> = text;

export const setAppearance =  (type: "header" | "content"): void => {
    content.update((state: Editor.TextElementProps) => ({...state, {appearance: {type}}));
}