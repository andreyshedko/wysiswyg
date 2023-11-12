import { writable } from 'svelte/store';
const _slider = writable({ isOpen: false });
export const slider = _slider;
export const toggleSlider = (isOpen) => {
    _slider.update((state) => ({ ...state, isOpen }));
};
export const setSelectedElement = (type) => {
    _slider.update((state) => ({ ...state, type }));
};
