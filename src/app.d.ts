// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace Editor {
		type ElementType = 'text'
			| 'image'
			| 'video'
			| 'list'
			| 'button'
			| 'link'
			| 'icons'
			| 'audio'
			| 'table'
			| 'timer'
			| 'divider'
			| 'form';
		interface SliderState {
			isOpen: boolean;
			selectedElement?: ElementType;
		}
	}
}

export { };
