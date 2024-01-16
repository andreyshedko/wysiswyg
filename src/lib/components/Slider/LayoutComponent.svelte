<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { changeLayout, layoutTypes } from '$lib/utils.ts';
	import Select from '../Select/Select.svelte';

	export let props: Editor.LayoutElementProps;

	function setColumns(event: InputEvent & {value: string}) {
		console.log(event.target?.value)
	}

	function setRows(event: InputEvent & {value: string}) {
		console.log(event.target?.value)
	}
</script>

<div class="flex-column px-4">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="label">{@html $t('slider.layout')}</label>
	<!-- svelte-ignore missing-declaration -->
	<Select
		id={'layout'}
		selectedValue={props?.type}
		items={layoutTypes}
		on:change={(ev) => changeLayout(props, ev.detail)}
	/>
</div>
{#if props.type === 'landing'}
	<div class="flex-column px-2">
		<div class="column">
			<label class="label is-size-4" for="size">{@html $t('slider.layout.landing.type')}</label>
		</div>
		<div class="column is-flex is-flex-direction-column is-justify-content-flex-end">
			<label class="label is-size-5" for="columns">
				{@html $t('slider.layout.landing.columns')}
			</label>
			<input class="input" type="text" id="columns" placeholder="Number of columns" on:input={setColumns} />
			<label class="label is-size-5" for="rows">
				{@html $t('slider.layout.landing.rows')}
			</label>
			<input class="input" type="text" id="rows" placeholder="Number of rows" on:input={setRows} />
		</div>
	</div>
{/if}
