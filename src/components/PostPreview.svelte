<script>
  import { Card, Badge } from "flowbite-svelte";
  export let postTitle = "";
  export let postDate = "";
  export let postDescription = "";
  export let postUrl = "";
  export let tags = [];
</script>

<a
  href={postUrl}
  class="block min-w-full p-6 bg-onPrimaryBackground-light dark:bg-onPrimaryBackground-dark shadow-sm hover:scale-105 transition-all cursor-pointer rounded-md"
>
  <h4
    class="font-display text-xl font-semibold lg:text-2xl text-gray-900 dark:text-white"
  >
    {postTitle}
  </h4>
  <p class="text-gray-500 dark:text-gray-300 italic">
    {postDate.toISOString().split("T")[0]}
  </p>
  <p
    class="mt-4 font-normal text-gray-500 dark:text-gray-300 text-lg lg:text-xl"
  >
    {postDescription}
  </p>
</a>
