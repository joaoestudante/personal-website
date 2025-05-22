<script>
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { tick } from "svelte";

  let emoji = "😀";
  let scale = tweened(1, { duration: 150, easing: cubicOut });
  let isAnimating = false;

  const emojiList = [
    "😀",
    "🤖",
    "🧠",
    "💻",
    "📱",
    "🕹️",
    "⚙️",
    "🧬",
    "👾",
    "🚀",
    "🧑‍💻",
  ];

  async function changeEmoji(event) {
    if (isAnimating) return;
    isAnimating = true;

    // Animate scale down
    scale.set(0.6);
    await tick();
    await new Promise((resolve) => setTimeout(resolve, 50));

    // Change emoji after "exit"
    let newEmoji;
    do {
      newEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
    } while (newEmoji === emoji);
    emoji = newEmoji;

    // Animate scale back in
    scale.set(6);
    await tick();
    await new Promise((resolve) => setTimeout(resolve, 50));
    scale.set(1);
    await new Promise((resolve) => setTimeout(resolve, 50));

    isAnimating = false;
  }
</script>

<div
  class="w-fit p-2 text-4xl flex items-center justify-center cursor-pointer select-none relative"
  on:click={changeEmoji}
>
  <span
    class="inline-block transition-transform duration-150"
    style="transform: scale({$scale})"
  >
    {emoji}
  </span>
</div>

<style>
  :global(body) {
    position: relative;
  }
</style>
