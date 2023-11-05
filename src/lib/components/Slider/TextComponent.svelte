<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { setElementProps } from '$lib/stores/selected-element.store.ts';
	import { textTypes } from '$lib/utils.ts';
	import Select from '../Select/Select.svelte';

	export let props: Editor.TextElementProps;
	let type: string;

	function changeText(value: string): void {
		props.text = value;
		setElementProps({...props});
	}

	function changeColor(value: string): void {
		props.appearance.color = value;
		setElementProps({...props});
	}

	function changeAppearance(): void {
		props.appearance.type = type;
		setElementProps({...props});
	}

</script>

<div class="text-container">
	<div class="flex-column mt-1">
		<label class="label" for="type">{@html $t('slider.text.appearance')}</label>
		<div class="control">
			<Select
				id="type"
				bind:selected={type}
				items={textTypes} 
				on:typeChanged={changeAppearance}
			/>
		</div>
	</div>
	<div class="mt-1">
		{#if props.appearance.type === 'header'}
			<div class="control">
				<input 
					type="text" 
					bind:value={props.text} 
					class="input"
					on:input={(ev) => changeText(ev.target.value)}
				/>
			</div>
		{:else}
			<div class="control">
				<textarea
					class="input"
					on:input={(ev) => changeText(ev.target.value)}
				>
					{props.text}
				</textarea>
			</div>
		{/if}
	</div>
	<div class="flex-column mt-1">
		<label class="label" for="colorpicker">{@html $t('slider.text.color')}</label>
		<div class="control">
			<input 
				type="color" 
				id="colorpicker"
				class="input"
				bind:value={props.appearance.color} 
				on:input={(ev) => changeColor(ev.target.value)}
			/>
		</div>
	</div>
</div>
