<template>
  <div class="lg:mx-16 lg:px-10 py-5">
    <p class="font-semibold mx-2 my-5 text-sm">2018/19 Premier League Player Stats</p>
    <div class="flex flex-wrap my-5">
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <div class="bg-white shadow border rounded m-2">
          <div class="p-2 text-sm font-semibold">Goals</div>
          <div class="flex px-2 pt-2 bg-main text-white">
            <div class="w-1/2">
              <p class="font-semibold text-xs">1.</p>
              <p class="font-semibold mt-2 text-xs">To be Confirm</p>
              <p class="mt-2 text-xs">To be Confirm</p>
              <p class="font-semibold mt-2 text-sn">To be Confirm</p>
            </div>
            <div class="w-1/2 m-0">
              <img src="../../../assets/images/Photo-Missing.png" alt class="-mb-1">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="font-semibold mx-2 my-5 text-sm">2018/19 Premier League Club Stats</p>
      <div class="flex flex-wrap my-5">
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <div class="bg-white shadow border border-green rounded m-2">
            <div class="p-2 text-sm font-semibold">Goals</div>
            <div v-for="(team, index) in GoalsStatis" :key="index">
              <div v-for="(table, index) in team.table" :key="index">
                <div class="flex px-2 py-2 main text-white" v-if="index == 0">
                  <div class="w-1/2">
                    <p class="font-semibold text-xs">{{index + 1}}.</p>
                    <p class="font-semibold mt-2 text-xl">{{table.team.name}}</p>
                    <p class="mt-2 text-xs news">{{table.team.stadium}}</p>
                    <p class="font-semibold my-2 text-sm">{{table.gf}}</p>
                  </div>
                  <div class="w-1/2 px-1 m-0">
                    <img
                      :src="`https://slpl-server.herokuapp.com/image/${table.team.image}`"
                      class="-mb-1"
                    >
                  </div>
                </div>
                <div v-if="index <= 4">
                  <div class="px-2 flex py-2" v-if="index > 0">
                    <div class="w-2/3 flex items-stretch">
                      <p class="text-xs font-semibold">{{index + 1}}.</p>
                      <div class="text-xs ml-2">
                        <p class="font-semibold">{{table.team.name}}</p>
                        <p class="news">{{table.team.stadium}}</p>
                      </div>
                    </div>
                    <div class="text-main flex w-1/3 justify-end text-sm font-semibold">
                      <span>{{table.gf}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-1 py-2">
              <button class="text-sm bg-green w-full py-2 text-white rounded">View All</button>
            </div>
          </div>
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <div class="bg-white shadow border border-green rounded m-2">
            <div class="p-2 text-sm font-semibold">Wins</div>
            <div v-for="(team, index) in CWinStatis" :key="index">
              <div v-for="(table, index) in team.table" :key="index">
                <div class="flex px-2 py-2 main text-white" v-if="index == 0">
                  <div class="w-1/2 mr-1">
                    <p class="font-semibold text-xs">{{index + 1}}.</p>
                    <p class="font-semibold mt-2 text-xl">{{table.team.name}}</p>
                    <p class="mt-2 text-xs news">{{table.team.stadium}}</p>
                    <p class="font-semibold my-2 text-sm">{{table.win}}</p>
                  </div>
                  <div class="w-1/2 px-1 m-0">
                    <img
                      :src="`https://slpl-server.herokuapp.com/image/${table.team.image}`"
                      class="-mb-1"
                    >
                  </div>
                </div>
                <div v-if="index <= 4">
                  <div class="px-2 flex py-2" v-if="index > 0">
                    <div class="w-2/3 flex items-stretch">
                      <p class="text-xs font-semibold">{{index + 1}}.</p>
                      <div class="text-xs ml-2">
                        <p class="font-semibold">{{table.team.name}}</p>
                        <p class="news">{{table.team.stadium}}</p>
                      </div>
                    </div>
                    <div class="text-main flex w-1/3 justify-end text-sm font-semibold">
                      <span>{{table.win}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-1 py-2">
              <button class="text-sm bg-green w-full py-2 text-white rounded">View All</button>
            </div>
          </div>
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <div class="bg-white shadow border border-green rounded m-2">
            <div class="p-2 text-sm font-semibold">Losses</div>
            <div v-for="(team, index) in CLossStatis" :key="index">
              <div v-for="(table, index) in team.table" :key="index">
                <div class="flex px-2 py-2 main text-white" v-if="index == 0">
                  <div class="w-1/2 mr-1">
                    <p class="font-semibold text-xs">{{index + 1}}.</p>
                    <p class="font-semibold mt-2 text-xl">{{table.team.name}}</p>
                    <p class="mt-2 text-xs news">{{table.team.stadium}}</p>
                    <p class="font-semibold my-2 text-sm">{{table.lost}}</p>
                  </div>
                  <div class="w-1/2 px-1 m-0">
                    <img
                      :src="`https://slpl-server.herokuapp.com/image/${table.team.image}`"
                      class="-mb-1"
                    >
                  </div>
                </div>
                <div v-if="index <= 4">
                  <div class="px-2 flex py-2" v-if="index > 0">
                    <div class="w-2/3 flex items-stretch">
                      <p class="text-xs font-semibold">{{index + 1}}.</p>
                      <div class="text-xs ml-2">
                        <p class="font-semibold">{{table.team.name}}</p>
                        <p class="news">{{table.team.stadium}}</p>
                      </div>
                    </div>
                    <div class="text-main flex w-1/3 justify-end text-sm font-semibold">
                      <span>{{table.lost}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-1 py-2">
              <button class="text-sm bg-green w-full py-2 text-white rounded">View All</button>
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

const goalQuery = gql`
  query GoalsStatis {
    GoalsStatis {
      _id
      table {
        team {
          name
          image
          stadium
        }
        gf
      }
    }
  }
`;

const winQuery = gql`
  query CWinStatis {
    CWinStatis {
      _id
      table {
        team {
          name
          image
          stadium
        }
        win
      }
    }
  }
`;
const lossQuery = gql`
  query CLossStatis {
    CLossStatis {
      _id
      table {
        team {
          name
          image
          stadium
        }
        lost
      }
    }
  }
`;
export default {
  data() {
    return {
      GoalsStatis: "",
      CWinStatis: "",
      CLossStatis: ""
    };
  },
  methods: {
    goalStat: function() {
      apolloClient
        .query({
          query: goalQuery
        })
        .then(res => {
          this.GoalsStatis = res.data.GoalsStatis;
        });
    },
    winStats: function() {
      apolloClient.query({ query: winQuery }).then(res => {
        this.CWinStatis = res.data.CWinStatis;
      });
    },
    lossStats: function() {
      apolloClient.query({ query: lossQuery }).then(res => {
        this.CLossStatis = res.data.CLossStatis;
      });
    },
    viewNews: function(id) {
      this.$router.push("/news/view/" + id);
    }
  },
  created() {
    this.goalStat();
    this.winStats();
    this.lossStats();
  }
};
</script>

<style>
</style>
