<script lang="ts">
	import { t } from '$lib/stores/language-store.ts';
	import { createEventDispatcher } from 'svelte';

	import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.svelte';

	let direction = 'to right';
	let colors: Set<string> = new Set();

	const setGradientValue = (direction: string, colors: string[]): string => {
		return `linear-gradient(${direction}, ${colors.join(', ')})`;
	};

	const dispatch = createEventDispatcher();

	const setColor = (value: string): void => {
		colors.add(value);
		dispatch('gradientChange', setGradientValue(direction, Array.from(colors)));
	};

	const setDirection = (value: boolean): void => {
		const direction = value ? 'to right' : 'to left';
		dispatch('gradientChange', setGradientValue(direction, Array.from(colors)));
	};

	const resetGradient = (): void => {
		dispatch('reset');
	};
</script>

<div class="field">
	<button class="button" on:click={resetGradient} aria-label="Reset" title="Reset">
		<span class="icon is-small">
			<i class="gg-undo" />
		</span>
        <span>{@html $t('slider.text.textGradient.reset')}</span>
	</button>
	<p class="help">{@html $t('slider.text.textGradient.color')}</p>
	<div class="control">
		<input
			id="color"
			class="input"
			type="color"
			placeholder="Text input"
			on:input={(ev) => setColor(ev.target.value)}
		/>
	</div>
</div>
<div class="field">
	<p class="help">{@html $t('slider.text.textGradient.gradientDirection')}</p>
	<div class="control">
		<ToggleSwitch
			textTrue={'Right to left'}
			textFalse={'Left to right'}
			on:toggle={(value) => setDirection(value.detail)}
		/>
	</div>
</div>
