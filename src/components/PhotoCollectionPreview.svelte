<script>
  import { Card, Badge } from "flowbite-svelte";
  export let collectionTitle = "";
  export let collectionDate = "";
  export let collectionDescription = "";
  export let collectionUrl = "";
  export let collectionPreviewImgUrl = "";
</script>

<a
  href={collectionUrl}
  class="block grow h-96 bg-onPrimaryBackground-light dark:bg-onPrimaryBackground-dark shadow-sm hover:scale-105 transition-all cursor-pointer rounded-md"
>
  <img
    src={collectionPreviewImgUrl}
    alt={collectionTitle}
    class="w-full h-48 object-cover rounded-t-lg shadow"
  />
  <div class="p-6">
    <h4
      class="font-display text-xl font-semibold lg:text-2xl text-gray-900 dark:text-white"
    >
      {collectionTitle}
    </h4>
    <p class="text-gray-500 dark:text-gray-300 italic">
      {collectionDate.toISOString().split("T")[0]}
    </p>
    <p
      class="mt-4 font-normal text-gray-500 dark:text-gray-300 text-lg lg:text-xl"
    >
      {collectionDescription}
    </p>
  </div>
</a>
