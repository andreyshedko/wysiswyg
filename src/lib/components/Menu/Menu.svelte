<script lang="ts">
	import FileMenuItem from './FileMenuItem.svelte';
	import EditMenuItem from './EditMenuItem.svelte';
	import './Menu.scss';
	import Fa from 'svelte-fa';
	import { faBackwardStep, faForwardStep, faMobileScreenButton, faPlus } from '@fortawesome/free-solid-svg-icons';
	export let callback = () => {};
</script>

<section class="menu">
	<FileMenuItem 
		publishCallback={callback}
		helpCallback={callback}
	/>
	<Fa icon={faMobileScreenButton} />
	<Fa icon={faBackwardStep} />
	<Fa icon={faForwardStep} />
	<Fa icon={faPlus} />
</section>
