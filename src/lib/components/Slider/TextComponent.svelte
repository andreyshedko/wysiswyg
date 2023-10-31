<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { textTypes } from '$lib/utils.ts';
    import Select from '../Select/Select.svelte';

	export let text: string = 'Text';
    let selected = '';
</script>

<div class="text-container">
	<input type="text" bind:value={text} />
	{@html $t('slider.text.appearance')}
	<Select items={textTypes} bind:selected />
</div>
