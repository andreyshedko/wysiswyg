<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
	import { slider, toggleSlider } from '$lib/stores/slider-store.ts';
    import { props } from '$lib/stores/selected-element.store.ts';

    import "./slider.scss";

    import SliderBuilder from './SliderBuilder.svelte';

	let state: Editor.SliderState;
    let name: string;
    let _props: Record<string, unknown>;

    const unsubscribeProps = props.subscribe((props) => _props = props);
	const unsubscribeSlider = slider.subscribe((value) => state = value);

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
            <div class="slider-close-icon"
                on:click={() => toggleSlider(false)}
                on:keydown={(event) => closeSidebar(event)}
                role="button"
                aria-roledescription="button"
                tabindex="0"
            >
            <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <div class="slider-body">
            <SliderBuilder type={state.type} props={_props} bind:name />
        </div>
    </div>
{/if}