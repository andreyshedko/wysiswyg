import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        historyCallback: () => void;
        saveCallback: () => void;
        publishCallback: () => void;
        helpCallback: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FileMenuItemProps = typeof __propDef.props;
export type FileMenuItemEvents = typeof __propDef.events;
export type FileMenuItemSlots = typeof __propDef.slots;
export default class FileMenuItem extends SvelteComponent<FileMenuItemProps, FileMenuItemEvents, FileMenuItemSlots> {
}
export {};
