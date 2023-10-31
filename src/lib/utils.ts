import type { ComponentType } from 'svelte';
import TextComponent from './components/Slider/TextComponent.svelte';

export const initEditor = (value: HTMLElement, _document: Document) => {
    if (_document) {
        const start = _document.getElementById('start');
        start?.append(value);
    }
}

const componentsMap = new Map<Editor.ElementType, [string, ComponentType]>()
    .set('text', ["Text Element", TextComponent]);

export const getComponent = (type: Editor.ElementType): [string, ComponentType] | undefined => {
    if (!componentsMap.has(type)) return;
    else {
        return componentsMap.get(type)
    }
}

export const textTypes = [
    { key: "header", value: "Header" },
    { key: "content", value: "Content" }
]