<script>
    import { DarkMode } from 'flowbite-svelte';
    import { drawMermaidJsGraphs } from "../plugins/mermaid.js";

    let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl-2 p-2';

    function handleMermaidJsDarkModeToggle() {
        drawMermaidJsGraphs();
    }
</script>
  
<div on:click={handleMermaidJsDarkModeToggle} on:keypress={handleMermaidJsDarkModeToggle}>
    <DarkMode {btnClass} />
</div>
