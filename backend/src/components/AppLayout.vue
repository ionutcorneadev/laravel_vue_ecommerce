<template>
    <div class=" min-h-full bg-gray-200 flex">
      <!--Sidebar-->
      <Sidebar :class="{'-ml-[200px]' : !sidebarOpened}" />

       <!--Sidebar-->
      <div class="flex-1">
        <!-- <header class="h-8 shadow bg-white">
          Header
        </header> -->
        <Navbar @toggle-sidebar="toggleSidebar"></Navbar>

       <!--Content-->
        <main class="p-6">
          <router-view></router-view>
        </main>
        <!--Content-->
        
      </div>
    </div>
</template>

<script setup>
    import {ref, onMounted, onUnmounted} from 'vue'
    import Sidebar from "./Sidebar.vue";
    import Navbar from "./Navbar.vue";

    const {title} = defineProps({
        title: String
    })

    const sidebarOpened = ref(true);

    function toggleSidebar(){
      sidebarOpened.value = !sidebarOpened.value
    }

    onMounted(() => {
      handleSidebarOpened();
      window.addEventListener('resize', handleSidebarOpened)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleSidebarOpened)
    })

    function handleSidebarOpened(){
      sidebarOpened.value = window.outerWidth > 768;
    }
    // const emit = defineEmits(['submit'])
</script>

<style scoped>
    
</style>