<script lang="ts">
	import { modal, toggleModal } from '$lib/stores/modal.store.ts';
	import { onDestroy } from 'svelte';

	import Card from '../Modal/Card.svelte';
	import './Modal.scss';

	let state: Editor.ModalState;

	const unsubscribeModal = modal.subscribe((value) => (state = value));

	onDestroy(() => {
		unsubscribeModal();
	});
</script>

<div class="modal" class:is-active={state['isOpen']}>
	<div class="modal-background" />
	<div class="modal-content">
		<Card
			templateUrl={'event_reservation'}
			content={'This is event reservation landing page template'}
			placeholderUrl={'https://bulma.io/images/placeholders/1280x960.png'}
		/>
	</div>
	<button class="modal-close is-large" aria-label="close" on:click={() => toggleModal(false)} />
</div>
