<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { setElementProps } from '$lib/stores/selected-element.store.ts';
	import { textTypes } from '$lib/utils.ts';
	import Select from '../Select/Select.svelte';
	import ContextMenu from './ContextMenu.svelte';
	import Range from './Range.svelte';

	export let props: Editor.TextElementProps;
	let type: string;
	let prevText = props.text;

	$: {
		if (props.appearance.type === 'content' && prevText !== props.text) {
			document.getElementById('textarea')!.innerHTML = props.text;
		}
	}

	function changeText(value: string): void {
		props.text = value;
		setElementProps({ ...props });
	}

	function changeColor(value: string): void {
		props.appearance.color = value;
		setElementProps({ ...props });
	}

	function changeAppearance(): void {
		props.appearance.type = type;
		setElementProps({ ...props });
	}

	function changeSize(value: string): void {
		props.appearance.size = `${value}px`;
		setElementProps({ ...props });
	}

	function changeWheight(value: string): void {
		props.appearance.wheight = value;
		setElementProps({ ...props });
	}

	function applyBoldToSelection(): void {
		let selection = window.getSelection()?.toString();
		let range = window.getSelection()?.getRangeAt(0);
		let node = document.createElement('b');
		node.innerText = selection!;
		range?.deleteContents();
		range?.insertNode(node);
		changeText(document.getElementById('textarea')?.innerHTML!);
	}

	function applyItalicToSelection(): void {
		let selection = window.getSelection()?.toString();
		const range = window.getSelection()?.getRangeAt(0);
		let node = document.createElement('i');
		node.innerText = selection!;
		range?.deleteContents();
		range?.insertNode(node);
		changeText(document.getElementById('textarea')?.innerHTML!);
	}

	function applyUnderlineToSelection(): void {
		let selection = window.getSelection()?.toString();
		const range = window.getSelection()?.getRangeAt(0);
		const node = document.createElement('u');
		node.innerText = selection!;
		range?.deleteContents();
		range?.insertNode(node);
		changeText(document.getElementById('textarea')?.innerHTML!);
	}

	function showContextMenu(event: MouseEvent): void {
		event.preventDefault();
		const target = document.body;
		const contextMenu = new ContextMenu({ target, props: { event } });
		contextMenu.$on('bold', () => applyBoldToSelection());
		contextMenu.$on('italic', () => applyItalicToSelection());
		contextMenu.$on('underline', () => applyUnderlineToSelection());
	}
</script>

<div class="text-container">
	<div class="flex-column mt-1">
		<label class="label" for="type">{@html $t('slider.text.appearance')}</label>
		<div class="control">
			<Select
				id="type"
				selectedType={props.appearance.type}
				bind:selected={type}
				items={textTypes}
				on:typeChanged={changeAppearance}
			/>
		</div>
	</div>
	<label class="label" for="type">{@html $t('slider.text')}</label>
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
			<span class="is-size-7">{@html $t('slider.text.context')}</span>
			<div class="control">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					contenteditable="true"
					role="text"
					aria-roledescription="text"
					id="textarea"
					class="textarea"
					on:contextmenu={(ev) => showContextMenu(ev)}
				>
					{@html props.text}
				</div>
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
				on:change={(ev) => changeColor(ev.target.value)}
			/>
		</div>
	</div>
	<div class="flex-column mt-1">
		<label class="label" for="size">{@html $t('slider.text.size')}</label>
		<div class="control">
			<Range min={1} on:change={(e) => changeSize(e.detail.value)} id="size" />
		</div>
	</div>
	<div class="flex-column mt-1">
		<label class="label" for="wheight">{@html $t('slider.text.wheight')}</label>
		<div class="control">
			<Range
				initialValue={100}
				min={100}
				max={900}
				on:change={(e) => changeWheight(e.detail.value)}
				id="wheight"
			/>
		</div>
	</div>
</div>
