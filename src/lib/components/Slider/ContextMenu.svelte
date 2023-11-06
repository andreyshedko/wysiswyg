<script lang="ts">
	import { createEventDispatcher } from "svelte";

    // pos is cursor position when right click occur
    let pos = { x: 0, y: 0 }
    // menu is dimension (height and width) of context menu
    let menu = { h: 0, y: 0 }
    // browser/window dimension (height and width)
    let browser = { h: 0, y: 0 }
    // showMenu is state of context-menu visibility
    let showMenu = false;
    // to display some text
    const dispatch = createEventDispatcher();

    function rightClickContextMenu(e){
        showMenu = true
        browser = {
            w: window.innerWidth,
            h: window.innerHeight
        };
        pos = {
            x: e.clientX,
            y: e.clientY
        };
        // If bottom part of context menu will be displayed
        // after right-click, then change the position of the
        // context menu. This position is controlled by `top` and `left`
        // at inline style. 
        // Instead of context menu is displayed from top left of cursor position
        // when right-click occur, it will be displayed from bottom left.
        if (browser.h -  pos.y < menu.h)
            pos.y = pos.y - menu.h
        if (browser.w -  pos.x < menu.w)
            pos.x = pos.x - menu.w
    }
    function onPageClick(e){
        showMenu = false;
    }
    /**
	 * @param {HTMLElement} node
	 */
    function getContextMenuDimension(node){
        let height = node.offsetHeight
        let width = node.offsetWidth
        menu = {
            h: height,
            w: width
        }
    }
    function setBold(){
        dispatch('bold');
    }
    function setItalic(){
        dispatch('italic');
    }
    function setUnderline(){
        dispatch('underline');
    }
    let menuItems = [
        {
            'name': 'setBold',
            'onClick': setBold,
            'class': 'fa-solid fa-bold'
        },
        {
            'name': 'setItalic',
            'onClick': setItalic,
            'class': 'fa-solid fa-italic'
        },
        {
            'name': 'setUnderline',
            'onClick': setUnderline,
            'class': 'fa-solid fa-underline'
        }
    ]

</script>

{#if showMenu}
    <div use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px; z-index: 1">
        <p class="buttons">
            {#each menuItems as item}
                <button class="button" on:click={item.onClick}>
                    <span class="icon is-small">
                        <i class={item.class}></i>
                    </span>
                </button>
            {/each}
        </p>
    </div>
{/if}

<svelte:window on:contextmenu|preventDefault={rightClickContextMenu}  on:click={onPageClick} />