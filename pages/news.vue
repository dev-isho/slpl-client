<template>
  <div>
    <div class="lg:mx-16 lg:my-10 md:mx-8 md:my-5 mx-1">
      <div class="flex flex-wrap">
        <div
          class="w-1/2 cursor-pointer flex flex-col lg:w-1/5 md:w-1/4 sm:w-1/3 cursor-pointer"
          v-for="(item, index) in News"
          :key="index"
          @click="viewNews(item._id)"
        >
          <div class="mx-2 my-5">
            <div
              class="bg-white text-main shadow-md rounded overflow-hidden w-full flex flex-col flex-1"
            >
              <div class="h-32 lg:h-32 bg-main">
                <img
                  class="h-32 lg:h-32 w-full"
                  :src="`http://192.168.8.108:4000/image/news/${item.image}`"
                >
              </div>

              <div class="p-4 text-sm flex flex-1 flex-col justify-between">
                <p class="font-semibold news">{{item.title}}</p>
                <p class="mt-3 text-xs news">{{item.news}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apolloClient from "../plugins/apolloClient.js";
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
