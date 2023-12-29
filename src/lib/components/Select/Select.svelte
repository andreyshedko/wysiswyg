<script lang="ts">
	export let items: { key: string; value: string }[] = [{ key: '', value: '' }];
	export let selectedValue = '';
	import { createEventDispatcher } from 'svelte';
	import { t } from '$lib/stores/language-store.ts';

	export let id: string;

	const dispatch = createEventDispatcher();

	const setSelect = (value: string): void => {
		dispatch('change', value);
	};
</script>

<div class="select">
	<select 
		id={id} 
		bind:value={selectedValue} 
		on:change={(event) => setSelect(event.currentTarget.value)}
	>
		{#each items as item}
			<option value={item.key}>
				{@html $t(item.value) }
			</option>
		{/each}
	</select>
</div>
