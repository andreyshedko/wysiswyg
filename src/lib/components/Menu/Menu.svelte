<script lang="ts">
	import FileMenuItem from './FileMenuItem.svelte';
	import AddMenuItem from './AddMenuItem.svelte';
	import './Menu.scss';
	import Fa from 'svelte-fa';
	import { faBackwardStep, faForwardStep, faMobileScreenButton, faPlus } from '@fortawesome/free-solid-svg-icons';
	export let callback = () => {};
</script>

<section class="menu">
	<FileMenuItem
		saveCallback={callback}
		historyCallback={callback}
		publishCallback={callback}
		helpCallback={callback}
	/>
	<Fa icon={faMobileScreenButton} />
	<Fa icon={faBackwardStep} />
	<Fa icon={faForwardStep} />
	<AddMenuItem />
</section>
