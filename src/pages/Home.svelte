<script>
    import { Avatar, FooterIcon, Button, A } from "flowbite-svelte";
    import PostPreview from "../components/PostPreview.svelte";
    export let recentPosts = [];
  </script>

<div class="flex flex-col">
    <div class="flex gap-y-8 justify-between items-center flex-wrap-reverse">
        <div class="flex flex-col justify-start">
            <h3 class="font-display text-3xl font-extrabold sm:text-5xl lg:text-[length:64px] lg:leading-[56px] xl:text-7xl text-gray-900 dark:text-white">João Estudante</h3>
            <p class="mt-6 text-gray-500 dark:text-gray-300 text-lg lg:text-xl ">Full Stack Developer @ Autodesk Prodsmart, helping make factories more efficient.</p>
            <p class="mt-4 text-gray-900 dark:text-white text-lg lg:text-xl">Fan of interface design, human interaction with computers, and how to build software. In my free time, I like to experiment with new frameworks, write, watch movies, and travel.</p>
            <div class="flex mt-8 space-x-6">
                <FooterIcon href="mailto:estudante.lourenco@gmail.com" class="text-gray-400 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>
                </FooterIcon>
                <FooterIcon href="https://www.linkedin.com/in/jo%C3%A3o-louren%C3%A7o-690474151/" target=”_blank”  class="text-gray-400 hover:text-gray-900">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
              </FooterIcon>
                <FooterIcon href="https://github.com/joaoestudante" target=”_blank”  class="text-gray-400 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                </FooterIcon>
              </div>
        </div>
    </div>
    {#if recentPosts.length > 0}
    <div class="flex flex-col gap-4 mt-24 mb-24">
        <h3 class="font-display text-xl font-extrabold lg:mb-6 lg:text-3xl text-gray-900 dark:text-white">Latest post</h3>
        <div class="flex flex-row flex-wrap gap-4 justify-between">
          {#each recentPosts as post}
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
        <div>
          <a href="/blog" class="text-primary-700 dark:text-primary-600" outline>View all</a>
        </div>
    </div>
    {/if}
</div>
