<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { layoutTypes } from '$lib/utils.ts';
    import Select from '../Select/Select.svelte';

	export let props: Editor.LayoutElementProps;

	function changeLayout(props: Editor.LayoutElementProps, ev: CustomEvent<unknown>): void {
		console.log(props, ev.detail)
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