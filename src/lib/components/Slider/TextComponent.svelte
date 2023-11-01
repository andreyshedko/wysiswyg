<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { setColor, setType } from '$lib/stores/text-component.store.ts';
	import { textTypes } from '$lib/utils.ts';
	import Select from '../Select/Select.svelte';

	export let text: string = 'Text';
	let _type: string;

	$: type = (_type: "header" | "content") => setType(_type);

</script>

<div class="text-container pure-g">
	<div class="pure-u-1-1 mt-1">
		<input type="text" bind:value={text} class="pure-input-1-2" />
	</div>
	<div class="pure-u-1-1 flex-column mt-1">
		{@html $t('slider.text.appearance')}
		<Select items={textTypes} bind:selected={_type} />
	</div>
	<div class="pure-u-1-1 flex-column mt-1">
		{@html $t('slider.text.color')}
		<input type="color" id="colorpicker" value="#0000ff" on:change={(ev) => setColor(ev.target?.value)}>
	</div>
</div>
