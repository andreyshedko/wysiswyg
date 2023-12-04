<script lang="ts">
	import { _id, _props, setSelectedId } from '$lib/stores/selected-element.store.ts';
	import { toggleSlider } from '$lib/stores/slider-store.ts';
	import { generateStyles } from '$lib/utils.ts';
	import { derived } from 'svelte/store';

	export let id: string;
	let styles: string;
	let props: Editor.TextElementProps;

	derived([_props], ([$props]) => $props?.get(id)).subscribe((value) => {
		if (value) {
			props = value;
			styles = generateStyles(props.appearance);
		}
	});

	function selectElement(e: MouseEvent) {
		if (e.target) {
			setSelectedId(id);
			toggleSlider(true);
		}
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if props?.appearance?.type === 'header'}
	<h1
		aria-roledescription="header"
		data-type="text"
		data-id={id}
		tabindex="0"
		on:click={(e) => selectElement(e)}
		draggable="true"
		style={styles}
	>
		{props?.text ?? 'This is an H1 text element'}
	</h1>
{:else}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		aria-roledescription="content"
		data-type="text"
		data-id={id}
		tabindex="0"
		on:click={(e) => selectElement(e)}
		draggable="true"
		style={styles}
	>
		{@html props?.text ?? 'This is an DIV text element'}
	</div>
{/if}
