<script lang="ts">
	import {HsvPicker} from 'svelte-color-picker';

	export let selectedColor: string;
	/**
	 * @param {{ detail: any; }} rgba
	 */
	function colorCallback(rgba) {
	console.log(rgba.detail)
}
</script>

<HsvPicker on:colorChange={colorCallback} startColor={"#FBFBFB"}/>