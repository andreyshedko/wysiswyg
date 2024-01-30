<script lang="ts">
	export let content: string;
	export let placeholderUrl: string;
    export let templateUrl: string;
</script>

<div class="card">
	<div class="card-image">
		<figure class="image is-4by3">
			<img src={placeholderUrl} alt="An alt text" />
		</figure>
	</div>
	<div class="card-content">
		<div class="content is-size-5-tablet is-size-5-mobile">{content}</div>
	</div>
    <footer class="card-footer">
        <a data-sveltekit-preload-data="tap" href="/{templateUrl}?size=4k" class="card-footer-item is-size-6-tablet is-size-6-mobile">4K (2560px)</a>
        <a data-sveltekit-preload-data="tap" href="/{templateUrl}?size=big_laptop" class="card-footer-item is-size-6-tablet is-size-6-mobile">Big Laptop (1440px)</a>
        <a data-sveltekit-preload-data="tap" href="/{templateUrl}?size=laptop" class="card-footer-item is-size-6-tablet is-size-6-mobile">Laptop (1024px)</a>
        <a data-sveltekit-preload-data="tap" href="/{templateUrl}?size=tablet" class="card-footer-item is-size-6-tablet is-size-6-mobile">Tablet (768px)</a>
        <a data-sveltekit-preload-data="tap" href="/{templateUrl}?size=mobile" class="card-footer-item is-size-6-tablet is-size-6-mobile">Mobile (425px)</a>
      </footer>
</div>
