<template>
  <div class="mt-5 lg:mt-10 flex flex-wrap">
    <div class="w-full lg:w-1/2 py-2 lg:py-0 sm:w-1/2 md:w-full">
      <div class="sm:mx-1 md:mx-0 lg:mr-2 rounded shadow overflow-hidden">
        <p class="bg-green py-2 text-center text-white font-semibold">Match</p>

        <p
          class="text-xs bg-white text-grey-darker md:px-2 lg:px-4 pt-4 px-4"
        >{{new Date(Match.date).toDateString()}}</p>
        <div class="border-b pb-1 bg-white" v-for="(game, index) in Match.games" :key="index">
          <div class="px-2 sm:px-2 md:px-4 lg:px-2 text-xs flex justify-between py-2 bg-white">
            <div class="flex items-center sm:pr-2 w-2/3 justify-end">
              <span>{{game.home.name}}</span>
              <img
                class="h-8 w-8 lg:h-8 lg:w-8 mx-2"
                :src="`https://slpl-server.herokuapp.com/image/${game.home.image}`"
              >
            </div>
            <div class="flex items-center">
              <div class="bg-main p-1 text-white">
                <span class="mx-1 sm:mx-1">VS</span>
              </div>
            </div>
            <div class="flex sm:pl-2 items-center w-2/3">
              <img
                class="h-8 w-8 lg:h-8 lg:w-8 mx-2"
                :src="`https://slpl-server.herokuapp.com/image/${game.away.image}`"
              >
              <span>{{game.away.name}}</span>
            </div>
          </div>
          <div class="flex w-full bg-white items-center justify-center mt-1">
            <img class="w-6 h-6 -mt-2" src="../../assets/stadium.png" alt>
            <span class="text-xs ml-2">{{game.home.stadium}}</span>
          </div>
        </div>
        <div class="px-2 md:px-5 py-2 rounded-b bg-white">
          <button
            class="text-sm bg-main w-full py-2 text-white rounded"
            @click="viewFixture"
          >View All</button>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 pt-2 lg:py-0 sm:w-1/2 md:w-full">
      <div class="sm:mx-1 md:mx-0 lg:ml-2 rounded rounded overflow-hidden shadow">
        <p class="bg-green py-2 text-center text-white font-semibold">Table</p>
        <div class="bg-white text-main text-xs lg:text-xs flex py-2 px-1 font-semibold">
          <div class="w-12 text-center">Pos</div>
          <div class="w-1/2">Club</div>
          <div class="w-12 text-center">Pl</div>
          <div class="w-12 text-center">GD</div>
          <div class="w-12 text-center">Pts</div>
        </div>
        <div v-for="(tb, index) in Table" :key="index">
          <div v-for="(table, index) in tb.table" :key="index">
            <div
              v-if="index <= 4"
              class="bg-white text-main text-xs lg:text-xs items-center flex py-1 px-1 border-b"
            >
              <div class="w-12 text-center">{{index + 1}}</div>
              <div class="w-1/2 items-center flex">
                <img
                  class="w-8 h-8"
                  :src="`https://slpl-server.herokuapp.com/image/${table.team.image}`"
                  alt
                >
                <p class="ml-5 lg:ml-2">{{table.team.name}}</p>
              </div>
              <div class="w-12 text-center">{{table.played}}</div>
              <div class="w-12 text-center">{{table.gd}}</div>
              <div class="w-12 text-center">{{table.point}}</div>
            </div>
          </div>
        </div>
        <div class="px-2 md:px-5 py-2 rounded-b bg-white">
          <button class="text-sm bg-main w-full py-2 text-white rounded" @click="viewTable">View All</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apolloClient from "../../plugins/apolloClient.js";
import gql from "graphql-tag";

const gameQuery = gql`
  query NextGame {
    NextGame {
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

const queryTable = gql`
  query Table {
    Table {
      _id
      table {
        team {
          name
          image
        }
        point
        win
        draw
        lost
        gf
        ga
        gd
        played
        form {
          status
        }
      }
    }
  }
`;

export default {
  data() {
    return {
      Match: {
        date: new Date()
      },
      Table: ""
    };
  },
  methods: {
    nextMatch: function() {
      apolloClient.query({ query: gameQuery }).then(res => {
        this.Match = res.data.NextGame;
      });
    },
    allTable: function() {
      apolloClient.query({ query: queryTable }).then(res => {
        this.Table = res.data.Table;
      });
    },
    viewFixture: function() {
      this.$router.push("/fixture");
    },
    viewTable: function() {
      this.$router.push("/table");
    }
  },
  created() {
    this.nextMatch();
    this.allTable();
  }
};
</script>

<style>
</style>
