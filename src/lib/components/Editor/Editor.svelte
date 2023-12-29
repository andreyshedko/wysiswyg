<script lang="ts">
	import Menu from '../Menu/Menu.svelte';
	import Slider from '../Slider/Slider.svelte';
	import '../../app.scss';
	import './Editor.scss';
	import { setLocale } from '$lib/stores/language-store.ts';

	export let locale = 'cz';
	setLocale(locale);

	const dragstart = (ev: DragEvent & { target: EventTarget & HTMLDivElement }): void => {
		ev.dataTransfer?.setData('text/plain', ev.target.id);
	};

	const dragover = (ev: DragEvent & { target: EventTarget & HTMLDivElement }): void => {
		ev.preventDefault();
		ev.dataTransfer!.dropEffect = 'move';
	};

	const drop = (ev: DragEvent & { target: EventTarget & HTMLDivElement }): void => {
		ev.preventDefault();
		const data = ev.dataTransfer?.getData('text/plain');
		document.getElementById('editor')?.appendChild(document.getElementById(data!)!);
	};
</script>

<Menu />
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	aria-dropeffect="move"
	contenteditable="true"
	class="editor"
	id="editor"
	on:dragstart={(event) => dragstart(event)}
	on:drop={(event) => drop(event)}
	on:dragover={(event) => dragover(event)}
/>
<Slider />
