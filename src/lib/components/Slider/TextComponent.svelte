<script lang="ts">
    import { t } from '$lib/stores/language-store.ts';
    
    export let text: string = 'Text';
</script>
<div class="text-container">
    <input type="text" bind:value={text} />
    {@html $t('slider.text.appearance')}
</div>