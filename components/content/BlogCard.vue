<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="max-w-lg mx-auto">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <NuxtLink :href="'blog/'+blog.slug">
              <img class="rounded-t-lg" :src="blog.head.image" :alt="blog.head.image">
          </NuxtLink>
          <div class="p-5">
              <NuxtLink :href="'blog/'+blog.slug">
                  <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{{ blog.navigation.title }}</h5>
              </NuxtLink>
              <p class="font-normal text-gray-700 mb-3"> {{ blog.head.description }}</p>
              <NuxtLink class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" 
                  :href="'blog/'+blog.slug">
                  Read more
              </NuxtLink>
          </div>
      </div>
  </div>
</template>

<script setup>
defineProps({
  blog: Object
})
</script>