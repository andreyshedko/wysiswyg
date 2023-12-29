<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { layoutTypes } from '$lib/utils.ts';
    import Select from '../Select/Select.svelte';

</script>
<div class="flex-column mt-1">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">{@html $t('slider.layout')}</label>
		<!-- svelte-ignore missing-declaration -->
		<Select
			selectedValue={props?.appearance.layout || 'column'}
			items={layoutTypes}
			on:change={(ev) => changeLayout(props, ev.detail)}
		/>
</div>