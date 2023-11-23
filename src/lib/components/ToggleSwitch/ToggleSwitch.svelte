<script lang="ts">
	import { createEventDispatcher } from 'svelte';
  import './Toggle.scss';
	export let checked = false;
	export let textTrue = '';
	export let textFalse = '';

	const dispatch = createEventDispatcher();

	const toggleValue = (): void => {
		dispatch('toggle', checked);
	};
</script>

<label class="switch">
	<input type="checkbox" bind:checked on:change={toggleValue}/>
	<span class="slider"></span>
</label>
{checked ? textTrue : textFalse}
