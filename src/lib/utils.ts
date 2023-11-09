import { browser } from '$app/environment';
import type { ComponentType } from 'svelte';
import Text from './components/Content/Text.svelte';
import TextComponent from './components/Slider/TextComponent.svelte';
import { setElementProps } from './stores/selected-element.store.ts';

export const initEditor = (value: HTMLElement, _document: Document) => {
    if (_document) {
        const start = _document.getElementById('start');
        start?.append(value);
    }
}

export const textTypes = [
    { key: "header", value: "Header" },
    { key: "content", value: "Content" }
];

const elementsMap = new Map<Editor.ElementType, any>()
    .set('text', Text);

const sliderElementsMap = new Map<Editor.ElementType, [string, ComponentType]>()
    .set('text', ["Text Element", TextComponent]);

const defaultPropsMap = new Map<Editor.ElementType, Record<string, unknown>>()
    .set("text", {
        'text': "This is Text component",
        'appearance': {
            'type': 'header',
            'color': '#f91010'
        }
    });

export const getSliderComponent = (component: Editor.ElementType) => {
    return sliderElementsMap.get(component)
}

export const insertElement = (element: Editor.ElementType): void => {
    let start: HTMLElement | null;
    if (browser) {
        const _element = elementsMap.get(element);
        start = document.getElementById('start');
        const props = defaultPropsMap.get(element);
        new _element!({ target: start, props: { "props": props } });
    }
}

export const setDefaultProps = (element: Editor.ElementType): void => {
    const props = defaultPropsMap.get(element);
    setElementProps(props!);
}

export function generateStyles(appearance: Record<string, string>): string {
    let stylesStringArr: string[] = [];
    Object.entries(appearance)
        .filter((entry) => entry[0] !== 'type')
        .forEach((entry) => {
            let key = replaces(entry[0]);
            let value = entry[1];
            if (value) {
                stylesStringArr.push(`${key}: ${value};`)
            }
        });

    return stylesStringArr.join(" ");
}

function replaces(value: string): string {
    const values = new Map<string, string>()
        .set("size", "font-size")
        .set("wheight", "font-weight");
    if (values.has(value)) {
        return values.get(value)!;
    } else {
        return value;
    }
}