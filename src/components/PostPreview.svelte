<script>
    import { Card, Badge } from "flowbite-svelte";
    export let postTitle='';
    export let postDate = '';
    export let postDescription = '';
    export let postUrl = '';
    export let postImgUrl = '';
    export let tags = [];
</script>

<a href="{postUrl}" class="block min-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <h4 class="font-display text-xl font-semibold lg:text-2xl text-gray-900 dark:text-white">{postTitle}</h4>
    <p class="text-gray-500 dark:text-gray-300 italic">{postDate.getFullYear() + "/" + (postDate.getMonth() + 1) + "/" + postDate.getDate()}</p>
    <p class="mt-4 font-normal text-gray-500 dark:text-gray-300 text-lg lg:text-xl ">
      {postDescription}
    </p>
    <div class="mt-4">
      {#each tags as tag}
      <Badge rounded color="dark" large>{tag}</Badge>
      {/each}
    </div>
  </a>