<template>
      <div class="w-[200px] transition-all bg-indigo-700 text-white py-4 px-2">
     
            <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/20 font">
              <span class="mr-2 text-gray-300">
                <HomeIcon class="w-5"/>
              </span>
              <span class="text-xs font-light">
                Dashboard
              </span>
            </router-link>
            
            <router-link :to="{name: 'app.products'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/20 font">
              <span class="mr-2 text-gray-300">
                <Bars3Icon class="w-5"/>
              </span>
              <span class="text-xs font-light">
                Products
              </span>
            </router-link>
            
            <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/20 font">
              <span class="mr-2 text-gray-300">
                <UsersIcon class="w-5"/>
              </span>
              <span class="text-xs font-light">
                Users
              </span>
            </router-link>
            
            <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/20 font">
              <span class="mr-2 text-gray-300">
                <ChartBarIcon class="w-5"/>
              </span>
              <span class="text-xs font-light">
                Reports
              </span>
            </router-link>
      </div>
</template>

<script setup>
   import {HomeIcon, UsersIcon, Bars3Icon, ChartBarIcon} from '@heroicons/vue/24/outline'
</script>

<style scoped>
   
</style>