<script lang="ts">
	import { HsvPicker } from 'svelte-color-picker';

	export let selectedColor: Editor.Color;

	function colorCallback(color: { detail: Editor.Color }) {
		selectedColor = color.detail;
	}
</script>

<HsvPicker on:colorChange={colorCallback} startColor={'#FBFBFB'} />
