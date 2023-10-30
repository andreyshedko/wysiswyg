<script lang="ts">
	import { getComponent } from "$lib/utils.ts";

    export let name: string;
    export let type: Editor.ElementType;
    const component = getComponent(type);
    name = component[0];
</script>

<svelte:component this={component[1]} />