import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items?: {
            key: string;
            value: string;
        }[] | undefined;
        selectedValue?: string | undefined;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponent<SelectProps, SelectEvents, SelectSlots> {
}
export {};
