<script lang="ts" setup>
const links = [
    { name: 'Home', link: '/', },
    { name: 'Schedule', link: '/schedule' },
    { name: 'Workouts', link: '/workout' }
]
</script>

<template>
  <div class="bg-gray-900 pt-10" >
    <span v-for="link in links" class="px-2">
      <NuxtLink :to="link.link">
        <span class="text-white">
          {{  link.name  }}
        </span>
      </NuxtLink>
    </span>


  <div class="h-screen bg-black">
      <div class="text-white container mx-auto">
        <slot />

      </div>
    </div>
  </div>

</template>

<style scoped></style>
