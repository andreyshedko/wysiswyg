// See https://kit.svelte.dev/docs/types#app

import type { ComponentType } from "svelte";

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
			type?: ElementType;
			component?: ComponentType;
		}
	}
}

export { };
