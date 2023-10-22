<script>
    import Footer from '../Footer.svelte';
    import Icons from '../Icons.svelte';
    import Menu from '../Menu/Menu.svelte';
    import "../../app.scss";
    import "./Editor.scss";
</script>

<Menu />
<Icons />
<div contenteditable="true" class="editor">
    test
</div>
<Footer />