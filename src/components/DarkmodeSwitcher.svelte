<script>
  import { DarkMode } from "flowbite-svelte";
  import { drawMermaidJsGraphs } from "../plugins/mermaid.js";

  let btnClass =
    "text-gray-500 dark:text-gray-400 hover:bg-onPrimaryBackground-light dark:hover:bg-onPrimaryBackground-dark rounded-lg text-xl-2 p-2";

  function handleMermaidJsDarkModeToggle() {
    drawMermaidJsGraphs();
  }
</script>

<div
  on:click={handleMermaidJsDarkModeToggle}
  on:keypress={handleMermaidJsDarkModeToggle}
>
  <DarkMode {btnClass} />
</div>
