import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        name?: string | undefined;
        props: Record<string, unknown>;
        type: Editor.ElementType;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SliderBuilderProps = typeof __propDef.props;
export type SliderBuilderEvents = typeof __propDef.events;
export type SliderBuilderSlots = typeof __propDef.slots;
export default class SliderBuilder extends SvelteComponent<SliderBuilderProps, SliderBuilderEvents, SliderBuilderSlots> {
}
export {};
