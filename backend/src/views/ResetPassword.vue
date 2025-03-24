<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    -->
    <!-- <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Set New Password</h2>
      </div> -->
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> 
        <GuestLayout title="Set New Password">
          <form class="mt-8 space-y-6" action="#" method="POST">
            <div>
              <label for="new-password" class="block text-sm/6 font-medium text-gray-900">New Password</label>
              <div class="mt-2">
                <input id="new-password" type="password" name="password" required="" placeholder="New Password" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
    
            <div>
              <div class="flex items-center justify-between">
                <label for="password-repeat" class="block text-sm/6 font-medium text-gray-900">Repeat Password</label>
              </div>
              <div class="mt-2">
                <input id="password-repeat" type="password-repeat" name="password_repeat" required="" placeholder="Password Repeat" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div class="text-sm">
                  <router-link :to="{name: 'requestPassword'}" href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Go back to Login</router-link>
            </div>
    
            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
          </form>
        </GuestLayout>
       </div>
    <!--</div> -->
  </template>
  

<!-- <script setup>
  import {LockClosedIcon} from '@heroicons/vue/solid'
</script> -->