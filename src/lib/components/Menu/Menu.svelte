<script lang="ts">
	import FileMenuItem from './FileMenuItem.svelte';
	import AddMenuItem from './AddMenuItem.svelte';
	import './Menu.scss';
	
	export let callback = () => {};
</script>

<section class="menu">
	<FileMenuItem
		saveCallback={callback}
		historyCallback={callback}
		publishCallback={callback}
		helpCallback={callback}
	/>
	<i class="gg-smartphone"></i>
	<i class="gg-chevron-left"></i>
	<i class="gg-chevron-right"></i>
	<AddMenuItem />
</section>
