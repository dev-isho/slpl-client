<template>
  <div>
    <div class="mt-5 lg:mx-16 lg:px-5">
      <div class="flex mx-2 items-center">
        <div class="w-1/2 mx-1 md:w-1/4">
          <p class="text-xs text-grey-darker ml-2">Filter by Season</p>
          <select class="bg-transparent w-full py-2 border-b text-xs">
            <option value class="text-sm">2018/19</option>
          </select>
        </div>
        <div class="w-1/2 md:w-1/5 lg:w-1/6">
          <div
            class="rounded bg-yellow-dark text-xs text-white font-semibold flex items-center justify-center py-4"
          >
            <span>Reset Filters</span>
          </div>
        </div>
      </div>
      <div class="flex mt-5 flex-wrap">
        <div
          class="w-1/2 md:w-1/3 lg:w-1/4 flex-col flex"
          v-for="(squad, index) in Squad"
          :key="index"
        >
          <div class="border flex flex-col flex-1 justify-between rounded overflow-hidden m-2">
            <div class="main flex px-2">
              <div class="w-1/2 pt-2 -mb-1">
                <img class="h-32 ml-2" src="../../../../assets/images/Photo-Missing.png">
              </div>
              <div class="w-1/2 text-white text-right mt-5">
                <p>{{squad.name}}</p>
                <p class="text-sm mt-1">{{squad.position}}</p>
                <p class="text-xs mt-1">To be confirm</p>
              </div>
            </div>
            <div class="flex border-b px-2 py-2 text-xs text-grey-darker">
              <div class="w-1/2">Nationality</div>
              <div class="w-1/2 text-right">{{squad.nationality}}</div>
            </div>
            <div class="flex border-b px-2 py-2 text-xs text-grey-darker">
              <div class="w-1/2">Appearances</div>
              <div class="w-1/2 text-right">0</div>
            </div>
            <div
              v-if="squad.position === 'Goalkeeper'"
              class="flex border-b px-2 py-2 text-xs text-grey-darker"
            >
              <div class="w-1/2">Clean Sheet</div>
              <div class="w-1/2 text-right">0</div>
            </div>
            <div v-if="squad.position !== 'Goalkeeper'">
              <div class="flex border-b px-2 py-2 text-xs text-grey-darker">
                <div class="w-1/2">Goals</div>
                <div class="w-1/2 text-right">0</div>
              </div>
              <div class="flex border-b px-2 py-2 text-xs text-grey-darker">
                <div class="w-1/2">Assits</div>
                <div class="w-1/2 text-right">0</div>
              </div>
            </div>
            <div>
              <div
                class="flex rounded-sm m-2 text-white items-center justify-center py-2 bg-yellow-dark"
              >
                <p class="text-xs block w-1/2">View Profile</p>
                <svg
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="arrow-right"
                  class="svg-inline--fa fa-arrow-right fa-w-14 w-4 h-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                  ></path>
                </svg>
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

const sqdQuery = gql`
  query Squad($id: ID) {
    Squad(id: $id) {
      name
      team {
        _id
        name
      }
      number
      position
      nationality
    }
  }
`;

export default {
  data() {
    return {
      Squad: ""
    };
  },
  methods: {
    teamSquad() {
      apolloClient
        .query({ query: sqdQuery, variables: { id: this.$route.params.id } })
        .then(res => {
          this.Squad = res.data.Squad;
        });
    }
  },
  created() {
    this.teamSquad();
  }
};
</script>

<style>
</style>
