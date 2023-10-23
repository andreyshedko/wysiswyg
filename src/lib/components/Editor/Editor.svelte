<script lang="ts">
	import Footer from '../Footer.svelte';
	import Icons from '../Icons.svelte';
	import Menu from '../Menu/Menu.svelte';
	import '../../app.scss';
	import './Editor.scss';
	import { setLocale } from '$lib/stores/language-store.ts';
	import { onDestroy, onMount } from 'svelte';
	import { content } from '$lib/stores/content-store.ts';
	import { initEditor } from '$lib/utils.ts';

	export let locale: string;
	setLocale(locale);

	let domValue: HTMLElement;
	let _document: Document;

	onMount(() => {
		_document = document;
		content.set(_document.createElement('p'));
		domValue = _document.createElement('p');
	});

	const unsubscribe = content.subscribe((value) => {
		domValue = value ? value : domValue;
		initEditor(domValue, _document);
	});

	onDestroy(() => unsubscribe());
</script>

<Menu />
<Icons />
<div contenteditable="true" class="editor">
	<h3>Preview</h3>
	<div id="start" />
</div>
<div>
	<h3>HTML</h3>
	{@html { domValue }}
</div>
<Footer />
