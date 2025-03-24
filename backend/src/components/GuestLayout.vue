<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">{{title}}</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <!-- <form class="space-y-6" action="#" method="POST"> -->
            <slot></slot>
        <!-- </form> -->
      </div>
    </div>
</template>

<script setup>
    const {title} = defineProps({
        title: String
    })

    // const emit = defineEmits(['submit'])

</script>

<style scoped>
    
</style>