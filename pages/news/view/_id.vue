<template>
  <div>
    <div class="back px-5 md:px-10 lg:px-16">
      <p class="py-5 text-xl lg:w-2/3 lg:text-2xl">{{News.title}}</p>
      <img
        class="shadow mb-5 w-full h-64 lg:h-84 lg:w-2/3"
        :src="`http://192.168.8.108:4000/image/news/${News.image}`"
        alt
      >
    </div>
    <div class="px-5 pb-5 md:mx-10 lg:mx-10 md:mt-10 lg:w-2/3">
      <p class="text-xl font-semibold my-5">{{News.subTitle}}</p>
      <p class="text-xs leading-loose my-5">{{News.news}}</p>
      <p class="text-sm text-grey-darkest mt-10 md:text-base">Latest News</p>
      <div class="flex flex-wrap my-5 md:my-2">
        <div
          class="w-1/2 lg:w-1/3 sm:w-1/2 md:w-1/2 sm:py-0 md:py-2 py-2 flex flex-col cursor-pointer"
          v-for="(news, index) in AllNews"
          :key="index"
          @click="viewNews(news._id)"
        >
          <div class="bg-white shadow-md rounded overflow-hidden flex flex-1 flex-col mx-1">
            <img
              class="h-24 md:h-32 w-full"
              :src="`http://192.168.8.108:4000/image/news/${news.image}`"
            >
            <div class="p-4 text-sm flex flex-1 flex-col justify-between">
              <p class="font-semibold news">{{news.title}}</p>
              <p class="mt-3 text-xs news">{{news.news}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apolloClient from "../../../plugins/apolloClient.js";
import gql from "graphql-tag";

const newsQuery = gql`
  query OneNews($id: ID) {
    OneNews(id: $id) {
      _id
      date
      title
      subTitle
      news
      image
    }
  }
`;

const allNewsQuery = gql`
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
      News: "",
      AllNews: ""
    };
  },
  methods: {
    oneNews: function() {
      apolloClient
        .query({
          query: newsQuery,
          variables: { id: this.$route.params.id }
        })
        .then(res => {
          this.News = res.data.OneNews;
        });
    },
    allNews: function() {
      apolloClient.query({ query: allNewsQuery }).then(res => {
        this.AllNews = res.data.News;
        this.AllNews = this.AllNews.filter(
          item => item._id !== this.$route.params.id
        );
      });
    },
    viewNews: function(id) {
      this.$router.push("/news/view/" + id);
    }
  },
  created() {
    this.oneNews();
    this.allNews();
  }
};
</script>

<style>
</style>
