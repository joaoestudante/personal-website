<script>
    import PostPreview from "../../components/PostPreview.svelte";
    export let posts = [];
</script>

<div>
    <h3 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Blog</h3>
    <p class="mt-4 text-gray-900 dark:text-white">There's nothing here yet :)</p>
    <div class="flex flex-col gap-4 mt-8 mb-24">
        <div class="flex flex-row flex-wrap gap-4 justify-between">
          {#each posts as post}
          <PostPreview
              postTitle={post.frontmatter.title}
              postUrl={post.url}
              postDescription={post.frontmatter.description}
              postDate={new Date(post.frontmatter.pubDate)}
              postImgUrl={post.frontmatter.image.url}
              tags={post.frontmatter.tags}>
            </PostPreview>
          {/each}
        </div>
    </div>
</div>