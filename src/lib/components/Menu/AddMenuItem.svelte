<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { toggleElement, toggleSlider } from '$lib/stores/slider-store.ts';
	import { faFileAudio, faImage, faLink, faVideo, faFont, faPlus, faStopwatch } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	function addElement(element: Editor.ElementType): void {
		toggleElement(element);
		toggleSlider(true);
	}
</script>

<div class="dropdown">
	<Fa icon={faPlus} />
	<div class="dropdown-content position">
		<div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item"
			on:click={() => addElement('text')}
			on:keydown={() => addElement('text')}
		>
			<Fa icon={faFont} />
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
			<Fa icon={faImage} />
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
			<Fa icon={faVideo} />
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
			<Fa icon={faFileAudio} />
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
			<Fa icon={faLink} />
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
			<Fa icon={faStopwatch} />
			{@html $t('menu.add.timer')}
		</div>
	</div>
</div>
