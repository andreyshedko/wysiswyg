<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { _id, _props } from '$lib/stores/selected-element.store.ts';
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

</script>

{#if props?.appearance?.type === 'header'}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<h1
		aria-roledescription="header"
		data-type="text"
		data-id={id}
		tabindex="0"
		style={styles}
	>
		{props?.text ?? $t('utils.defaulttext.h1')}
	</h1>
{:else}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		aria-roledescription="content"
		data-type="text"
		data-id={id}
		tabindex="0"
		style={styles}
	>
		{@html props?.text ?? $t('utils.defaulttext.div')}
	</div>
{/if}
