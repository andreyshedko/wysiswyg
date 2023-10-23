<script lang="ts">
	import { setContent } from '$lib/stores/content-store.ts';
	import { t } from '$lib/stores/language-store.ts'
	import { onDestroy } from 'svelte';

	function newDocument(event: MouseEvent | KeyboardEvent): void {
		setContent(document.createElement('p'));
	}

	function saveAs(): void {
		throw new Error('Not implemented yet');
	}

	function print(): void {
		window.print();
	}
</script>

<div class="dropdown">
	{@html $t('menu.edit')}
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
			on:click={saveAs}
			on:keydown={saveAs}
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