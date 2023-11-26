<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { slider, toggleSlider } from '$lib/stores/slider-store.ts';

	import './slider.scss';

	import SliderBuilder from './SliderBuilder.svelte';
	import { derivedProps as store } from '$lib/stores/selected-element.store.ts';

	let state: Editor.SliderState;
	let name: string;
	let props: Record<string, unknown>;

	const unsubscribeProps = store.subscribe((value) => (props = value));
	const unsubscribeSlider = slider.subscribe((value) => (state = value));

	let closeButton: HTMLElement;
	onMount(() => closeButton?.focus());
	onDestroy(() => {
		unsubscribeProps();
		unsubscribeSlider();
	});

	function closeSidebar(event: KeyboardEvent) {
		if ((event as KeyboardEvent).code === 'Escape') {
			toggleSlider(false);
		}
	}
</script>

{#if state?.isOpen}
	<div class="slider">
		<div class="slider-header">
			<h5 class="title is-5 slider-title">
				{name}
			</h5>
			<div
				class="slider-close-icon"
				on:click={() => toggleSlider(false)}
				on:keydown={(event) => closeSidebar(event)}
				role="button"
				aria-roledescription="button"
				tabindex="0"
			>
				<i class="fa-solid fa-xmark" />
			</div>
		</div>
		<div class="slider-body">
			{#if props}
				<SliderBuilder type={state.type} {props} bind:name />
			{:else}
				<div class="lds-ellipsis">
					<div />
					<div />
					<div />
					<div />
				</div>
			{/if}
		</div>
	</div>
{/if}
