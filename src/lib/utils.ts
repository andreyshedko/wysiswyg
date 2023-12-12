import { browser } from '$app/environment';
import type { ComponentType } from 'svelte';
import Text from './components/Content/Text.svelte';
import TextComponent from './components/Slider/TextComponent.svelte';
import { setElementProps, setSelectedId } from './stores/selected-element.store.ts';
import Wrapper from './components/Wrapper.svelte';

export const initEditor = (value: HTMLElement, _document: Document) => {
    if (_document) {
        const start = _document.getElementById('editor');
        start?.append(value);
    }
}

export const textTypes = [
    { key: "header", value: "Header" },
    { key: "content", value: "Content" }
];

export const alignTypes = [
    { key: "auto", value: "Auto" },
    { key: "right", value: "Right" },
    { key: "center", value: "Center" },
    { key: "justify", value: "Justify" },
];

const elementsMap = new Map<Editor.ElementType, unknown>()
    .set('text', Text);

const sliderElementsMap = new Map<Editor.ElementType, [string, ComponentType]>()
    .set('text', ["Text Element", TextComponent]);

const defaultPropsMap = new Map<Editor.ElementType, Record<string, unknown>>()
    .set("text", {
        'text': "This is Text component",
        'appearance': {
            'type': 'header',
            'color': '#f91010',
            'padding': '10px'
        }
    });

export const getSliderComponent = (component: Editor.ElementType) => {
    return sliderElementsMap.get(component)
}

export const children = (element: Editor.ElementType): {_element: any, defaults: Record<string, unknown>} => {
    const _element = elementsMap.get(element);
    let defaults = defaultPropsMap.get(element);
    return { _element, defaults}
}

export const insertElement = (element: Editor.ElementType): void => {
    let start: Element | null;
    if (browser) {    
        start = document.getElementById('editor') as Element;
        const id = crypto.randomUUID();
        setSelectedId(id);
        const _children = children(element);
        new Wrapper({ target: start, props: { id, children: _children  } });
    }
}

export function generateStyles(appearance: Record<string, string>): string {
    let stylesStringArr: string[] = [];
    Object.entries(appearance)
        .filter((entry) => entry[0] !== 'type')
        .forEach((entry) => {
            let key = replaces(entry[0]);
            let value = entry[1];
            if (value) {
                stylesStringArr.push(`${key}: ${value};`);
                if (entry[0] === 'gradient') {
                    stylesStringArr.push('-webkit-background-clip: text;')
                    stylesStringArr.push('-webkit-text-fill-color: transparent;')
                }
            }
        });

    return stylesStringArr.join(" ");
}

export function replaces(value: string): string {
    const values = new Map<string, string>()
        .set("size", "font-size")
        .set("wheight", "font-weight")
        .set("lineHeight", "line-height")
        .set("letterSpacing", "letter-spacing")
        .set("alignment", "text-align")
        .set("textIndent", "text-indent")
        .set("gradient", "background");
    if (values.has(value)) {
        return values.get(value)!;
    } else {
        return value;
    }
}

export function changeText(props: Editor.TextElementProps, value: string): void {
    props = {...props, text: value};
    setElementProps({ ...props });
}

export function changeColor(props: Editor.TextElementProps, color: string): void {
    props.appearance = { ...props.appearance,  color };
    setElementProps({ ...props });
}

export function changeAppearance(props: Editor.TextElementProps, type: "header" | "content"): void {
    props.appearance = { ...props.appearance, type };
    setElementProps({ ...props });
}

export function changeSize(props: Editor.TextElementProps, value: string): void {
    props.appearance = { ...props.appearance, size: `${value}px` };
    setElementProps({ ...props });
}

export function changeWheight(props: Editor.TextElementProps, wheight: string): void {
    props.appearance = { ...props.appearance, wheight };
    setElementProps({ ...props });
}

export function changeLineHeight(props: Editor.TextElementProps, value: string): void {
    props.appearance = { ...props.appearance, lineHeight: `${value}px` };
    setElementProps({ ...props });
}

export function changeLetterSpacing(props: Editor.TextElementProps, value: string): void {
    props.appearance = { ...props.appearance, letterSpacing: `${value}px` };
    setElementProps({ ...props });
}

export function changeTextIndent(props: Editor.TextElementProps, value: string): void {
    props.appearance = { ...props.appearance, textIndent: `${value}px` };
    setElementProps({ ...props });
}

export function changeMargin(props: Editor.TextElementProps, value: string): void {
    props.appearance = { ...props.appearance, margin: `${value}px` };
    setElementProps({ ...props });
}

export function changeAlign(props: Editor.TextElementProps, alignment: string): void {
    props.appearance = { ...props.appearance, alignment };
    setElementProps({ ...props });
}


export function changeGradient(props: Editor.TextElementProps, gradient: string): void {
    props.appearance = { ...props.appearance, gradient };
    setElementProps({ ...props });
}

export function transformCSSString(replace: string, value?: string): number | string | undefined {
    return value?.includes(replace) ? +value?.replace(replace, '') : value;
}