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
export type TextComponentProps = typeof __propDef.props;
export type TextComponentEvents = typeof __propDef.events;
export type TextComponentSlots = typeof __propDef.slots;
export default class TextComponent extends SvelteComponent<TextComponentProps, TextComponentEvents, TextComponentSlots> {
}
export {};
