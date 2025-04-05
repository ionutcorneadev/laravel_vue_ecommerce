<template>
      <GuestLayout title="Sign in to your account">

            <form class="space-y-6" method="POST" @submit.prevent="login">
              <div v-if="errorMsg" class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded">
                {{ errorMsg }}
                <span @click="errorMsg =''" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors
                cursor-pointer hover:bg-black/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </span>
              </div>
              <div>
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div class="mt-2">
                  <input type="email" name="email" id="email" autocomplete="email" required="" v-model="user.email"
                         class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                         placeholder="Email Address" />
                </div>
              </div>
      
              <div>
                <div class="mt-2">
                  <input type="password" name="password" id="password" autocomplete="current-password" required="" v-model="user.password"
                         class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                         placeholder="Password" />
                </div>

                <div class="flex items-center justify-between">
                  <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                  <div class="text-sm">
                    <router-link :to="{name: 'requestPassword'}" href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</router-link>
                  </div>
                </div>
              </div>
      
              <div>
                <button type="submit"
                :disabled="loading"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        :class="{
                          'cursor-not-allowed': loading,
                          'hover:bg-indigo-500': loading
                        }"
                >
                <svg v-if="loading" class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                        <!-- <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span> -->
                        Sign in
                </button>
              </div>
            </form>
      </GuestLayout>
  </template>
  

<style scoped>

</style>

<script setup>
  import {ref} from 'vue'
  import { LockClosedIcon } from '@heroicons/vue/24/solid';
  import GuestLayout from '../components/GuestLayout.vue';
  import { useRouter } from 'vue-router';
  import store from "../store";
  // import router from "../router";

  const router = useRouter()

  let loading = ref(false);
  let errorMsg = ref("");

  const user = {
    email: '',
    password: '',
    // remember: false
  }

  function login() {
    loading.value = true;
    store.dispatch('login', user)
    .then(() => {
      loading.value = false;
      router.push({name: 'app.dashboard'})
    })
    .catch(({response}) => {
      loading.value = false;
      errorMsg.value = response.data.message;
      // console.log(err);
    }) 
  }

</script>