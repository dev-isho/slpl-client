<template>
  <div class="pt-5 lg:mx-16">
    <div class="mx-2 bg-white my-2 p-2 rounded shadow-md">
      <div class="mt-2" v-for="(fix, index) in Fixture" :key="index">
        <p
          class="pb-5 mx-2 border-b text-sm"
        >{{new Date(fix.date).toDateString()}}</p>
        <div>
          <div v-for="(game, index) in fix.games" :key="index">
            <div class="flex flex-wrap border-b pb-1 items-center mx-2">
              <div class="w-full flex items-center mt-1 md:justify-center md:w-1/2">
                <div
                  class="w-2/3 my-2 text-right text-sm flex justify-end items-center"
                >
                  <span class="mr-2 text-xs">{{game.home.name}}</span>
                  <img
                    class="w-8 h-8"
                    :src="`https://slpl-server.herokuapp.com/image/${game.home.image}`"
                    alt
                  >
                </div>
                <div
                  class="bg-green text-white py-1 px-2 mx-2 flex items-center text-center text-xs"
                >VS</div>
                <div class="w-2/3 mx-2 text-sm flex items-center">
                  <img
                    class="w-8 h-8"
                    :src="`https://slpl-server.herokuapp.com/image/${game.away.image}`"
                    alt
                  >
                  <span class="ml-2 text-xs">{{game.away.name}}</span>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="px-4 pb-2 text-xs">
                  <p class="font-semibold text-center"></p>
                  <div class="flex items-center justify-center">
                    <img src="../../../../assets/images/stadium.png" class="h-6 w-6 -mt-2">
                    <p class="text-center ml-2">{{game.home.stadium}}</p>
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

const fixQuery = gql`
  query Fixture($id: ID) {
    Fixture(id: $id) {
      date
      games {
        _id
        home {
          name
          image
          stadium
        }
        away {
          name
          image
        }
      }
    }
  }
`;

export default {
  data() {
    return {
      Fixture: ""
    };
  },
  methods: {
    teamFixture() {
      apolloClient
        .query({ query: fixQuery, variables: { id: this.$route.params.id } })
        .then(res => {
          this.Fixture = res.data.Fixture.slice(0, 5);
        });
    }
  },
  created() {
    this.teamFixture();
  }
};
</script>

<style>
</style>

