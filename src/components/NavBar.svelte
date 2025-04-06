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

<nav class="flex flex-row flex-wrap justify-between mb-12 mt-4">
  {#if page != "/"}
    <a
      href="/"
      class="flex gap-6 items-center hover:bg-gray-200 rounded-lg px-4 cursor-pointer"
    >
      <img
        src={profilePic.src}
        alt="Profile"
        class="rounded-full"
        height="50px"
        width="50px"
      />
      <h3
        class="font-display text-lg font-extrabold text-gray-900 dark:text-white"
      >
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
        class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 dark:text-slate-200 md:text-xl last:mr-0sm:mx-4"
        class:text-primary-700={navLink.active}
        class:dark:text-primary-600={navLink.active}
        class:dark:text-slate-200={!navLink.active}
        href={navLink.link}>{navLink.title}</a
      >
    {/each}
    <DarkmodeSwitcher></DarkmodeSwitcher>
  </div>
</nav>
