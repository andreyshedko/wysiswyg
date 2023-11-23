import { derived, writable, type Writable } from 'svelte/store';
import { selected } from './selected-id.store.ts';
import { Observable } from 'rxjs';
import type { TeardownLogic } from 'rxjs/internal/types';

const _props: Writable<Map<string, Record<string, unknown>>> = writable(new Map());
export const props: Writable<Map<string, Record<string, unknown>>> = _props;

const _id = derived(selected, $selected => $selected);
export const derivedProps = derived([_props, _id], ([$props, $id]) => $props.get($id));

export const setElementProps = (content: Record<string, unknown>) => {
    _id.subscribe(id => {
        _props.update((p) => p.set(id, content));
    });
}

function toObservable(store: { subscribe: (arg0: (value: unknown) => void) => TeardownLogic; }) {
    return new Observable(observer => {
        return store.subscribe((value: unknown) => observer.next(value));
    })
}

export const props$ = toObservable(derivedProps);