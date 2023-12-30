<script lang="ts">
	import {
		_id,
		setElementProps,
		setSelectedId,
		deleteElementProps
	} from '$lib/stores/selected-element.store.ts';
	import { toggleSlider } from '$lib/stores/slider-store.ts';
	import { onMount, onDestroy } from 'svelte';
	import './Wrapper.scss';
	import { t } from '$lib/stores/language-store.ts';

	export let id: string;
	export let children: { _element: any; defaults: Record<string, unknown> };
	let selected: boolean = false;
	let edit = $t('warpper.toolbar.edit');
	let del = $t('warpper.toolbar.delete');
	const { _element, defaults } = children;

	setElementProps({ ...defaults }!);

	const sub = _id.subscribe((_id) => {
		selected = _id === id;
	});

	onMount(() => {
		const target = document.getElementById(id);
		new _element!({ target, props: { props: { ...defaults }, id: id } });
	});

	onDestroy(() => sub());

	const deleteItem = (): void => {
		deleteElementProps(id);
		const element = document.getElementById(id);
		element?.remove();
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	{id}
	role="group"
	aria-roledescription="wrapper"
	on:click={() => setSelectedId(id)}
	class:selected={selected}
	draggable="true"
>
	{#if selected}
		<div aria-roledescription="toolbar" role="toolbar" class="toolbar">
			<div class="is-flex is-flex-direction-row is-justify-content-flex-end">
				<button class="button is-smallest" on:click={() => toggleSlider(true)} title={edit}>
					<span class="icon is-small">
						<i class="gg-pen" />
					</span>
				</button>
				<button class="button is-smallest" on:click={deleteItem} title={del}>
					<span class="icon is-small">
						<i class="gg-trash" />
					</span>
				</button>
			</div>
		</div>
	{/if}
</div>
