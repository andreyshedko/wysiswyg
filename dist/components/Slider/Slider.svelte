<script>import { onDestroy, onMount } from "svelte";
import { slider, toggleSlider } from "../../stores/slider-store.ts";
import { props } from "../../stores/selected-element.store.ts";
import "./slider.scss";
import SliderBuilder from "./SliderBuilder.svelte";
let state;
let name;
let _props;
const unsubscribeProps = props.subscribe((props2) => _props = props2);
const unsubscribeSlider = slider.subscribe((value) => state = value);
let closeButton;
onMount(() => closeButton?.focus());
onDestroy(() => {
  unsubscribeProps();
  unsubscribeSlider();
});
function closeSidebar(event) {
  if (event.code === "Escape") {
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