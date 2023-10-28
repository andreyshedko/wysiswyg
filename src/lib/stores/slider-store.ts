import { writable, type Writable } from 'svelte/store';

const _slider: Writable<Editor.SliderState> = writable({ isOpen: false });

export const slider: Readonly<Writable<Editor.SliderState>> = _slider;

export const toggleSlider = (isOpen: boolean) => {
    _slider.update((state: Editor.SliderState) => ({ ...state, isOpen }));
}

export const toggleElement = (element: Editor.ElementType) => {
    _slider.update((state: Editor.SliderState) => ({ ...state, selectedElement: element }));
}