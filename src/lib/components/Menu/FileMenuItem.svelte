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
	<i class="gg-file-add"></i>
	<div class="dropdown-content position-right">
		<div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center"
			on:click={newDocument}
			on:keydown={newDocument}
		>
			<i class="gg-redo mx-1"></i>
			<span>{@html $t('menu.file.newDocument')}</span>
		</div>
		<div
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center"
			role="menuitem"
			aria-roledescription="menuitem"
			tabindex="0"
			on:click={() => publish(publishCallback)}
			on:keydown={() => publish(publishCallback)}
		>
			<i class="gg-software-upload mx-1"></i>
			<span>{@html $t('menu.file.publish')}</span>
		</div>
		<div
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={saveCallback}
			on:keydown={saveCallback}
		>
			<i class="gg-database mx-1"></i>
			<span>{@html $t('menu.file.save')}</span>
		</div>
		<div
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={historyCallback}
			on:keydown={historyCallback}
		>
			<i class="gg-time mx-1"></i>
			<span>{@html $t('menu.file.history')}</span>
		</div>
		<div
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={print}
			on:keydown={print}
		>
			<i class="gg-printer mx-1"></i>
			<span>{@html $t('menu.file.print')}</span>
		</div>
		<div
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => help(helpCallback)}
			on:keydown={() => help(helpCallback)}
		>
			<i class="gg-info mx-1"></i>
			<span>{@html $t('menu.file.help')}</span>
		</div>
	</div>
</div>
