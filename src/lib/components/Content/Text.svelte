<script lang="ts">
	import { _id, _props, setSelectedId } from '$lib/stores/selected-element.store.ts';
	import { toggleSlider } from '$lib/stores/slider-store.ts';
	import { generateStyles } from '$lib/utils.ts';
	import { derived } from 'svelte/store';
	import './Text.scss';

	export let id: string;
	let styles: string;
	let props: Editor.TextElementProps;
	let selected: boolean;

	_id.subscribe((_id) => selected = _id === id);

	derived([_props], ([$props]) => $props?.get(id)).subscribe((value) => {
		if (value) {
			props = value;
			styles = generateStyles(props.appearance);
		}
	});

	function selectElement(e: MouseEvent) {
		if (e.target) {
			setSelectedId(id);
		}
	}


	function deleteItem() {}
</script>

{#if selected}
	<div aria-roledescription="toolbar" role="toolbar" class="toolbar">
		<div class="is-flex is-flex-direction-row is-justify-content-flex-end">
			<button class="button is-smallest" on:click={() => toggleSlider(true)}>
				<span class="icon is-small">
					<i class="fa fa-file-pen" />
				</span>
			</button>
			<button class="button is-smallest" on:click={deleteItem}>
				<span class="icon is-small">
					<i class="fa fa-trash" />
				</span>
			</button>
		</div>
	</div>
{/if}
{#if props?.appearance?.type === 'header'}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<h1
		aria-roledescription="header"
		data-type="text"
		data-id={id}
		tabindex="0"
		on:click={(e) => selectElement(e)}
		on:keydown={(e) => selectElement(e)}
		draggable="true"
		class:selected={selected}
		style={styles}
	>
		{props?.text ?? 'This is an H1 text element'}
	</h1>
{:else}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		aria-roledescription="content"
		data-type="text"
		data-id={id}
		tabindex="0"
		on:click={(e) => selectElement(e)}
		on:keydown={(e) => selectElement(e)}
		draggable="true"
		style={styles}
		class:selected={selected}
	>
		{@html props?.text ?? 'This is an DIV text element'}
	</div>
{/if}
