import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        event: MouseEvent;
    };
    events: {
        bold: CustomEvent<any>;
        italic: CustomEvent<any>;
        underline: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ContextMenuProps = typeof __propDef.props;
export type ContextMenuEvents = typeof __propDef.events;
export type ContextMenuSlots = typeof __propDef.slots;
export default class ContextMenu extends SvelteComponent<ContextMenuProps, ContextMenuEvents, ContextMenuSlots> {
}
export {};
