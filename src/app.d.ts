// See https://kit.svelte.dev/docs/types#app

import type { ComponentType } from "svelte";

// for information about these interfaces
declare global {
	namespace Editor {
		type Color = {r: number, g: number, b: number, a: number};
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
		interface TextElementProps {
			text: string;
			appearance: {
				type: 'header' | 'content';
				color: string;
				size: string;
				wheight: string;
				lineHeight: string;
				letterSpacing: string;
				textIndent: string;
				firstLine: boolean;
				margin: string;
				alignment: string;
				gradient: string;
				width: string;
				shadow: string;
			}
		}
	}
}

export { };
