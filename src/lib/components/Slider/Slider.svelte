<script lang="ts">
	import { slider, toggleSlider } from '$lib/stores/slider-store.ts';
	import { onDestroy, onMount } from 'svelte';
    import "./slider.scss";
	import Fa from 'svelte-fa';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';

	export { slider } from '$lib/stores/slider-store.ts';
	let state: Editor.SliderState;

	const unsubscribe = slider.subscribe((value) => state = value);

    let closeButton: HTMLElement;
    onMount(() => closeButton?.focus())
	onDestroy(() => unsubscribe());

    function closeSidebar(event: KeyboardEvent) {
        if ((event as KeyboardEvent).code === 'Escape') {
            toggleSlider(false);
        }
    }
</script>

{#if state?.isOpen}
	<div class="slider">
        <div class="slider-header">
            <div class="slider-title">
                Title
            </div>
            <div class="slider-close-icon"
                on:click={() => toggleSlider(false)}
                on:keydown={(event) => closeSidebar(event)}
                role="button"
                aria-roledescription="button"
                tabindex="0"
            >
                <Fa bind:this={closeButton} icon={faXmark} />
            </div>
        </div>
        <div class="slider-body">

        </div>
    </div>
{/if}