<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import {
		textTypes,
		changeColor,
		changeSize,
		changeWheight,
		changeLineHeight,
		changeLetterSpacing,
		changeTextIndent,
		changeMargin,
		alignTypes,
		transformCSSString,
		changeText,
		changeAppearance,
		changeAlign,
		changeGradient
	} from '$lib/utils.ts';
	import Select from '../Select/Select.svelte';
	import ContextMenu from './ContextMenu.svelte';
	import Range from '../Range/Range.svelte';
	import Gradient from '../Gradient/Gradient.svelte';

	export let props: Editor.EnhancedTextComponent;
	let prevText = props.text;

	$: {
		if (props.appearance.type === 'content' && prevText !== props.text) {
			const doc = document.getElementById('textarea');
			doc!.innerHTML = props.text;
		}
	}

	function applyBoldToSelection(): void {
		let selection = window.getSelection()?.toString();
		let range = window.getSelection()?.getRangeAt(0);
		let node = document.createElement('b');
		node.innerText = selection!;
		range?.deleteContents();
		range?.insertNode(node);
		changeText(props.id, props, document.getElementById('textarea')?.innerHTML!);
	}

	function applyItalicToSelection(): void {
		let selection = window.getSelection()?.toString();
		const range = window.getSelection()?.getRangeAt(0);
		let node = document.createElement('i');
		node.innerText = selection!;
		range?.deleteContents();
		range?.insertNode(node);
		changeText(props.id, props, document.getElementById('textarea')?.innerHTML!);
	}

	function applyUnderlineToSelection(): void {
		let selection = window.getSelection()?.toString();
		const range = window.getSelection()?.getRangeAt(0);
		const node = document.createElement('u');
		node.innerText = selection!;
		range?.deleteContents();
		range?.insertNode(node);
		changeText(props.id, props, document.getElementById('textarea')?.innerHTML!);
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
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">{@html $t('slider.text.appearance')}</label>
		<Select
			selectedValue={props.appearance.type || 'header'}
			items={textTypes}
			on:change={(ev) => changeAppearance(props.id, props, ev.detail)}
		/>
	</div>
	<label class="label" for="type">{@html $t('slider.text')}</label>
	<div class="mt-1">
		{#if props.appearance.type === 'header'}
			<div class="control">
				<input
					type="text"
					bind:value={props.text}
					class="input"
					on:input={(ev) => changeText(props.id, props, ev.target.value)}
				/>
			</div>
		{:else}
			<span class="is-size-7">{@html $t('slider.text.context')}</span>
			<div class="control">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					contenteditable="true"
					role="contentinfo"
					aria-roledescription="text"
					id="textarea"
					class="textarea"
					on:input={(ev) => changeText(props.id, props, ev.target.innerHTML)}
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
				on:change={(ev) => changeColor(props.id, props, ev.target.value)}
			/>
		</div>
	</div>
	<div class="flex-column mt-1">
		<div class="columns">
			<div class="column">
				<label class="label" for="size">{@html $t('slider.text.size')}</label>
			</div>
			<div class="column is-flex is-justify-content-flex-end">
				{props.appearance.size ?? ''}
			</div>
		</div>
		<div class="control">
			<Range
				initialValue={1}
				min={1}
				value={transformCSSString('px', props.appearance.size) || 1}
				on:change={(e) => changeSize(props.id, props, e.detail.value)}
				id="size"
			/>
		</div>
	</div>
	<div class="flex-column mt-1">
		<div class="columns">
			<div class="column">
				<label class="label" for="wheight">{@html $t('slider.text.wheight')}</label>
			</div>
			<div class="column is-flex is-justify-content-flex-end">
				{props.appearance.wheight ?? ''}
			</div>
		</div>
		<div class="control">
			<Range
				initialValue={100}
				min={100}
				max={900}
				value={+props.appearance.wheight || 100}
				on:change={(e) => changeWheight(props.id, props, e.detail.value)}
				id="wheight"
			/>
		</div>
	</div>
	<div class="flex-column mt-1">
		<div class="columns">
			<div class="column">
				<label class="label" for="line-height">{@html $t('slider.text.lineHeight')}</label>
			</div>
			<div class="column is-flex is-justify-content-flex-end">
				{props.appearance.lineHeight ?? ''}
			</div>
		</div>
		<div class="control">
			<Range
				initialValue={1}
				min={1}
				max={100}
				value={transformCSSString('px', props.appearance.lineHeight) || 1}
				on:change={(e) => changeLineHeight(props.id, props, e.detail.value)}
				id="line-height"
			/>
		</div>
	</div>
	<div class="flex-column mt-1">
		<div class="columns">
			<div class="column">
				<label class="label" for="letter-spacing">{@html $t('slider.text.letterSpacing')}</label>
			</div>
			<div class="column is-flex is-justify-content-flex-end">
				{props.appearance.letterSpacing ?? ''}
			</div>
		</div>
		<div class="control">
			<Range
				initialValue={1}
				min={1}
				max={100}
				value={transformCSSString('px', props.appearance.letterSpacing) || 1}
				on:change={(e) => changeLetterSpacing(props.id, props, e.detail.value)}
				id="letter-spacing"
			/>
		</div>
	</div>
	<div class="flex-column mt-1">
		<div class="columns">
			<div class="column">
				<label class="label" for="text-indent">{@html $t('slider.text.textIndent')}</label>
			</div>
			<div class="column is-flex is-justify-content-flex-end">
				{props.appearance.textIndent ?? ''}
			</div>
		</div>
		<div class="control">
			<Range
				initialValue={1}
				min={1}
				max={100}
				value={transformCSSString('px', props.appearance.textIndent) || 1}
				on:change={(e) => changeTextIndent(props.id, props, e.detail.value)}
				id="text-indent"
			/>
		</div>
	</div>
	<div class="flex-column mt-1">
		<div class="columns">
			<div class="column">
				<label class="label" for="margin">{@html $t('slider.text.margin')}</label>
			</div>
			<div class="column is-flex is-justify-content-flex-end">
				{props.appearance.margin ?? ''}
			</div>
		</div>
		<div class="control">
			<Range
				initialValue={1}
				min={1}
				max={100}
				value={transformCSSString('px', props.appearance.margin) || 1}
				on:change={(e) => changeMargin(props.id, props, e.detail.value)}
				id="margin"
			/>
		</div>
	</div>
	<div class="flex-column mt-1">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">{@html $t('slider.text.textAlign')}</label>
		<Select
			selectedValue={props.appearance.alignment || ''}
			items={alignTypes}
			on:change={(ev) => changeAlign(props.id, props, ev.detail)}
		/>
	</div>
	<div class="flex-column mt-1">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">{@html $t('slider.text.textGradient')}</label>
		<Gradient
			on:gradientChange={(value) => changeGradient(props.id, props, value.detail)}
			on:reset={() => changeGradient(props.id, props, '')}
		/>
	</div>
</div>
