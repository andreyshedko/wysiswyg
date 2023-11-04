<script lang="ts">
	import Menu from '../Menu/Menu.svelte';
	import Slider from '../Slider/Slider.svelte';
	import '../../app.scss';
	import './Editor.scss';
	import { setLocale } from '$lib/stores/language-store.ts';
	import { onDestroy, onMount } from 'svelte';
	import { content } from '$lib/stores/content-store.ts';
	import { initEditor } from '$lib/utils.ts';
	import Text from '../Content/Text.svelte';
	import type { Unsubscriber } from 'svelte/store';
	import { browser } from '$app/environment';

	export let locale = 'en';
	setLocale(locale);
	let unsubscribe: Unsubscriber;

	let domValue: HTMLElement;
	let _document: Document;

	// onMount(() => {
	// 	if (browser) {
	// 		const start = document.getElementById('start');
	// 		start?.append(new Text({ target: start }) as unknown as Node);
	// 	}
	// });

	// onDestroy(() => unsubscribe());
</script>

<Menu />
<div contenteditable="true" class="editor">
	<div id="start" />
</div>
<Slider />
