<template>
  <div class="py-1 lg:py-16">
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/5 lg:w-2/3 md:pr-5 lg:pr-10 py-2 md:py-0">
        <div class="shadow-lg rounded bg-white p-2">
          <div id="slider">
            <figure class="mx-2">
              <img :src="`https://slpl-server.herokuapp.com/image/Slider/east_end_lions_.jpeg`">
              <img :src="`https://slpl-server.herokuapp.com/image/Slider/east_end_tigers_fc_squad.jpeg`">
              <img :src="`https://slpl-server.herokuapp.com/image/Slider/mighty_black_pool.jpeg`">
              <img :src="`https://slpl-server.herokuapp.com/image/Slider/mighty_black_pool.jpeg`">
              <img :src="`https://slpl-server.herokuapp.com/image/Slider/east_end_lions_.jpeg`">
            </figure>
          </div>
        </div>

        <div>
          <matchVue/>
          <latestNews/>
        </div>
      </div>
      <div class="w-full md:w-2/5 lg:w-1/3">
        <div class="shadow-lg">
          <div class="bg-green h-1 rounded-t"></div>
          <div class="bg-white rounded-b overflow-hidden">
            <p class="text-center pt-4 text-main font-semibold">Premier League Board</p>
            <div>
              <p class="pt-4 pl-2 text-main text-sm">Live Score</p>
              <div class="mt-2">
                <p class="text-xs text-grey-darker md:px-2 lg:px-4 py-2 px-4">Saturday 2 February</p>
                <div class="border-b px-4 md:px-2 lg:px-5 text-xs flex justify-between py-2">
                  <div class="flex items-center pr-2">0'</div>
                  <div class="flex items-center">
                    <span>Anti Drugs FC</span>
                    <img
                      class="h-8 w-8 ml-1 mr-2"
                      :src="`https://slpl-server.herokuapp.com/image/ANTI DRUGS TEAM.png`"
                    >
                  </div>
                  <div class="flex items-center">
                    <div class="flex bg-main p-1 text-white">
                      <span>0</span>
                      <span class="px-1">-</span>
                      <span>1</span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <img
                      class="h-8 w-8 ml-2 mr-1"
                      :src="`https://slpl-server.herokuapp.com/image/Bo Rangers team.png`"
                    >
                    <span>Bo Rangers FC</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p class="pt-4 pl-2 text-main text-sm">Results</p>
              <div class="mt-2" v-for="(result, index) in Results" :key="index">
                <p
                  class="text-xs text-grey-darker px-4 md:px-2 lg:px-4 py-4"
                >{{new Date(result.date).toDateString()}}</p>
                <div
                  class="border-b px-4 md:px-4 lg:px-5 text-xs flex justify-between py-2"
                  v-for="(game, index) in result.games"
                  :key="index"
                >
                  <div class="flex items-center w-2/3 justify-end">
                    <span>{{game.home.name}}</span>
                    <img
                      class="h-8 w-8 ml-1 mr-2"
                      :src="`https://slpl-server.herokuapp.com/image/${game.home.image}`"
                    >
                  </div>
                  <div class="flex items-center mx-2">
                    <div class="flex bg-main p-1 text-white">
                      <span>{{game.homeGoals}}</span>
                      <span class="mx-1">-</span>
                      <span>{{game.awayGoals}}</span>
                    </div>
                  </div>
                  <div class="flex items-center w-2/3">
                    <img
                      class="h-8 w-8 ml-2 mr-1"
                      :src="`https://slpl-server.herokuapp.com/image/${game.away.image}`"
                    >
                    <span>{{game.away.name}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-5">
              <button class="text-sm bg-main w-full py-4 text-white rounded">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import latestNews from "./latest-news.vue";
import matchVue from "./match.vue";
import apolloClient from "../../plugins/apolloClient.js";
import gql from "graphql-tag";

const gameQuery = gql`
  query Results {
    Results {
      date
      season
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
        homeGoals
        awayGoals
      }
    }
  }
`;

export default {
  data() {
    return {
      Results: ""
    };
  },
  methods: {
    allResults: function() {
      apolloClient.query({ query: gameQuery }).then(res => {
        this.Results = res.data.Results.slice(0, 2);
      });
    }
  },
  created() {
    this.allResults();
  },
  components: {
    latestNews,
    matchVue
  }
};
</script>

<style>
#slider {
  overflow: hidden;
}

#slider figure {
  position: relative;
  margin: 0;
  width: 500%;
  left: 0;
  animation: 20s slider infinite;
}

#slider figure img {
  width: 20%;
  float: left;
  height: 18rem;
}

@keyframes slider {
  0% {
    left: 0;
  }
  20% {
    left: 0;
  }
  25% {
    left: -100%;
  }
  45% {
    left: -100%;
  }
  50% {
    left: -200%;
  }
  70% {
    left: -200%;
  }
  75% {
    left: -300%;
  }
  95% {
    left: -300%;
  }
  100% {
    left: -400%;
  }
}
</style>
