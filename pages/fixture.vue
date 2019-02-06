<template>
  <div class="m-2 sm:mx-5 md:mx-10 lg:mx-16 lg:px-10 lg:my-10 py-2 px-2 rounded shadow-md bg-white">
    <p class="ml-2 pt-2">Fixtures</p>
    <div class="" v-for="(match, index) in Fixtures" :key="index">
      <p
        class="pb-2 border-b text-xs pl-2 pt-4"
      >{{new Date(match.date).toDateString()}}</p>
      <div>
        <div v-for="(game, index) in match.games" :key="index">
          <div class="flex flex-wrap border-b pb-2 items-center border-b">
            <div class="w-full md:w-2/3 flex items-center justify-center mt-4">
              <div
                class="w-2/3 mx-2 text-right text-xs flex justify-end items-center"
              >
                <span class="mr-2">{{game.home.name}}</span>
                <img
                  class="w-8 h-8"
                  :src="`http://192.168.8.108:4000/image/${game.home.image}`"
                  alt
                >
              </div>
              <div
                class="bg-main text-white py-1 px-2 mx-2 text-center text-xs flex flex-wrap font-semibold"
              >VS</div>
              <div class="w-2/3 mx-2 text-sm flex items-center">
                <img
                  class="w-8 h-8"
                  :src="`http://192.168.8.108:4000/image/${game.away.image}`"
                  alt
                >
                <span class="ml-2 text-xs">{{game.away.name}}</span>
              </div>
            </div>
            <div class="w-full md:w-1/3 flex justify-center md:justify-start">
              <div class="p-2 text-sm flex items-center">
                <img src="../assets/stadium.png" class="h-6 w-6 -mt-2">
                <p class="text-center ml-2 text-xs">{{game.home.stadium}}</p>
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

const gameQuery = gql`
  query Fixtures {
    Fixtures {
      _id
      date
      games {
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
      Fixtures: ""
    };
  },
  methods: {
    allFixtures: function() {
      apolloClient.query({ query: gameQuery }).then(res => {
        this.Fixtures = res.data.Fixtures;
      });
    }
  },
  created() {
    this.allFixtures();
  }
};
</script>

<style>
</style>
