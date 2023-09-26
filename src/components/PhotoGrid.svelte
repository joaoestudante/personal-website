<script>
  import { onMount } from "svelte";
  export let photosUrls = [];
  console.log(photosUrls);
  const photosForGallery = photosUrls.map((photoUrl) => {
    const splitUrl = photoUrl.default.src.split("/");
    return {
      src:
      (import.meta.env.MODE == "development" ? "/" : "") +
        splitUrl
          .splice(splitUrl.indexOf("public") + 1, splitUrl.length)
          .join("/"),
      alt: "Photo",
      width: photoUrl.default.width / 5,
      height: photoUrl.default.height / 5,
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
      "fullpage_content"
    ).innerHTML = `<img id="fullpage_img" src="${el.target.src}" class="max-h-full max-w-full object-contain rounded-md">`;
    document.body.style.overflow = "hidden";

    const splitUrl = el.target.src.split("/");
    currentSelectedSrc =
      "/" +
      splitUrl.splice(splitUrl.indexOf("images"), splitUrl.length).join("/");

    window.addEventListener("popstate", closeFullscreenImage, false);
    window.history.pushState({}, null, null);
  }

  function closeFullscreenImage() {
    document.getElementById("fullpage").classList.toggle("hidden");
    document.getElementById("fullpage_content").innerHTML = "";
    document.body.style.overflow = "auto";
    currentSelectedSrc = "";
    window.removeEventListener("popstate", closeFullscreenImage, false);
  }

  function showNextImage() {
    let currentImageIndex = photosForGallery.findIndex(
      (photo) => photo.src === currentSelectedSrc
    );
    let nextImageIndex = currentImageIndex + 1;
    if (nextImageIndex === photosForGallery.length) {
      nextImageIndex = 0;
    }
    document.getElementById("fullpage_img").src =
      photosForGallery[nextImageIndex].src;
    currentSelectedSrc = photosForGallery[nextImageIndex].src;
  }

  function showPreviousImage() {
    let currentImageIndex = photosForGallery.findIndex(
      (photo) => photo.src === currentSelectedSrc
    );
    let previousImageIndex = currentImageIndex - 1;
    if (previousImageIndex === -1) {
      previousImageIndex = photosForGallery.length - 1;
    }
    document.getElementById("fullpage_img").src =
      photosForGallery[previousImageIndex].src;
    currentSelectedSrc = photosForGallery[previousImageIndex].src;
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
        // on esc, close
        case 27:
          closeFullscreenImage();
      }
    };
  });
</script>

<div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
  <div on:click={makeImageFullScreen}>
    {#each photosForGallery as photo}
      <img
        src={photo.src}
        alt={photo.alt}
        class="w-full h-auto rounded-lg mb-4 md:hover:scale-105 cursor-zoom-in"
        loading="lazy"
        width={photo.width}
        height={photo.height}
      />
    {/each}
  </div>
  <div
    id="fullpage"
    class="flex flex-wrap justify-between pt-2 pb-2 hidden fixed z-50 top-0 left-0 w-screen h-screen bg-opacity-95 bg-black"
  >
    <div
      id="fullpage_content"
      class="flex justify-center w-full h-full items-center cursor-zoom-out py-8 px-8"
      on:click={closeFullscreenImage}
    />
    <!-- <div class="flex items-center cursor-pointer w-25" on:click={showPreviousImage}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="text-white text-3xl"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </div>
    <div class="flex items-center cursor-pointer w-25" on:click={showNextImage}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="text-white text-3xl"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div> -->
  </div>
</div>
