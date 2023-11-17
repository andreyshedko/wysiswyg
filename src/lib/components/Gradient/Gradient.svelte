<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';

    import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.svelte';
</script>
<div class="field">
	<p class="help">{@html $t('slider.text.textGradient.colorBegin')}</p>
	<div class="control">
		<input id="color1" class="input" type="color" placeholder="Text input" />
	</div>
</div>
<div class="field">
	<p class="help">{@html $t('slider.text.textGradient.colorTo')}</p>
	<div class="control">
		<input id="color2" class="input" type="Color" placeholder="Text input" />
	</div>
</div>
<div class="field">
	<p class="help" for="direction">{@html $t('slider.text.textGradient.gradientDirection')}</p>
	<div class="control">
		<ToggleSwitch textTrue={'Right to left'} textFalse={'Left to right'} />
	</div>
</div>
