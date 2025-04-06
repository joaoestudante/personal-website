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
          class="w-full h-48 flex gap-4 bg-white dark:bg-gray-700 shadow-sm border hover:scale-105 transition-all cursor-pointer dark:border-0 rounded-[2em]"
        >
          <img
            src={project.frontmatter.image}
            class="w-48"
            alt="project cover"
          />
          <div class="flex flex-col gap-4 mt-4">
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
