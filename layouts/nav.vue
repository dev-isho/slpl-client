<template>
  <header class="bg-main text-white px-5 flex justify-between shadow-lg border-b">
    <div class="flex items-center">
      <nuxt-link
        to="/"
        class="text-white font-bold no-underline text-xl"
      >Sierra Leone Premier League Board</nuxt-link>
    </div>
    <div class="flex">
      <nuxt-link
        to="/"
        exact
        active-class="bg-green"
        class="text-white p-5 text-sm block no-underline items-center"
      >Home</nuxt-link>
      <nuxt-link
        active-class="bg-green"
        to="/news"
        class="text-white p-5 text-sm block no-underline items-center"
      >News</nuxt-link>
      <nuxt-link
        active-class="bg-green"
        to="/table"
        class="text-white p-5 text-sm block no-underline items-center"
      >Table</nuxt-link>
      <nuxt-link
        active-class="bg-green"
        to="/clubs"
        class="text-white p-5 text-sm block no-underline items-center"
      >Clubs</nuxt-link>
      <nuxt-link
        active-class="bg-green"
        to="/fixture"
        class="text-white text-sm p-5 block no-underline items-center"
      >Fixtures</nuxt-link>
      <nuxt-link
        active-class="bg-green"
        to="/result"
        class="text-white text-sm p-5 block no-underline items-center"
      >Result</nuxt-link>
      <nuxt-link
        active-class="bg-green"
        to="/player"
        class="text-white p-5 text-sm block no-underline items-center"
      >Players</nuxt-link>
      <nuxt-link
        active-class="bg-green"
        to="/stats"
        class="text-white p-5 text-sm block no-underline items-center"
      >Stats</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>
