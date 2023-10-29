import type { ComponentType } from 'svelte';
import TextComponent from './components/Slider/TextComponent.svelte';

export const initEditor = (value: HTMLElement, _document: Document) => {
    if (_document) {
        const start = _document.getElementById('start');
        start?.append(value);
    }
}

const componentsMap = new Map<Editor.ElementType, ComponentType>()
    .set('text', TextComponent);

export const getComponent = (type: Editor.ElementType): ComponentType | undefined => {
    if (!componentsMap.has(type)) return;
    else {
        return componentsMap.get(type)
    }
}