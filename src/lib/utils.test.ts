import { expect, test } from 'vitest'
import { changeAppearance, changeColor, changeText, generateStyles, replaces, transformCSSString } from './utils.ts'

test('transformCSSString', () => {
    expect(transformCSSString('px', '7px')).toBe(7);
    expect(transformCSSString('px', '7rem')).toBe('7rem');
});

test('replaces', () => {
    expect(replaces('size')).toBe('font-size');
    expect(replaces('wheight')).toBe('font-weight');
});

test('change props', () => {
    const props: Editor.TextElementProps = {text: "a", appearance: {color: "#fff", type: "header" }};
    changeText(props, "b")
    expect(props.text).toBe("b");
    changeColor(props, "#333");
    expect(props.appearance.color).toBe("#333");
    changeAppearance(props, "content")
    expect(props.appearance.type).toBe("content");
});

test('build styles from props', () => {
    const props: Editor.TextElementProps = {text: "a", appearance: {color: "#fff", type: "header" }};
    expect(generateStyles(props.appearance)).toBe("color: #fff;");
});

