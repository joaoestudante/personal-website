<script>
import { Alert } from 'flowbite-svelte';
import { AccordionItem, Accordion } from 'flowbite-svelte'
let count = 0;

function handleClick() {
	count += 1;
}
</script>


  <button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>