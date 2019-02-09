<template>
  <div class="bg-grey-light">
    <div class="pt-5 lg:mx-16">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/3">
          <div class="border mt-2 mx-2 rounded bg-white shadow-md">
            <p class="p-2 text-sm border-b">Fixtures</p>
            <div class="pt-2" v-for="(fix, index) in Fixture" :key="index">
              <p class="text-xs px-2 text-grey-darker">{{new Date(fix.date).toDateString()}}</p>
              <div
                class="border-b flex pt-4 pb-2 items-center justify-between"
                v-for="(game, index) in fix.games"
                :key="index"
              >
                <div class="w-1/2 flex justify-end pr-2 items-center">
                  <span class="mr-2 text-xs">{{game.home.name}}</span>
                  <img class="w-6 h-6" :src="`https://slpl-server.herokuapp.com/image/${game.home.image}`">
                </div>
                <div
                  class="bg-green items-center flex text-white py-1 px-2 text-center text-xs font-semibold"
                >VS</div>
                <div class="w-1/2 pl-2 flex items-center">
                  <img class="w-6 h-6" :src="`https://slpl-server.herokuapp.com/image/${game.away.image}`">
                  <span class="ml-2 text-xs">{{game.away.name}}</span>
                </div>
              </div>
            </div>
            <div class="px-5 py-2">
              <button class="text-sm bg-main w-full py-2 text-white rounded">View All</button>
            </div>
          </div>
          <div class="border mt-2 mx-2 rounded bg-white shadow-md">
            <p class="p-2 border-b text-sm">Results</p>
            <div class="pt-2" v-for="(res, index) in Result" :key="index">
              <p class="text-xs px-2 text-grey-darker">{{new Date(res.date).toDateString()}}</p>
              <div
                class="border-b flex pt-4 pb-2 items-center justify-between"
                v-for="(game, index) in res.games"
                :key="index"
              >
                <div class="w-1/2 flex justify-end pr-2 items-center">
                  <span class="mr-2 text-xs">{{game.home.name}}</span>
                  <img class="w-6 h-6" :src="`https://slpl-server.herokuapp.com/image/${game.home.image}`">
                </div>
                <div
                  class="bg-green items-center flex text-white py-1 px-2 text-center text-xs font-semibold"
                >
                  <span class="mr-1">{{game.homeGoals}}</span> :
                  <span class="ml-1">{{game.awayGoals}}</span>
                </div>
                <div class="w-1/2 pl-2 flex items-center">
                  <img class="w-6 h-6" :src="`https://slpl-server.herokuapp.com/image/${game.away.image}`">
                  <span class="ml-2 text-xs">{{game.away.name}}</span>
                </div>
              </div>
            </div>
            <div class="px-5 py-2">
              <button class="text-sm bg-main w-full py-2 text-white rounded">View All</button>
            </div>
          </div>
          <div class="border bg-white shadow-md my-4 mx-2 rounded">
            <p class="p-2 text-sm border-b">Premier League</p>
            <div class="pt-2">
              <div class="mt-1 text-xs border-b pb-2 text-grey-darker flex font-semibold mb-2 px-2">
                <div class="w-10 text-center">Pos</div>
                <div class="w-2/3 pl-1">Team</div>
                <div class="w-10 text-center">Pl</div>
                <div class="w-10 text-center">GD</div>
                <div class="w-10 text-center">Pts</div>
              </div>
              <div v-for="(tb, index) in Table" :key="index">
                <div
                  class="border-b flex py-2 items-center text-xs px-2 text-main font-semibold"
                  v-for="(table, index) in tb.table"
                  :key="index"
                >
                  <div class="w-10 text-center text-xs">{{table.pos}}</div>
                  <div class="w-2/3 pl-1 flex items-center">
                    <img
                      class="w-6 h-6"
                      :src="`https://slpl-server.herokuapp.com/image/${table.team.image}`"
                    >
                    <p class="ml-2">{{table.team.name}}</p>
                  </div>
                  <div class="w-10 text-center">{{table.played}}</div>
                  <div class="w-10 text-center">{{table.gd}}</div>
                  <div class="w-10 text-center">{{table.point}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-2/3">
          <div class="flex flex-wrap">
            <div class="w-screen flex justify-center">
              <div class="w-1/2">
                <div class="m-1 sm:m-2">
                  <div class="border rounded shadow-md p-2 bg-white mx-1">
                    <p class="text-xs text-center block py-2">2018/19 Home Kit</p>
                    <div class="text-center">
                      <img class="h-48 mt-5" src="../../../../assets/images/Photo-Missing.png">
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/2">
                <div class="m-1 sm:m-2">
                  <div class="border rounded shadow-md p-2 bg-white mx-1">
                    <p class="text-xs text-center block py-2">2018/19 Away Kit</p>
                    <div class="text-center">
                      <img class="h-48 mt-5" src="../../../../assets/images/Photo-Missing.png">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:flex">
              <div class="my-2 mx-2 md:w-1/2">
                <div class="border rounded shadow-md p-2 bg-white mx-1">
                  <p class="text-xs py-2 text-center block pt-2">National Insurance Company Limited</p>
                  <div class="text-center">
                    <img class="h-48 mt-2" src="../../../../assets/images/NIC-LOGOtest1.png">
                  </div>
                </div>
              </div>
              <div class="my-2 mx-2 md:w-1/2">
                <div class="border rounded shadow-md p-2 bg-white mx-1">
                  <p class="text-xs py-2 text-center block">Skye Bank</p>
                  <div class="text-center">
                    <img
                      class="h-48 mt-2"
                      src="../../../../assets/images/Skyebanknigeria_logo-1.png"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-1 mt-5 md:mt-2 lg:mt-10">
            <p class="text-sm font-semibold text-grey-darkest ml-1">Latest News</p>
            <div class="flex mt-5 md:mt-2">
              <div
                class="w-1/2 lg:w-1/3 sm:w-1/2 md:w-1/2 sm:py-0 md:py-2 py-2 flex flex-col"
                v-for="(item, index) in News"
                :key="index"
                @click="viewNews(item._id)"
              >
                <div class="bg-white shadow-md rounded overflow-hidden flex flex-1 flex-col mx-1">
                  <img
                    class="h-24 md:h-32 w-full"
                    :src="`https://slpl-server.herokuapp.com/image/news/${item.image}`"
                  >
                  <div class="p-4 text-sm flex flex-1 flex-col justify-between">
                    <p class="font-semibold news">{{item.title}}</p>
                    <p class="mt-3 text-xs news">{{item.news}}</p>
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
        }
        away {
          name
          image
        }
      }
    }
  }
`;

const newsQuery = gql`
  query News {
    News {
      _id
      date
      title
      subTitle
      news
      image
    }
  }
`;

const resQuery = gql`
  query Result($id: ID) {
    Result(id: $id) {
      date
      _id
      games {
        _id
        home {
          _id
          name
          image
          stadium
        }
        away {
          _id
          name
          image
        }
        homeGoals
        awayGoals
      }
    }
  }
`;

const onTQuery = gql`
  query onTable($id: ID) {
    onTable(id: $id) {
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
        gd
        played
        pos
      }
    }
  }
`;

export default {
  data() {
    return {
      Fixture: "",
      Result: "",
      Table: "",
      News: ""
    };
  },
  methods: {
    teamFixture() {
      apolloClient
        .query({ query: fixQuery, variables: { id: this.$route.params.id } })
        .then(res => {
          this.Fixture = res.data.Fixture.slice(0, 5);
        });
    },
    teamResult() {
      apolloClient
        .query({ query: resQuery, variables: { id: this.$route.params.id } })
        .then(res => {
          this.Result = res.data.Result;
        });
    },
    onTable() {
      apolloClient
        .query({ query: onTQuery, variables: { id: this.$route.params.id } })
        .then(res => {
          this.Table = res.data.onTable;
        });
    },
    allNews: function() {
      apolloClient.query({ query: newsQuery }).then(res => {
        this.News = res.data.News;
      });
    },
    viewNews: function(id) {
      this.$router.push("/news/view/" + id);
    }
  },
  created() {
    this.teamResult();
    this.teamFixture();
    this.onTable();
    this.allNews();
  }
};
</script>

<style>
</style>
