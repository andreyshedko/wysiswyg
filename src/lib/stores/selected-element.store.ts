import { derived, get, writable, type Writable } from 'svelte/store';

const props: Writable<Map<string, Record<string, unknown>>> = writable(new Map());
export const _props: Writable<Map<string, Record<string, unknown>>> = props;

export const _id: Writable<string> = writable();

export const setSelectedId = (id: string): void => _id.set(id);

export const setElementProps = (content: Record<string, unknown>): void => {
    const id = get(_id);
    if (id) {
        _props.update(p => p.set(id, content));
    }
}

export const deleteElementProps = (elid: string): void => {
    _props.update(p => {
        if (p.has(elid)) {
            p.delete(elid)
        }
        return p;
    });
}

export const derivedProps = derived([_props, _id], ([$props, $id]) => $props?.get($id));