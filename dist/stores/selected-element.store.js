import { writable } from 'svelte/store';
const _props = writable({});
export const props = _props;
export const setElementProps = (content) => {
    _props.update((p) => p = content);
};
