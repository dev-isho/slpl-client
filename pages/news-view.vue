<template>
  <div>
    <div class="back px-5 md:px-10 lg:px-16">
      <p class="py-5 text-xl text-white font-semibold lg:w-2/3 lg:text-2xl"></p>
      <img
        class="shadow mb-5 w-full h-64 lg:h-74 lg:w-2/3"
        :src="`http://192.168.8.108:4000/image/news/`"
        alt
      >
    </div>
    <!-- <div class="px-5 pb-5 md:mx-10 lg:mx-10 md:mt-10 lg:w-2/3">
      <p class="text-xl font-semibold my-5"></p>
      <p class="text-xs leading-loose my-5"></p>
      <p class="text-sm text-grey-darkest font-semibold mt-10 md:text-base">Latest News</p>
      <div class="flex flex-wrap mt-2 md:mt-5 lg:w-2/3">
        <div
          class="w-1/2 cursor-pointer flex flex-col md:w-1/3 lg:1/4"
          v-for="(item, index) in News"
          :key="index"
          @click="viewNews(item._id)"
        >
          <div
            class="bg-white text-main shadow-md rounded overflow-hidden w-full flex flex-col flex-1"
          >
            <div class="h-32 bg-main">
              <img class="h-32 w-full" :src="`http://192.168.8.108:4000/image/news/${item.image}`">
            </div>

            <div class="p-4 text-sm flex flex-1 flex-col justify-between">
              <p class="news font-medium">{{item.title}}</p>
              <p class="mt-3 text-xs news">{{item.news}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="back px-5 md:px-10 lg:px-16">
      <p class="py-5 text-xl text-white font-semibold lg:w-2/3 lg:text-2xl">{{viewOne.title}}</p>
      <img
        class="shadow mb-5 w-full h-64 lg:h-74 lg:w-2/3"
        :src="`http://192.168.8.108:4000/image/news/${viewOne.image}`"
        alt
      >
    </div>
    <div class="px-5 pb-5 md:mx-10 lg:mx-10 md:mt-10 lg:w-2/3">
      <p class="text-xl font-semibold my-5">{{viewOne.subTitle}}</p>
      <p class="text-xs leading-loose my-5">{{viewOne.news}}</p>
      <p class="text-sm text-grey-darkest font-semibold mt-10 md:text-base">Latest News</p>
      <div class="flex flex-wrap mt-2 md:mt-5 lg:w-2/3">
        <div
          class="w-1/2 cursor-pointer flex flex-col md:w-1/3 lg:1/4"
          v-for="(item, index) in News"
          :key="index"
          @click="viewNews(item._id)"
        >
          <div
            class="bg-white text-main shadow-md rounded overflow-hidden w-full flex flex-col flex-1"
          >
            <div class="h-32 bg-main">
              <img class="h-32 w-full" :src="`http://192.168.8.108:4000/image/news/${item.image}`">
            </div>

            <div class="p-4 text-sm flex flex-1 flex-col justify-between">
              <p class="news font-medium">{{item.title}}</p>
              <p class="mt-3 text-xs news">{{item.news}}</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
