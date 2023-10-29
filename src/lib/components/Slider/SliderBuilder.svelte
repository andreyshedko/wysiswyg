<script lang="ts">
	import { getComponent } from "$lib/utils.ts";

    export let type: Editor.ElementType;
    const component = getComponent(type)
</script>

<svelte:component this={component} />