<script lang="ts">
	import { setContent } from '$lib/stores/content-store.ts';
	import { t } from '$lib/stores/language-store.ts';

	export let historyCallback: () => void;
	export let saveCallback: () => void;
	export let publishCallback: () => void;
	export let helpCallback: () => void;

	function newDocument(event?: MouseEvent | KeyboardEvent): void {
		setContent(document.createElement('p'));
	}

	function publish(callback: () => void): void {
		callback();
	}

	function print(): void {
		window.print();
	}

	function help(callback: () => void) {
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
