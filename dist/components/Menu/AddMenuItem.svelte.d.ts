import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AddMenuItemProps = typeof __propDef.props;
export type AddMenuItemEvents = typeof __propDef.events;
export type AddMenuItemSlots = typeof __propDef.slots;
export default class AddMenuItem extends SvelteComponent<AddMenuItemProps, AddMenuItemEvents, AddMenuItemSlots> {
}
export {};
