<script>
    import { Card, Badge } from "flowbite-svelte";
    export let postTitle='';
    export let postDate = '';
    export let postDescription = '';
    export let postUrl = '';
    export let postImgUrl = '';
    export let tags = [];
</script>

<Card href="{postUrl}" img="{postImgUrl}" padding="md" size="xl" >
    <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{postTitle}</h5>
    <p class="text-gray-500 dark:text-gray-300 italic">{postDate.getFullYear() + "/" + (postDate.getMonth() + 1) + "/" + postDate.getDate()}</p>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight mt-4">
      {postDescription}
    </p>
    <div class="mt-4">
      {#each tags as tag}
      <Badge rounded color="dark" size="sm">{tag}</Badge>
      {/each}
    </div>
</Card>