<template>
  <div class="mt-5 lg:mt-10 flex flex-wrap">
    <div class="w-full lg:w-1/2 py-2 lg:py-0 sm:w-1/2 md:w-full">
      <div class="mx-2 sm:mx-1 md:mx-0 lg:mx-2 rounded shadow overflow-hidden">
        <p class="bg-green py-2 text-center text-white font-semibold">Match</p>
        <div class="border-b px-5 sm:px-2 md:px-4 text-xs flex justify-between py-2 bg-white">
          <div class="flex items-center sm:pr-2">
            <span>Anti Drugs FC</span>
            <img
              class="h-8 w-8 lg:h-8 lg:w-8 ml-2"
              :src="`https://slpl-server.herokuapp.com/image/ANTI DRUGS TEAM.png`"
            >
          </div>
          <div class="flex items-center">
            <div class="bg-main p-1 text-white">
              <span class="mx-2 sm:mx-1">VS</span>
            </div>
          </div>
          <div class="flex sm:pl-2 items-center">
            <img
              class="h-8 w-8 lg:h-8 lg:w-8 mr-2"
              :src="`https://slpl-server.herokuapp.com/image/Bo Rangers team.png`"
            >
            <span>Bo Rangers FC</span>
          </div>
        </div>
        <div class="px-5 py-2 rounded-b bg-white">
          <button class="text-sm bg-main w-full py-2 text-white rounded">View All</button>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 pt-2 lg:py-0 sm:w-1/2 md:w-full">
      <div class="mx-2 sm:mx-1 md:mx-0 lg:mx-2 rounded rounded overflow-hidden shadow">
        <p class="bg-green py-2 text-center text-white font-semibold">Table</p>
        <div class="bg-white text-main text-xs lg:text-xs flex py-2 px-1 font-semibold">
          <div class="w-12 text-center">Pos</div>
          <div class="w-1/2">Club</div>
          <div class="w-12 text-center">Pl</div>
          <div class="w-12 text-center">GD</div>
          <div class="w-12 text-center">Pts</div>
        </div>
        <div class="bg-white text-main text-xs lg:text-sm items-center flex py-1 px-1 border-b">
          <div class="w-12 text-center">1</div>
          <div class="w-1/2 items-center flex">
            <img class="w-6 h-6" :src="`https://slpl-server.herokuapp.com/image/Bo Rangers team.png`" alt>
            <p class="ml-5 lg:ml-2">jhklk</p>
          </div>
          <div class="w-12 text-center">1</div>
          <div class="w-12 text-center">4</div>
          <div class="w-12 text-center">2</div>
        </div>
        <div class="bg-white text-main text-xs lg:text-sm items-center flex py-1 px-1 border-b">
          <div class="w-12 text-center">1</div>
          <div class="w-1/2 items-center flex">
            <img class="w-6 h-6" :src="`https://slpl-server.herokuapp.com/image/Bo Rangers team.png`" alt>
            <p class="ml-5 lg:ml-2">jhklk</p>
          </div>
          <div class="w-12 text-center">1</div>
          <div class="w-12 text-center">4</div>
          <div class="w-12 text-center">2</div>
        </div>
        <div class="px-5 py-2 rounded-b bg-white">
          <button class="text-sm bg-main w-full py-2 text-white rounded">View All</button>
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
