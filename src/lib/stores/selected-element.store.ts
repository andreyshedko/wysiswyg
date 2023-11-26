import { derived, get, writable, type Writable } from 'svelte/store';


const props: Writable<Map<string, Record<string, unknown>>> = writable(new Map());
export const _props: Writable<Map<string, Record<string, unknown>>> = props;

export const _id: Writable<string> = writable();

export const setSelectedId = (id: string) => _id.set(id);

export const setElementProps = (content: Record<string, unknown>) => {
    const id = get(_id);
    if (id) {
        _props.update(p => p.set(id, content));
    }
}

export const derivedProps = derived([_props, _id], ([$props, $id]) => $props.get($id));