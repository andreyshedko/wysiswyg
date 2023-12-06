<script lang="ts">
	import Menu from '../Menu/Menu.svelte';
	import Slider from '../Slider/Slider.svelte';
	import '../../app.scss';
	import './Editor.scss';
	import { setLocale } from '$lib/stores/language-store.ts';

	export let locale = 'en';
	setLocale(locale);

	export function dragstart (ev: { dataTransfer: { setData: (arg0: string, arg1: any) => void; }; }, item: any) {
		ev.dataTransfer.setData("item", item);
	}

	export function dragover (ev: DragEvent & { currentTarget: EventTarget & HTMLDivElement; }) {
		ev.preventDefault();
		ev.dataTransfer!.dropEffect = 'move';
	}

	export function drop (ev: DragEvent & { currentTarget: EventTarget & HTMLDivElement; }) {
		ev.preventDefault();
		var i = ev.dataTransfer?.getData("item");
	}

</script>

<Menu />
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	aria-dropeffect="move"
	contenteditable="true" 
	class="editor" 
	on:drop={event => drop(event)}
	on:dragover={event => dragover(event)}
>
	<div id="start" />
</div>
<Slider />
