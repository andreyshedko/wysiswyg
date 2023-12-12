<script lang="ts">
	import { _id, setElementProps, setSelectedId, deleteElementProps } from '$lib/stores/selected-element.store.ts';
	import { toggleSlider } from '$lib/stores/slider-store.ts';
	import { onMount, type ComponentType, onDestroy } from 'svelte';
	import './Wrapper.scss';

	export let id: string;
	export let children: { _element: any; defaults: Record<string, unknown> };
	let comp: ComponentType;
	let selected: boolean;
	const { _element, defaults } = children;

	setElementProps({ ...defaults }!);

	const sub = _id.subscribe((_id) => {
		selected = _id === id
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
<div 
	{id}
	role="group"
	aria-roledescription="wrapper"
	class:selected={selected} 
	on:click={() => setSelectedId(id)}
	class="is-flex-grow-1"
	draggable="true"
>
	{#if selected}
		<div aria-roledescription="toolbar" role="toolbar" class="toolbar">
			<div class="is-flex is-flex-direction-row is-justify-content-flex-end">
				<button class="button is-smallest" on:click={() => toggleSlider(true)}>
					<span class="icon is-small">
						<i class="fa fa-file-pen" />
					</span>
				</button>
				<button class="button is-smallest" on:click={deleteItem}>
					<span class="icon is-small">
						<i class="fa fa-trash" />
					</span>
				</button>
			</div>
		</div>
	{/if}
</div>
