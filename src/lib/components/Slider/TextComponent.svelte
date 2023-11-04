<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { textTypes } from '$lib/utils.ts';
	import Editor from '../Editor/Editor.svelte';
	import Select from '../Select/Select.svelte';

	export let props: Editor.TextElementProps;
	let _type: string;

	// $: type = (_type: "header" | "content") => setType(_type);

	function setColor(ev) {
		console.log(ev)
	}

</script>

<div class="text-container pure-g">
	<div class="pure-u-1-1 mt-1">
		<input type="text" bind:value={props.text} class="pure-input-1-2" />
	</div>
	<div class="pure-u-1-1 flex-column mt-1">
		{@html $t('slider.text.appearance')}
		<Select items={textTypes} bind:selected={_type} />
	</div>
	<div class="pure-u-1-1 flex-column mt-1">
		{@html $t('slider.text.color')}
		<input type="color" id="colorpicker" bind:value={props.appearance.color} on:change={(ev) => setColor(ev.target.value)}>
	</div>
</div>
