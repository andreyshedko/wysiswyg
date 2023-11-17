import { browser } from '$app/environment';
import Text from './components/Content/Text.svelte';
import TextComponent from './components/Slider/TextComponent.svelte';
import { setElementProps } from './stores/selected-element.store.ts';
export const initEditor = (value, _document) => {
    if (_document) {
        const start = _document.getElementById('start');
        start?.append(value);
    }
};
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
const elementsMap = new Map()
    .set('text', Text);
const sliderElementsMap = new Map()
    .set('text', ["Text Element", TextComponent]);
const defaultPropsMap = new Map()
    .set("text", {
    'text': "This is Text component",
    'appearance': {
        'type': 'header',
        'color': '#f91010'
    }
});
export const getSliderComponent = (component) => {
    return sliderElementsMap.get(component);
};
export const insertElement = (element) => {
    let start;
    if (browser) {
        const _element = elementsMap.get(element);
        start = document.getElementById('start');
        const props = defaultPropsMap.get(element);
        new _element({ target: start, props: { "props": props } });
    }
};
export const setDefaultProps = (element) => {
    const props = defaultPropsMap.get(element);
    setElementProps(props);
};
export function generateStyles(appearance) {
    let stylesStringArr = [];
    Object.entries(appearance)
        .filter((entry) => entry[0] !== 'type')
        .forEach((entry) => {
        let key = replaces(entry[0]);
        let value = entry[1];
        if (value) {
            stylesStringArr.push(`${key}: ${value};`);
        }
    });
    return stylesStringArr.join(" ");
}
export function replaces(value) {
    const values = new Map()
        .set("size", "font-size")
        .set("wheight", "font-weight")
        .set("lineHeight", "line-height")
        .set("letterSpacing", "letter-spacing")
        .set("alignment", "text-align")
        .set("textIndent", "text-indent");
    if (values.has(value)) {
        return values.get(value);
    }
    else {
        return value;
    }
}
export function changeText(props, value) {
    props.text = value;
    setElementProps({ ...props });
}
export function changeColor(props, value) {
    props.appearance.color = value;
    setElementProps({ ...props });
}
export function changeAppearance(props, type) {
    props.appearance.type = type;
    setElementProps({ ...props });
}
export function changeSize(props, value) {
    props.appearance.size = `${value}px`;
    setElementProps({ ...props });
}
export function changeWheight(props, value) {
    props.appearance.wheight = value;
    setElementProps({ ...props });
}
export function changeLineHeight(props, value) {
    props.appearance.lineHeight = `${value}px`;
    setElementProps({ ...props });
}
export function changeLetterSpacing(props, value) {
    props.appearance.letterSpacing = `${value}px`;
    setElementProps({ ...props });
}
export function changeTextIndent(props, value) {
    props.appearance.textIndent = `${value}px`;
    setElementProps({ ...props });
}
export function changeMargin(props, value) {
    props.appearance.margin = `${value}px`;
    setElementProps({ ...props });
}
export function changeAlign(props, value) {
    props.appearance.alignment = value;
    setElementProps({ ...props });
}
export function transformCSSString(replace, value) {
    return value?.includes(replace) ? +value?.replace(replace, '') : value;
}
