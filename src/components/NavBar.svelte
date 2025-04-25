<script>
  import DarkmodeSwitcher from "../components/DarkmodeSwitcher.svelte";
  export let page = "/";
  const navLinks = [
    {
      title: "Projects",
      link: "/projects",
      active: page.includes("/projects"),
    },
    { title: "Blog", link: "/blog", active: page.includes("/blog") },
    { title: "Photos", link: "/photos", active: page.includes("/photos") },
  ];
  import profilePic from "./profile-pic.png";
</script>

<nav class="flex flex-row flex-wrap justify-between mb-2 mt-4">
  {#if page != "/"}
    <a
      href="/"
      class="flex gap-6 items-center hover:bg-onPrimaryBackground-light hover:dark:bg-onPrimaryBackground-dark rounded-lg px-4 cursor-pointer"
    >
      <img
        src={profilePic.src}
        alt="Profile"
        class="rounded-full"
        height="50px"
        width="50px"
      />
      <h3 class="font-display text-lg text-gray-900 dark:text-white">
        João Estudante
      </h3>
    </a>
  {/if}
  {#if page == "/"}
    <div></div>
  {/if}

  <div class="flex flex-row flex-wrap py-4 justify-end items-center gap-3">
    {#each navLinks as navLink}
      <a
        class="hover:bg-onPrimaryBackground-light dark:hover:bg-onPrimaryBackground-dark rounded-lg p-2 dark:text-slate-200 md:text-xl last:mr-0sm:mx-4"
        class:font-bold={navLink.active}
        class:dark:text-white={navLink.active}
        class:dark:text-slate-200={!navLink.active}
        href={navLink.link}>{navLink.title}</a
      >
    {/each}
    <DarkmodeSwitcher></DarkmodeSwitcher>
  </div>
</nav>
<hr
  class="w-full mb-8 border-onPrimaryBackground-light dark:border-onPrimaryBackground-dark"
/>
