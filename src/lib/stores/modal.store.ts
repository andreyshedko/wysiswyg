import { writable, type Writable } from "svelte/store";

const _modal: Writable<Editor.ModalState> = writable({ isOpen: false });

export const modal: Readonly<Writable<Editor.ModalState>> = _modal;

export const toggleModal = (isOpen: boolean) => {
    _modal.update((state: Editor.ModalState) => ({ ...state, isOpen }));
}