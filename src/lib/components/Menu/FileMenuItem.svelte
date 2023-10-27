<script lang="ts">
	import { setContent } from '$lib/stores/content-store.ts';
	import { t } from '$lib/stores/language-store.ts';
	import Fa from 'svelte-fa';
  	import { faArrowsRotate, faBars } from '@fortawesome/free-solid-svg-icons'

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
		<Fa icon={faArrowsRotate} /> {@html $t('menu.file.newDocument')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			aria-roledescription="menuitem"
			tabindex="0"
			on:click={() => publish(publishCallback)}
			on:keydown={() => publish(publishCallback)}
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
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => help(helpCallback)}
			on:keydown={() => help(helpCallback)}
		>
			{@html $t('menu.file.help')}
		</div>
	</div>
</div>
