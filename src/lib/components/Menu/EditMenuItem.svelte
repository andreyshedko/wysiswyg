<script lang="ts">
	import { setContent } from '$lib/stores/content-store.ts';
	import { t } from '$lib/stores/language-store.ts'
</script>

<div class="dropdown">
	{@html $t('menu.edit')}
	<div class="dropdown-content">
		<div
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
			class="menu-item"
		>
			{@html $t('menu.file.newDocument')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			aria-roledescription="menuitem"
			tabindex="0"
		>
		{@html $t('menu.file.saveAs')}
		</div>
		<div
			class="menu-item"
			role="menuitem"
			tabindex="0"
			aria-roledescription="menuitem"
		>
		{@html $t('menu.file.print')}
		</div>
	</div>
</div>