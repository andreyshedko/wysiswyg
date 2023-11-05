<script lang="ts">
	import { setElementProps } from '$lib/stores/selected-element.store.ts';
	import { toggleSlider } from '$lib/stores/slider-store.ts';
	import { generateStyles } from '$lib/utils.ts';
	import { onDestroy, onMount } from 'svelte';
	import { props as store } from '$lib/stores/selected-element.store.ts';

	export let props: Editor.TextElementProps;
    let styles: string;
	
	const unsubscribeProps = store.subscribe((_props) => {
		props = _props;
		styles = generateStyles(props.appearance);
	});

    onMount(() => {
		if (props && props.appearance) {
			styles = generateStyles(props.appearance)
		}
	});

	onDestroy(() => unsubscribeProps());

	function selectElement(e: MouseEvent) {
		if (e.target) {
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
        tabindex="0" 
        on:click={(e) => selectElement(e)}
        draggable="true"
		style={styles}
    >
		{props?.text ?? "This is an DIV text element"}
	</div>
{/if}
