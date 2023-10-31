<script lang="ts">
	export let items: [{ key: string; value: string }] = [];
	export let selected = '';

    function setSelected(value: string): void {
        selected = value;
    }
</script>

<select bind:value={selected} class="pure-input-1-2" on:change={(event) => setSelected(event.currentTarget.value)}>
	{#each items as item}
		<option value={item.key}>
			{item.value}
		</option>
	{/each}
</select>
