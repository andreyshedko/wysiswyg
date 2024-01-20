<script lang="ts">
	import { modal, toggleModal } from '$lib/stores/modal.store.ts';
	import { onDestroy } from 'svelte';
	import './Modal.scss';

	let state: Editor.ModalState;

	const unsubscribeModal = modal.subscribe((value) => state = value);

	onDestroy(() => {
		unsubscribeModal();
	});
</script>

<div 
	class="modal"
	class:is-active={state['isOpen']}
>
	<div class="modal-background"></div>
	<div class="modal-content">
	</div>
	<button 
		class="modal-close is-large" 
		aria-label="close"
		on:click={() => toggleModal(false)}
	>
	</button>
  </div>
