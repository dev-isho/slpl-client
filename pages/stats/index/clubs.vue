<template>
  <div class="lg:mx-16 lg:px-10 py-5">
    <div class="border-b-2 mx-2 py-5">
      <p class="font-semibold text-sm">Premier League Club Stats</p>
    </div>
    <div class="my-5">
      <div class="w-1/5 lg:w-32 mx-2">
        <select class="bg-transparent w-full py-2 border-b text-sm" @change="handleChange">
          <option value="Wins" data-foo="Wins" class="text-sm">Wins</option>
          <option value="Losses" data-foo="Losses" class="text-sm">Losses</option>
          <option value="Green Cards" data-foo="Green" class="text-sm">Green Cards</option>
          <option value="Red Card" data-foo="Red" class="text-sm">Red Card</option>
          <option value="Goals" data-foo="Goals" class="text-sm">Goals</option>
          <option value="Passes" data-foo="Passes" class="text-sm">Passes</option>
        </select>
      </div>
      <div class="mx-2">
        <div class="flex mt-10 text-grey-darker">
          <div class="text-xs font-semibold w-1/3 mr-2">Rank</div>
          <div class="text-xs font-semibold w-1/3">Club</div>
          <div class="text-xs font-semibold w-1/3 text-center">Stats</div>
        </div>
        <div v-for="(team, index) in Data" :key="index">
          <div
            class="flex my-4 text-main mx-2 border-b pb-2 items-center"
            v-for="(table, index) in team.table"
            :key="index"
          >
            <div class="text-xs w-1/3 mr-2">{{index + 1}}.</div>
            <div class="text-xs font-semibold w-1/3 flex items-center">
              <img :src="`https://slpl-server.herokuapp.com/image/${table.team.image}`" class="w-8 h-8">
              <span class="ml-4">{{table.team.name}}</span>
            </div>
            <div class="text-xs w-1/3 text-center">
              <span v-if="table.win != null">{{table.win}}</span>
              <span v-if="table.lost != null">{{table.lost}}</span>
              <span v-if="table.gf != null">{{table.gf}}</span>
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
      Data: ""
    };
  },
  methods: {
    goalStat: function() {
      apolloClient
        .query({
          query: goalQuery
        })
        .then(res => {
          this.Data = res.data.GoalsStatis;
        });
    },
    winStats: function() {
      apolloClient.query({ query: winQuery }).then(res => {
        this.Data = res.data.CWinStatis;
      });
    },
    lossStats: function() {
      apolloClient.query({ query: lossQuery }).then(res => {
        this.Data = res.data.CLossStatis;
      });
    },
    viewNews: function(id) {
      this.$router.push("/news/view/" + id);
    },
    handleChange(e) {
      if (e.target.options.selectedIndex > -1) {
        switch (e.target.options[e.target.options.selectedIndex].dataset.foo) {
          case "Wins":
            this.winStats();
            break;

          case "Losses":
            this.lossStats();
            break;

          case "Goals":
            this.goalStat();
            break;

          default:
            break;
        }
      }
    }
  },
  created() {
    this.goalStat();
  }
};
</script>

<style>
</style>
