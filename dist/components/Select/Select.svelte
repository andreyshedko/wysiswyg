<script>export let items = [{ key: "", value: "" }];
export let selectedValue = "";
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
const setSelect = (value) => {
  dispatch("change", value);
};
</script>

<div class="select">
	<select bind:value={selectedValue} on:change={(event) => setSelect(event.currentTarget.value)}>
		{#each items as item}
			<option value={item.key}>
				{item.value}
			</option>
		{/each}
	</select>
</div>
