<script>
    import PhotoCollectionPreview from "./PhotoCollectionPreview.svelte";
    export let collections = [];
</script>

<div>
    <h3 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Photos</h3>
    {#if collections.length == 0}
    <p class="mt-4 text-gray-900 dark:text-white">There's nothing here yet :)</p>
    {/if}
    <div class="flex flex-col gap-4 mt-8 mb-24">
        <div class="flex flex-row flex-wrap gap-4 justify-between">
          {#each collections as collection}
          <PhotoCollectionPreview
              collectionTitle={collection.frontmatter.title}
              collectionUrl={collection.url}
              collectionDescription={collection.frontmatter.description}
              collectionDate={new Date(collection.frontmatter.pubDate)}
              collectionPreviewImgUrl={collection.frontmatter.previewImgUrl}
              >
            </PhotoCollectionPreview>
          {/each}
        </div>
    </div>
</div>