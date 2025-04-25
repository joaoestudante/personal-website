<script>
  export let projects = [];
</script>

<div>
  <h3 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
    Projects
  </h3>
  <div class="flex flex-col gap-4 mt-8 mb-24">
    <div class="flex flex-row flex-wrap gap-4 justify-between">
      {#each projects as project}
        <a
          href={project.url}
          class="dark:text-white w-full h-48 flex gap-4 bg-onPrimaryBackground-light dark:bg-onPrimaryBackground-dark shadow-sm hover:scale-105 transition-all cursor-pointer rounded-md"
        >
          <img
            src={project.frontmatter.image}
            class="w-48"
            alt="project cover"
          />
          <div class="flex flex-col gap-4 mt-4 overflow-x-scroll">
            <p class="font-bold text-lg">{project.frontmatter.title}</p>
            <p class="font-light">
              {project.frontmatter.description}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
