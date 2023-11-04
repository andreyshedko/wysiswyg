<script lang="ts">
	import { getSliderComponent } from '$lib/utils.ts';
	import { onMount, type ComponentType } from 'svelte';

	export let name: string = 'Component';
	export let props: Record<string, unknown>;
	export let type: Editor.ElementType;
	let component: [string, ComponentType];

	onMount(() => {
		component = getSliderComponent(type)!;
		if (component && component[0]) {
			name = component[0];
		}
	});
</script>

{#if component && component[1]}
	<svelte:component this={component[1]} props={props} />
{/if}
