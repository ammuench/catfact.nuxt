<script setup>
const metaImage = `https://catfact.page/img/meta-${Math.floor(
  Math.random() * 4
)}.jpg`;

useHead({
  title: "😺 catfact.page 😺",
  meta: [
    { name: "description", content: "Click this link, get a cat fact!" },
    { name: "author", content: "Alex Muench (https://alexmuen.ch)" },

    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://catfact.page/" },
    { name: "og:title", content: "😺 catfact.page 😺" },
    { name: "og:description", content: "Click this link, get a cat fact!" },
    { name: "og:image", content: metaImage },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://catfact.page/" },
    { name: "twitter:title", content: "😺 catfact.page 😺" },
    {
      name: "twitter:description",
      content: "Click this link, get a cat fact!",
    },
    { name: "twitter:image", content: metaImage },
  ],
});

const catFactResponse = await useFetch("/api/catfact");
const catFact = catFactResponse?.data?.value?.fact;

const possibleBackgrounds = [
  'url("/img/cat-bg-1.jpeg") no-repeat 35% center fixed;',
  'url("/img/cat-bg-2.webp") no-repeat 35% center fixed;',
  'url("/img/cat-bg-3.webp") no-repeat center center fixed ;',
  'url("/img/cat-bg-4.webp") no-repeat 65% center fixed;',
  'url("/img/cat-bg-5.webp") no-repeat right center fixed;',
  'url("/img/cat-bg-6.webp") no-repeat 35% center fixed;',
  'url("/img/cat-bg-7.webp") no-repeat 90% center fixed;',
  'url("/img/cat-bg-8.webp") no-repeat left center fixed;',
];
const bgToUse =
  possibleBackgrounds[Math.floor(Math.random() * possibleBackgrounds.length)];
</script>

<template>
  <div class="o_page" :style="{ background: possibleBackgrounds[5] }">
    <h1 class="c_pageTitle">
      catfact<span class="c_pageTitle__tinycat">😺</span>page
    </h1>
    <div id="c_catFact" :class="{ longFact: catFact && catFact.length > 200 }">
      {{ catFact }}
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.o_page {
  height: 100vh;
  width: 100vw;

  background: url("/img/cat-bg-1.jpeg") no-repeat 35% center fixed;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;

  overflow: hidden;

  display: grid;
  grid-template: 1fr 1fr / 1fr;
  justify-content: center;
  align-items: center;

  padding: 5%;

  box-sizing: border-box;
}

.c_pageTitle {
  color: white;
  font-family: "Baloo Bhaina", sans-serif;
  font-size: 6rem;
  text-align: center;

  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 2px 0 #000;
}

.c_pageTitle__tinycat {
  font-size: 1.5rem;
}

#c_catFact {
  color: white;
  font-size: 3rem;
  text-align: center;

  align-self: start;

  font-weight: bold;

  text-wrap: balance;

  background: #0000003b;
  padding: 1rem;
  backdrop-filter: blur(2px);
  border-radius: 1rem;
}

@media (max-width: 768px) {
  body {
    margin: 0;
  }

  .c_pageTitle {
    font-size: 3rem;
  }

  .c_pageTitle__tinycat {
    font-size: 0.75rem;
  }

  #c_catFact {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>
