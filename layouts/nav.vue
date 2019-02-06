<template>
  <nav class="flex flex-wrap justify-between bg-main text-white">
    <div
      class="flex w-full lg:w-auto justify-between p-5 items-center text-base lg:text-xl font-semibold"
    >
      <nuxt-link class="text-white no-underline" to="/">Sierra Leone Premier League Board</nuxt-link>
      <div class="block lg:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-green border-green hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full lg:flex lg:w-auto">
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
        class="text-white text-sm lg:w-auto p-5 block no-underline"
      >Fixtures</nuxt-link>
      <nuxt-link
        active-class="bg-green"
        to="/result"
        class="text-white lg:w-auto text-sm p-5 block no-underline"
      >Result</nuxt-link>
      <nuxt-link
        active-class="bg-green"
        to="/player"
        class="text-white p-5 lg:w-auto text-sm block no-underline"
      >Players</nuxt-link>
      <nuxt-link
        active-class="bg-green"
        to="/stats"
        class="text-white lg:w-auto p-5 text-sm block no-underline"
      >Stats</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style>
</style>
