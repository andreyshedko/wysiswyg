<script lang="ts">
	import FileMenuItem from './FileMenuItem.svelte';
	import EditMenuItem from './EditMenuItem.svelte';
	import './Menu.scss';
	export let callback = () => {};
</script>

<section class="menu">
	<FileMenuItem callback={callback} />
	<EditMenuItem />
	<div>View</div>
	<div>Tools</div>
	<div>Help</div>
</section>
