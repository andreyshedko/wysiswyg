<script lang="ts">
	import { setElementProps } from '$lib/stores/selected-element.store.ts';
	import { toggleSlider } from '$lib/stores/slider-store.ts';
	import { generateStyles } from '$lib/utils.ts';
	import { onMount } from 'svelte';
	import { props$ as store } from '$lib/stores/selected-element.store.ts';
	import { setSelectedId } from '$lib/stores/selected-id.store.ts';
	import { filter, tap } from 'rxjs';

	export let props: Editor.EnhancedTextComponent;
	let styles: string;

	console.log(props)

	store.pipe(
		tap(v => {
			console.log(v)
			console.log(props)
		}),
		filter(v => v.id === props.id),
	).subscribe((_props) => {
		props = _props;
		if (props && props.appearance) {
			styles = generateStyles(props.appearance);
		}
	});

	onMount(() => {
		if (props && props.appearance) {
			styles = generateStyles(props.appearance);
		}
	});

	// onDestroy(() => unsubscribeProps());

	function selectElement(e: MouseEvent) {
		if (e.target) {
			setSelectedId(props.id);
			setElementProps(props);
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
		data-id={props.id}
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
		data-id={props.id}
		tabindex="0"
		on:click={(e) => selectElement(e)}
		draggable="true"
		style={styles}
	>
		{@html props?.text ?? 'This is an DIV text element'}
	</div>
{/if}
