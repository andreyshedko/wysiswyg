<script>import FileMenuItem from "./FileMenuItem.svelte";
import AddMenuItem from "./AddMenuItem.svelte";
import "./Menu.scss";
export let callback = () => {
};
</script>

<section class="menu">
	<FileMenuItem
		saveCallback={callback}
		historyCallback={callback}
		publishCallback={callback}
		helpCallback={callback}
	/>
	<i class="fa-solid fa-mobile-screen-button"></i>
	<i class="fa-solid fa-backward-step"></i>
	<i class="fa-solid fa-forward-step"></i>
	<AddMenuItem />
</section>
