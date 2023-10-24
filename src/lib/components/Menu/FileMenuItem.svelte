<script lang="ts">
	import { setContent } from '$lib/stores/content-store.ts';
	import { t } from '$lib/stores/language-store.ts';
	import Fa from 'svelte-fa';
  	import { faBars } from '@fortawesome/free-solid-svg-icons'

	export let callback: () => void;

	function newDocument(event?: MouseEvent | KeyboardEvent): void {
		setContent(document.createElement('p'));
	}

	function saveAs(callback: () => void): void {
		callback();
	}

	function print(): void {
		window.print();
	}
</script>

<div class="dropdown">
	<Fa icon={faBars} />
	<div class="dropdown-content">
		<div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item"
			on:click={newDocument}
			on:keydown={newDocument}
		>
			{@html $t('menu.file.newDocument')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			aria-roledescription="menuitem"
			tabindex="0"
			on:click={() => saveAs(callback)}
			on:keydown={() => saveAs(callback)}
		>
			{@html $t('menu.file.saveAs')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={print}
			on:keydown={print}
		>
			{@html $t('menu.file.print')}
		</div>
	</div>
</div>
