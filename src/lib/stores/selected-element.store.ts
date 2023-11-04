import { writable, type Writable } from 'svelte/store';

const _props: Writable<Record<string, unknown>> = writable({});

export const props: Writable<Record<string, unknown>> = _props;

export const setElementProps = (content: Record<string, unknown>) => {
    _props.update((p) => p = content);
}

