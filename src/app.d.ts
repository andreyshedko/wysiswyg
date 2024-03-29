// See https://kit.svelte.dev/docs/types#app

import type { ComponentType } from "svelte";

// for information about these interfaces
declare global {
	module Editor {
		type Color = { r: number, g: number, b: number, a: number };
		type ElementType =
			'layout'
			| 'header'
			| 'footer'
			| 'text'
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

		interface ModalState {
			isOpen: boolean;
		}

		type IEvent = MouseEvent | KeyboardEvent;

		interface TextElementProps {
			text: string;
			appearance: {
				type: 'header' | 'content';
				color: string;
				size?: string;
				wheight?: string;
				lineHeight?: string;
				letterSpacing?: string;
				textIndent?: string;
				margin?: string;
				padding?: string;
				alignment?: string;
				gradient?: string;
				width?: string;
				shadow?: string;
			}
		}

		type EnhancedTextComponent = { id: string } & Editor.TextElementProps;

		interface LayoutElementProps {
			type: 'email' | 'landing';
			grid?: unknown;
		}
	}
}

export { };
