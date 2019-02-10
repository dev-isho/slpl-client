<template>
  <div>
    <div class="main text-white">
      <div class="lg:mx-16 lg:px-10 pt-5 mx-10">
        <p class="text-2xl py-5">Stats Centre</p>
        <div class="flex mt-5">
          <div class="w-1/5 bg-green rounded-t overflow-hidden mx-1">
            <router-link
              :to="`/stats/dashboard`"
              class="block no-underline text-center text-xs py-2 md:text-sm text-main font-semibold"
              active-class="bg-white text-main"
              exact
            >Dashboard</router-link>
          </div>
          <div class="w-1/5 bg-green rounded-t overflow-hidden mx-1">
            <router-link
              :to="`/stats/players`"
              class="block no-underline text-center text-xs py-2 md:text-sm text-main font-semibold"
              active-class="bg-white text-main"
            >Player Stats</router-link>
          </div>
          <div class="w-1/5 bg-green rounded-t overflow-hidden mx-1">
            <router-link
              :to="`/stats/clubs`"
              class="block no-underline text-center text-xs py-2 md:text-sm text-main font-semibold"
              active-class="bg-white text-main"
            >Club Stats</router-link>
          </div>
        </div>
      </div>
    </div>

    <nuxt/>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main {
  background: url("../../assets/images/pre_footer_bg.jpg");
}
</style>
