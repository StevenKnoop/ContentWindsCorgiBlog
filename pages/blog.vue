<script setup>
  const articles = await queryContent('/blog').find()
</script>

<template>
  <div>
    <NuxtLayout name="full-width">
    <h1>Corgi Blog Posts</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <BlogCard :blog="article" />
      </li>
    </ul>
  </NuxtLayout>
 </div>
</template>