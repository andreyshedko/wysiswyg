<script lang="ts">
	export let items: [{ key: string; value: string }] = [{key: '', value: ''}];
	export let selected = '';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    const setSelect = (value: string): void => {
		dispatch("typeChanged");
        selected = value;
    }
</script>

<div class="select">
	<select bind:value={selected} on:change={(event) => setSelect(event.currentTarget.value)}>
		{#each items as item}
			<option value={item.key}>
				{item.value}
			</option>
		{/each}
	</select>
</div>