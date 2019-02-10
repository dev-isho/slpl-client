<template>
  <div class="pt-5 lg:mx-16 lg:px-5">
    <div class="mx-2 my-2 p-2">
      <div class="mt-2 mx-2" v-for="(res, index) in Result" :key="index">
        <p
          class="pb-5 border-b text-sm"
        >{{new Date(res.date).toDateString()}}</p>
        <div>
          <div v-for="(game, index) in res.games" :key="index">
            <div class="flex flex-wrap border-b pb-1 items-center">
              <div class="w-full md:w-1/2 mt-2 flex items-center">
                <div
                  class="w-2/3 mx-2 text-right text-sm  flex justify-end items-center"
                >
                  <span class="mr-2 text-xs">{{game.home.name}}</span>
                  <img
                    class="w-8 h-8"
                    :src="`https://slpl-server.herokuapp.com/image/${game.home.image}`"
                    alt
                  >
                </div>
                <div
                  class="bg-green flex text-white py-1 px-2 mx-2 text-center text-sm "
                >
                  <span>{{game.homeGoals}}</span>
                  <span class="mx-2">-</span>
                  <span>{{game.awayGoals}}</span>
                </div>
                <div class="w-2/3 mx-2 text-sm  flex items-center">
                  <img
                    class="w-8 h-8"
                    :src="`https://slpl-server.herokuapp.com/image/${game.away.image}`"
                    alt
                  >
                  <span class="ml-2 text-xs">{{game.away.name}}</span>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="p-4 text-sm">
                  <div class="flex items-center justify-center">
                    <img src="../../../../assets/images/stadium.png" class="h-6 w-6 -mt-2">
                    <p class="text-center ml-2  text-xs">{{game.home.stadium}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apolloClient from "../../../../plugins/apolloClient.js";
import gql from "graphql-tag";

const resQuery = gql`
  query Result($id: ID) {
    Result(id: $id) {
      date
      _id
      games {
        _id
        home {
          _id
          name
          image
          stadium
        }
        away {
          _id
          name
          image
        }
        homeGoals
        awayGoals
      }
    }
  }
`;
export default {
  data() {
    return {
      Result: ""
    };
  },
  methods: {
    teamResult() {
      apolloClient
        .query({ query: resQuery, variables: { id: this.$route.params.id } })
        .then(res => {
          this.Result = res.data.Result;
        });
    },
    viewNews: function(id) {
      this.$router.push("/news/view/" + id);
    }
  },
  created() {
    this.teamResult();
  }
};
</script>

<style>
</style>
