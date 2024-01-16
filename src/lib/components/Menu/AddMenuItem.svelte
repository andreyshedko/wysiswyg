<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { setSelectedElement } from '$lib/stores/slider-store.ts';
	import { insertElement } from '$lib/utils.ts';

	function addElement(element: Editor.ElementType): void {
		setSelectedElement(element);
		insertElement(element);
	}
</script>

<div class="dropdown">
	<i class="gg-math-plus" />
	<div class="dropdown-content position">
		<!-- <div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center"
			on:click={() => addElement('header')}
			on:keydown={() => addElement('header')}
		>
			<i class="gg-view-cols mx-2"></i>
			<span>{@html $t('menu.add.header')}</span>
		</div> -->
		<!-- <div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center"
			on:click={() => addElement('footer')}
			on:keydown={() => addElement('footer')}
		>
			<i class="gg-view-cols mx-2"></i>
			<span>{@html $t('menu.add.footer')}</span>
		</div> -->
		<div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center is-size-5"
			on:click={() => addElement('layout')}
			on:keydown={() => addElement('layout')}
		>
			<i class="gg-view-cols mx-2"></i>
			<span>{@html $t('menu.add.layout')}</span>
		</div>
		<div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center is-size-5"
			on:click={() => addElement('text')}
			on:keydown={() => addElement('text')}
		>
			<i class="gg-format-text mx-2" />
			<span>{@html $t('menu.add.text')}</span>
		</div>
		<div
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center is-size-5"
			role="menuitem"
			aria-roledescription="menuitem"
			tabindex="0"
			on:click={() => addElement('image')}
			on:keydown={() => addElement('image')}
		>
			<i class="gg-image mx-2" />
			<span>{@html $t('menu.add.image')}</span>
		</div>
		<div
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center is-size-5"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => addElement('video')}
			on:keydown={() => addElement('video')}
		>
			<i class="gg-film mx-2" />
			<span>{@html $t('menu.add.video')}</span>
		</div>
		<div
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center is-size-5"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => addElement('audio')}
			on:keydown={() => addElement('audio')}
		>
			<i class="gg-music mx-2" />
			<span>{@html $t('menu.add.audio')}</span>
		</div>
		<div
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center is-size-5"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => addElement('link')}
			on:keydown={() => addElement('link')}
		>
			<i class="gg-link mx-2" />
			<span>{@html $t('menu.add.link')}</span>
		</div>
		<div
			class="menu-item is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center is-size-5"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			on:click={() => addElement('timer')}
			on:keydown={() => addElement('timer')}
		>
			<i class="gg-stopwatch mx-2" />
			<span>{@html $t('menu.add.timer')}</span>
		</div>
	</div>
</div>
