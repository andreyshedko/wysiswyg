<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { setSelectedElement, toggleSlider } from '$lib/stores/slider-store.ts';
	import { insertElement } from '$lib/utils.ts';

	function addElement(element: Editor.ElementType): void {
		setSelectedElement(element);
		insertElement(element);
		toggleSlider(true);
	}
</script>

<div class="dropdown">
	<i class="fa fa-plus"></i>
	<div class="dropdown-content position">
		<div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item"
			on:click={() => addElement('text')}
			on:keydown={() => addElement('text')}
		>
			<i class="fa fa-font"></i>
			{@html $t('menu.add.text')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			aria-roledescription="menuitem"
			tabindex="0"
			on:click={() => addElement('image')}
			on:keydown={() => addElement('image')}
		>
			<i class="fa fa-image"></i>
			{@html $t('menu.add.image')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => addElement('video')}
			on:keydown={() => addElement('video')}
		>
			<i class="fa fa-video"></i>
			{@html $t('menu.add.video')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => addElement('audio')}
			on:keydown={() => addElement('audio')}
		>
			<i class="fa fa-file-audio"></i>
			{@html $t('menu.add.audio')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => addElement('link')}
			on:keydown={() => addElement('link')}
		>
			<i class="fa fa-link"></i>
			{@html $t('menu.add.link')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => addElement('timer')}
			on:keydown={() => addElement('timer')}
		>
			<i class="fa fa-stopwatch"></i>
			{@html $t('menu.add.timer')}
		</div>
	</div>
</div>
