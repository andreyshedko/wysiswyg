import { SvelteComponent } from "svelte";
import './Menu.scss';
declare const __propDef: {
    props: {
        callback?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MenuProps = typeof __propDef.props;
export type MenuEvents = typeof __propDef.events;
export type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponent<MenuProps, MenuEvents, MenuSlots> {
}
export {};
