<template>
  <div class="lg:mx-16 lg:px-10 py-5">
    <div class="border-b-2 mx-2 py-5">
      <p class="font-semibold text-sm">Premier League Club Stats</p>
    </div>
    <div class="my-5">
      <div class="w-1/5 lg:w-32 mx-2">
        <select class="bg-transparent w-full py-2 border-b text-sm">
          <option value class="text-sm">Wins</option>
          <option value class="text-sm">Losses</option>
          <option value class="text-sm">Touches</option>
          <option value class="text-sm">Own Goals</option>
          <option value class="text-sm">green Cards</option>
          <option value class="text-sm">Red Card</option>
          <option value class="text-sm">Goals</option>
          <option value class="text-sm">Passes</option>
        </select>
      </div>
      <div class="mx-2 mt-2 flex items-center">
        <div class="w-1/3">
          <p class="text-xs mx-2 mt-4 text-grey-darker">Filter by Season</p>
          <div class="w-full">
            <select class="bg-transparent w-full py-2 border-b text-xs">
              <option value class="text-sm">2018/19</option>
              <option value class="text-sm">2017/18</option>
              <option value class="text-sm">2016/17</option>
              <option value class="text-sm">2015/16</option>
              <option value class="text-sm">2014/15</option>
              <option value class="text-sm">2013/14</option>
              <option value class="text-sm">2012/13</option>
              <option value class="text-sm">2012/11</option>
            </select>
          </div>
        </div>
        <div
          class="w-1/3 md:w-1/4 lg:w-1/5 mx-5 bg-green-dark text-center text-white rounded py-2"
        >
          <span class="text-xs font-semibold">Reset Filters</span>
        </div>
      </div>
      <div class="mx-2">
        <div class="flex mt-10 text-grey-darker">
          <div class="text-xs font-semibold w-1/3 mr-2">Rank</div>
          <div class="text-xs font-semibold w-1/3">Club</div>
          <div class="text-xs font-semibold w-1/3 text-center">Stats</div>
        </div>
        <div class="flex my-4 text-main mx-2 border-b pb-5">
          <div class="text-xs font-semibold w-1/3 mr-2">1.</div>
          <div class="text-xs font-semibold w-1/3">Chelsea</div>
          <div class="text-xs font-semibold w-1/3 text-center">10</div>
        </div>
        <div class="flex my-4 text-main mx-2 border-b pb-5">
          <div class="text-xs font-semibold w-1/3 mr-2">2.</div>
          <div class="text-xs font-semibold w-1/3">Chelsea</div>
          <div class="text-xs font-semibold w-1/3 text-center">10</div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap my-2 md:my-10">
      <div class="w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
        <div class="bg-green h-1 rounded-t"></div>
        <div class="border-t border-l border-r">
          <p class="py-2 text-center font-semibold text-sm">General</p>
          <div
            class="border-t border-b p-2 flex justify-between"
            v-for="(item, index) in general"
            :key="index"
          >
            <span class="text-sm">{{item}}</span>
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="arrow-right"
              class="svg-inline--fa fa-arrow-right fa-w-14 w-2 h-4 lg:w-6 lg:w-4 lg:h-4 lg:ml-10"
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
      <div class="w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
        <div class="bg-green h-1 rounded-t"></div>
        <div class="border-t border-l border-r">
          <p class="py-2 text-center font-semibold text-sm">Attack</p>
          <div
            class="border-t border-b p-2 flex justify-between"
            v-for="(item, index) in attack"
            :key="index"
          >
            <span class="text-sm">{{item}}</span>
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="arrow-right"
              class="svg-inline--fa fa-arrow-right fa-w-14 w-2 h-4 lg:w-4 lg:h-4 lg:ml-10"
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
      <div class="w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
        <div class="bg-green h-1 rounded-t"></div>
        <div class="border-t border-l border-r">
          <p class="py-2 text-center font-semibold text-sm">Defence</p>
          <div
            class="border-t border-b p-2 flex justify-between"
            v-for="(item, index) in defence"
            :key="index"
          >
            <span class="text-sm">{{item}}</span>
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="arrow-right"
              class="svg-inline--fa fa-arrow-right fa-w-14 w-2 h-4 lg:w-4 lg:h-4 lg:ml-10"
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
      <div class="w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
        <div class="bg-green h-1 rounded-t"></div>
        <div class="border-t border-l border-r">
          <p class="py-2 text-center font-semibold text-sm">Goalkeeper</p>
          <div
            class="border-t border-b p-2 flex justify-between"
            v-for="(item, index) in goalkeeper"
            :key="index"
          >
            <span class="text-sm">{{item}}</span>
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="arrow-right"
              class="svg-inline--fa fa-arrow-right fa-w-14 w-2 h-4 lg:w-4 lg:h-4 lg:ml-10"
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
</template>

<script>
export default {};
</script>

<style>
</style>
