<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { setAppearance } from '$lib/stores/text-component.store.ts';
	import { textTypes } from '$lib/utils.ts';
    import Select from '../Select/Select.svelte';
	import ColorPicker from '../ColorPicker.svelte';

	export let text: string = 'Text';
	let _appearance: string;
	let _color: string;

	$: appearance = _appearance;
	$: color = _color;

	setAppearance(appearance)

</script>

<div class="text-container">
	<input type="text" bind:value={text} />
	{@html $t('slider.text.appearance')}
	<Select items={textTypes} bind:selected={_appearance} />
	{@html $t('slider.text.color')}
	<ColorPicker bind:selectedColor={_color} />
</div>
