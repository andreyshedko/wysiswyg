<script>import { setContent } from "../../stores/content-store.ts";
import { t } from "../../stores/language-store.ts";
export let historyCallback;
export let saveCallback;
export let publishCallback;
export let helpCallback;
function newDocument(event) {
  setContent(document.createElement("p"));
}
function publish(callback) {
  callback();
}
function print() {
  window.print();
}
function help(callback) {
  callback();
}
</script>

<div class="dropdown">
	<!-- <Fa icon={faBars} /> -->
	<i class="fa-solid fa-bars"></i>
	<div class="dropdown-content position-right">
		<div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item"
			on:click={newDocument}
			on:keydown={newDocument}
		>
			<i class="fa-solid fa-arrows-rotate"></i>
			{@html $t('menu.file.newDocument')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			aria-roledescription="menuitem"
			tabindex="0"
			on:click={() => publish(publishCallback)}
			on:keydown={() => publish(publishCallback)}
		>
			<i class="fa-solid fa-upload"></i>
			{@html $t('menu.file.publish')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={saveCallback}
			on:keydown={saveCallback}
		>
			<i class="fa-regular fa-floppy-disk"></i>
			{@html $t('menu.file.save')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={historyCallback}
			on:keydown={historyCallback}
		>
			<i class="fa-solid fa-timeline"></i>
			{@html $t('menu.file.history')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={print}
			on:keydown={print}
		>
			<i class="fa-solid fa-print"></i>
			{@html $t('menu.file.print')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => help(helpCallback)}
			on:keydown={() => help(helpCallback)}
		>
			<i class="fa-solid fa-circle-info"></i>
			{@html $t('menu.file.help')}
		</div>
	</div>
</div>
