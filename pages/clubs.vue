<template>
  <div>
    <div class="flex flex-wrap p-5">
      <div
        class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col"
        v-for="(team, index) in Teams"
        :key="index"
      >
        <div class="bg-white shadow-md rounded overflow-hidden flex flex-col flex-1 m-1">
          <div class="flex h-24 md:h-32 bg-main p-1 items-center justify-center">
            <img
              class="h-24 w-24"
              :src="`https://slpl-server.herokuapp.com/image/${team.image}`"
              alt
            >
          </div>
          <div class="px-2 flex flex-col flex-1 justify-between">
            <p class="text-sm text-center my-2">{{team.name}}</p>
            <div>
              <div class="flex items-center justify-center mb-1">
                <img class="w-6 h-6 -mt-2" src="../assets/stadium.png" alt>
                <span class="text-xs ml-2">{{team.stadium}}</span>
              </div>
              <div class="p-2">
                <button @click="clubProfile" class="text-xs bg-green w-full py-2 rounded shadow text-white">Club Profile</button>
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

const postsQuery = gql`
  query Teams {
    Teams {
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
      Teams: ""
    };
  },
  methods: {
    allTeams() {
      apolloClient.query({ query: postsQuery }).then(res => {
        this.Teams = res.data.Teams;
      });
    },
    clubProfile: function() {
      this.$router.push("/clubs/profile");
    }
  },
  created() {
    this.allTeams();
  }
};
</script>

<style>
</style>
