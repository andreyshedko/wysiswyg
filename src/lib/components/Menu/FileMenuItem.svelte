<script lang="ts">
	import { setContent } from '$lib/stores/content-store.ts';
	import { t } from '$lib/stores/language-store.ts';
	import Fa from 'svelte-fa';
	import {
		faArrowsRotate,
		faBars,
		faFloppyDisk,
		faInfoCircle,
		faPrint,
		faTimeline,
		faUpload
	} from '@fortawesome/free-solid-svg-icons';

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
	<Fa icon={faBars} />
	<div class="dropdown-content position-right">
		<div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item"
			on:click={newDocument}
			on:keydown={newDocument}
		>
			<Fa icon={faArrowsRotate} />
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
			<Fa icon={faUpload} />
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
			<Fa icon={faFloppyDisk} />
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
			<Fa icon={faTimeline} />
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
			<Fa icon={faPrint} />
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
			<Fa icon={faInfoCircle} />
			{@html $t('menu.file.help')}
		</div>
	</div>
</div>
