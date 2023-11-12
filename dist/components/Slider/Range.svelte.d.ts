import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        min?: number | undefined;
        max?: number | undefined;
        initialValue?: number | undefined;
        id: any;
        value?: number | undefined;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RangeProps = typeof __propDef.props;
export type RangeEvents = typeof __propDef.events;
export type RangeSlots = typeof __propDef.slots;
export default class Range extends SvelteComponent<RangeProps, RangeEvents, RangeSlots> {
}
export {};
