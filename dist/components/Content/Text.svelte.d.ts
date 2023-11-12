import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        props: Editor.TextElementProps;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextProps = typeof __propDef.props;
export type TextEvents = typeof __propDef.events;
export type TextSlots = typeof __propDef.slots;
export default class Text extends SvelteComponent<TextProps, TextEvents, TextSlots> {
}
export {};
