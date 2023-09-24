<script>
  import { onMount } from "svelte";
  export let photosUrls = [];
  console.log(photosUrls);
  const photosForGallery = photosUrls.map((photoUrl) => {
    return {
      src: photoUrl.default.src,
      alt: "Photo",
    };
  });
  // create as many arrays as needed to fit 3 items per row
  let images = [];
  for (let i = 0; i < photosForGallery.length; i += 3) {
    images.push(photosForGallery.slice(i, i + 3));
  }

  let currentSelectedSrc = "";

  function makeImageFullScreen(el) {
    document.getElementById("fullpage").classList.toggle("hidden");
    document.getElementById(
      "fullpage"
    ).innerHTML = `<img id="fullpage_img" src="${el.target.src}" class="max-h-full max-w-full object-contain">`;
    document.body.style.overflow = "hidden";
  }

  function closeFullscreenImage(el) {
    document.getElementById("fullpage").classList.toggle("hidden");
    document.getElementById("fullpage").innerHTML = "";
    document.body.style.overflow = "auto";
  }

  function showNextImage() {
    let currentImage = document.getElementById("fullpage_img").src;
    let currentImageIndex = photosForGallery.findIndex(
      (photo) => photo.src === currentImage
    );
    let nextImageIndex = currentImageIndex + 1;
    if (nextImageIndex === photosForGallery.length) {
      nextImageIndex = 0;
    }
    document.getElementById("fullpage_img").src =
      photosForGallery[nextImageIndex].src;
  }

  function showPreviousImage() {
    // Consider only the src starting from the @ symbol
    let currentImage = document.getElementById("fullpage_img").src;
    let currentImageIndex = photosForGallery.findIndex(
      (photo) => photo.src === currentImage
    );
    let previousImageIndex = currentImageIndex - 1;
    if (previousImageIndex === -1) {
      previousImageIndex = photosForGallery.length - 1;
    }
    document.getElementById("fullpage_img").src =
      photosForGallery[previousImageIndex].src;
  }

  let touchstartX = 0;
  let touchendX = 0;

  function checkDirection() {
    if (touchendX < touchstartX) alert("swiped left!");
    if (touchendX > touchstartX) alert("swiped right!");
  }

  onMount(() => {
    document.onkeydown = function (event) {
      switch (event.keyCode) {
        case 37:
          showPreviousImage();
          break;
        case 39:
          showNextImage();
          break;
      }
    };
    document.addEventListener("touchstart", (e) => {
      touchstartX = e.changedTouches[0].screenX;
    });

    document.addEventListener("touchend", (e) => {
      touchendX = e.changedTouches[0].screenX;
      checkDirection();
    });
  });
</script>

<div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
  {#each photosForGallery as photo}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img
      src={photo.src}
      alt={photo.alt}
      on:click={makeImageFullScreen}
      class="w-full h-auto rounded-lg mb-4 hover:scale-105 cursor-zoom-in"
      loading="lazy"
    />
  {/each}
  <div
    id="fullpage"
    on:click={closeFullscreenImage}
    class="after:content-['Click_anywhere_to_close'] after:bottom-10 after:text-center after:text-sm after:absolute after:text-white flex justify-center md:p-8 p-2 hidden fixed z-50 top-0 cursor-zoom-out left-0 w-screen h-screen bg-opacity-95 bg-black"
  />
</div>
