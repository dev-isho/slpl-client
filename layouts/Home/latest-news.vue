<template>
  <div>
    <div class="text-main my-10">
      <p class="text-base">Latest News</p>
      <div class="flex flex-wrap my-5 md:my-2">
        <div
          class="w-1/2 lg:w-1/3 sm:w-1/2 md:w-1/2 sm:py-0 md:py-2 py-2 flex flex-col"
          v-for="(item, index) in News"
          :key="index"
          @click="viewNews(item._id)"
        >
          <div class="bg-white shadow-md rounded overflow-hidden flex flex-1 flex-col mx-1">
            <img
              class="h-24 md:h-32 w-full"
              :src="`http://192.168.8.108:4000/image/news/${item.image}`"
            >
            <div class="p-4 text-sm flex flex-1 flex-col justify-between">
              <p class="font-semibold news">{{item.title}}</p>
              <p class="mt-3 text-xs news">{{item.news}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apolloClient from "../../plugins/apolloClient.js";
import gql from "graphql-tag";

const newsQuery = gql`
  query News {
    News {
      _id
      date
      title
      subTitle
      news
      image
    }
  }
`;
export default {
  data() {
    return {
      News: ""
    };
  },
  methods: {
    allNews: function() {
      apolloClient.query({ query: newsQuery }).then(res => {
        this.News = res.data.News;
      });
    },
    viewNews: function(id) {
      this.$router.push("/news/view/" + id);
    }
  },
  created() {
    this.allNews();
  }
};
</script>

<style>
.news {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
