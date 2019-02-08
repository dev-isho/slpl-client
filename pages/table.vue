<template>
  <div class="m-2 sm:mx-5 md:mx-10 lg:mx-16 lg:px-10 lg:my-10 py-2 px-2 rounded shadow-md bg-white">
    <p class="ml-2 pt-2">Table</p>
    <div>
      <div class="flex flex-wrap mt-1 items-center">
        <div class="w-1/2 md:w-1/4">
          <div class="px-2 pb-5 pt-2">
            <p class="text-xs text-grey-darker ml-4">Filter by Competition</p>
            <select class="bg-transparent w-full py-2 border-b text-xs">
              <option value class="text-sm">Premier League</option>
            </select>
          </div>
        </div>
        <div class="w-1/2 md:w-1/4">
          <div class="px-2 pb-5 pt-2">
            <p class="text-xs text-grey-darker ml-4">Filter by Season</p>
            <select class="bg-transparent w-full py-2 border-b text-xs">
              <option value class="text-sm">2018/19</option>
            </select>
          </div>
        </div>
        <div class="w-1/2 md:w-1/4">
          <div class="px-2 pb-5 pt-2">
            <p class="text-xs text-grey-darker ml-4">Filter by Home or Away</p>
            <select class="bg-transparent w-full py-2 border-b text-xs">
              <option value class="text-sm">All Matches</option>
              <option value class="text-sm">Home</option>
              <option value class="text-sm">Away</option>
            </select>
          </div>
        </div>
        <div class="w-1/2 md:w-1/5 lg:w-1/6">
          <div
            class="mx-2 text-sm rounded bg-yellow-dark text-white font-semibold flex items-center justify-center py-2"
          >
            <span>Reset Filters</span>
          </div>
        </div>
      </div>
      <div class="border mx-2 rounded-sm my-5">
        <div class="my-2 text-grey-darker text-xs flex font-semibold mb-2">
          <div class="w-12 text-center">Pos</div>
          <div class="w-1/2 pl-2 md:w-2/5">Club</div>
          <div class="w-12 lg:flex text-center">
            Pl
            <span class="hidden lg:block">ayed</span>
          </div>
          <div class="w-12 text-center hidden md:block">Win</div>
          <div class="w-12 text-center hidden md:block">Draw</div>
          <div class="w-12 text-center hidden md:block">Loss</div>
          <div class="w-12 text-center hidden md:block">GF</div>
          <div class="w-12 text-center hidden md:block">GA</div>
          <div class="w-12 text-center">GD</div>
          <div class="w-12 text-center">Pts</div>
          <div class="w-12 text-center hidden lg:block">Form</div>
        </div>
        <div v-for="(tb, index) in Table" :key="index">
          <div
            class="border-b flex py-2 items-center text-xs"
            v-for="(table, index) in tb.table"
            :key="index"
          >
            <div class="w-12 text-center">{{index + 1}}</div>
            <div class="w-1/2 md:w-2/5 pl-2 flex items-center text-xs">
              <img class="w-8 h-8" :src="`https://slpl-server.herokuapp.com/image/${table.team.image}`" alt>
              <p class="ml-5">{{table.team.name}}</p>
            </div>
            <div class="w-12 text-center">{{table.played}}</div>
            <div class="w-12 text-center hidden md:block">{{table.win}}</div>
            <div class="w-12 text-center hidden md:block">{{table.draw}}</div>
            <div class="w-12 text-center hidden md:block">{{table.lost}}</div>
            <div class="w-12 text-center hidden md:block">{{table.gf}}</div>
            <div class="w-12 text-center hidden md:block">{{table.ga}}</div>
            <div class="w-12 text-center">{{table.gd}}</div>
            <div class="w-12 text-center">{{table.point}}</div>
            <div class="hidden lg:flex" v-for="(form, index) in table.form" :key="index">
              <p v-if="form.status === 'W'" class="mr-1 bg-green w-5 justify-center text-xs flex items-center font-semibold p-1 rounded text-white">W</p>
              <p v-if="form.status === 'L'" class="mr-1 bg-red w-5 justify-center text-xs flex items-center font-semibold p-1 rounded text-white">L</p>
              <p v-if="form.status === 'D'" class="mr-1 bg-grey-darkest justify-center w-5 text-xs flex items-center font-semibold p-1 rounded text-white">D</p>
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
        form{
          status
        }
      }
    }
  }
`;

export default {
  data() {
    return {
      Table: ""
    };
  },
  methods: {
    allTable: function() {
      apolloClient.query({ query: queryTable }).then(res => {
        this.Table = res.data.Table;
      });
    }
  },
  created() {
    this.allTable();
  }
};
</script>

<style>
</style>
