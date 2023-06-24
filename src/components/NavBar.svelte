<script>
      import DarkmodeSwitcher from "../components/DarkmodeSwitcher.svelte";
      export let page = "/";
      const navLinks =
        [
          {title: 'Home', link: '/', active: page == '/'},
          {title: 'Blog', link: '/blog', active: page.includes('/blog')},
          {title: "TIL",  link: '/til', active: page == '/til'}
          ];
</script>

<nav class="flex flex-row flex-wrap py-4 justify-end items-center gap-3 mb-12">
  {#each navLinks as navLink}
  <a class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 dark:text-slate-200 md:text-xl last:mr-0sm:mx-4"
     class:text-primary-700="{navLink.active}"
     class:dark:text-primary-600="{navLink.active}"
     class:dark:text-slate-200="{!navLink.active}"
     href="{navLink.link}">{navLink.title}</a>
  {/each}
  <DarkmodeSwitcher></DarkmodeSwitcher>
</nav>