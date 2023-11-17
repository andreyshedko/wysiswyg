<script lang="ts">
  import './Toggle.scss';
	export let checked = false;
	export let color = '#2196F3';
	export let textTrue = '';
	export let textFalse = '';
</script>

<label class="switch">
	<input type="checkbox" bind:checked />
	<span class="slider"></span>
</label>
{checked ? textTrue : textFalse}
