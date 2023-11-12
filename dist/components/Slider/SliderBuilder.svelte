<script>import { getSliderComponent } from "../../utils.ts";
import { onMount } from "svelte";
export let name = "Component";
export let props;
export let type;
let component;
onMount(() => {
  component = getSliderComponent(type);
  if (component && component[0]) {
    name = component[0];
  }
});
</script>

{#if component && component[1]}
	<svelte:component this={component[1]} props={props} />
{/if}
