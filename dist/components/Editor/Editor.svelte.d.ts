import { SvelteComponent } from "svelte";
import '../../app.scss';
import './Editor.scss';
declare const __propDef: {
    props: {
        locale?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EditorProps = typeof __propDef.props;
export type EditorEvents = typeof __propDef.events;
export type EditorSlots = typeof __propDef.slots;
export default class Editor extends SvelteComponent<EditorProps, EditorEvents, EditorSlots> {
}
export {};
