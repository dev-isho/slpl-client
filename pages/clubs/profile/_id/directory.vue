<template>
  <div class="pt-5 lg:mx-16 lg:px-5">
    <div class="mx-2 my-2 p-2">
      <div>
        <div class="px-1 md:px-2">
          <p class="text-xl md:text-2xl">{{Team.name}}</p>
          <p class="text-grey-darker text-xs mt-2">
            Website:
            <span class="text-yellow-dark">Not Available</span>
          </p>
        </div>
        <div class="mt-2 flex flex-wrap">
          <div class="w-full md:w-1/2" v-for="(staff, index) in Team.staff" :key="index">
            <div class="border my-2 md:mx-2 rounded">
              <div class="border-b px-4 py-2 text-xs font-semibold">
                <p>{{staff.role}}</p>
              </div>
              <div class="px-4 py-2 text-xs">
                <p>{{staff.name}}</p>
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

const teamQuery = gql`
  query Team($id: ID) {
    Team(id: $id) {
      name
      staff {
        role
        name
      }
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
    teamOne() {
      apolloClient
        .query({ query: teamQuery, variables: { id: this.$route.params.id } })
        .then(res => {
          this.Team = res.data.Team;
        });
    },
    viewNews: function(id) {
      this.$router.push("/news/view/" + id);
    }
  },
  created() {
    this.teamOne();
  }
};
</script>

<style>
</style>
