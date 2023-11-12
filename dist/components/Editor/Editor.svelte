<script>import Menu from "../Menu/Menu.svelte";
import Slider from "../Slider/Slider.svelte";
import "../../app.scss";
import "./Editor.scss";
import { setLocale } from "../../stores/language-store.ts";
export let locale = "en";
setLocale(locale);
</script>

<Menu />
<div contenteditable="true" class="editor">
	<div id="start" />
</div>
<Slider />
