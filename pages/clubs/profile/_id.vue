<template>
  <div>
    <div class="main lg:px-16 md:px-10">
      <div class="px-10 py-5 flex lg:py-10 md:py-10">
        <div class="h-16 w-16 lg:h-48 lg:w-48 md:w-32 md:h-32">
          <img class="h-full w-full" :src="`https://slpl-server.herokuapp.com/image/${Team.image}`">
        </div>
        <div class="ml-5 mt-2 md:ml-10">
          <p class="text-white text-xl font-semibold md:text-3xl lg:text-4xl">{{Team.name}}</p>
          <div class="flex mt-2 md:pt-1 items-center text-white">
            <img src="../../../assets/stadium.png" class="h-6 w-6 md:h-8 md:w-8 -mt-2">
            <p class="text-center ml-2 text-xs md:text-sm">{{Team.stadium}}</p>
          </div>
          <div class="flex mt-2 md:pt-1 items-center text-white">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="home"
              class="svg-inline--fa fa-home fa-w-18 w-5 h-4 md:w-8 md:h-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              ></path>
            </svg>
            <p class="text-center ml-2 text-xs md:text-sm">Official Website: Not Available</p>
          </div>
        </div>
      </div>
      <div class="flex mt-5 mx-5 md:mx-10">
        <div class="w-1/5 bg-green rounded-t overflow-hidden mx-1">
          <nuxt-link
            :to="`/clubs/profile/${this.$route.params.id}/overview`"
            class="block no-underline text-center text-xs py-2 md:text-sm text-main text-white font-semibold"
            active-class="bg-grey-light"
            exact
          >Overview</nuxt-link>
        </div>
        <div class="w-1/5 bg-green rounded-t overflow-hidden mx-1">
          <nuxt-link
            :to="`/clubs/profile/${this.$route.params.id}/squad`"
            class="block no-underline text-center text-xs py-2 md:text-sm text-main text-white font-semibold"
            active-class="bg-grey-light"
            exact
          >Squad</nuxt-link>
        </div>
        <div class="w-1/5 bg-green rounded-t overflow-hidden mx-1">
          <nuxt-link
            :to="`/clubs/profile/${this.$route.params.id}/fixture`"
            class="block no-underline text-center text-xs py-2 md:text-sm text-white font-semibold"
            active-class="bg-grey-light"
          >Fixture</nuxt-link>
        </div>
        <div class="w-1/6 bg-green rounded-t overflow-hidden mx-1">
          <nuxt-link
            :to="`/clubs/profile/${this.$route.params.id}/result`"
            class="block no-underline text-center text-xs py-2 md:text-sm text-white font-semibold"
            active-class="bg-grey-light"
          >Result</nuxt-link>
        </div>
        <div class="w-1/6 bg-green rounded-t overflow-hidden mx-1">
          <nuxt-link
            :to="`/clubs/profile/${this.$route.params.id}/directory`"
            class="block no-underline text-xs text-center py-2 md:text-sm text-white font-semibold"
            active-class="bg-grey-light"
          >Directory</nuxt-link>
        </div>
      </div>
    </div>
    <div class="bg-grey-light mb-10">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import apolloClient from "../../../plugins/apolloClient.js";
import gql from "graphql-tag";

const postsQuery = gql`
  query Team($id: ID) {
    Team(id: $id) {
      _id
      name
      image
      stadium
    }
  }
`;
export default {
  data() {
    return {
      Team: ""
    };
  },
  methods: {
    oneTeams() {
      apolloClient
        .query({ query: postsQuery, variables: { id: this.$route.params.id } })
        .then(res => {
          this.Team = res.data.Team;
        });
    }
  },
  created() {
    this.oneTeams();
  }
};
</script>

<style>
.main {
  background: url("../../../assets/images/pre_footer_bg.jpg");
}
</style>
