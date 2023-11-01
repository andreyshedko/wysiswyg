<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { setColor, setType } from '$lib/stores/text-component.store.ts';
	import { textTypes } from '$lib/utils.ts';
	import Select from '../Select/Select.svelte';
	import ColorPicker from '../ColorPicker.svelte';
	import Editor from '../Editor/Editor.svelte';

	export let text: string = 'Text';
	let _type: string;
	let _color: Editor.Color;

	$: type = (_type: "header" | "content") => setType(_type);
	$: color = (_color: Editor.Color) => setColor(_color);
</script>

<div class="text-container pure-g">
	<div class="pure-u-1-1">
		<input type="text" bind:value={text} />
	</div>
	<div class="pure-u-1-1">
		{@html $t('slider.text.appearance')}
		<Select items={textTypes} bind:selected={_type} />
	</div>
	<div class="pure-u-1-1">
		{@html $t('slider.text.color')}
		<ColorPicker bind:selectedColor={_color} />
	</div>
</div>
