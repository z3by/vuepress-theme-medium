<template>
  <div class="mb-5">
    <router-link
      class="text-dark row"
      :to="page.path"
    >
      <div class="col-8">
        <h2>
          {{ page.title }}
        </h2>

        <div class="text-secondary">
          <p>
            {{ page.frontmatter.summary || page.summary }}
          </p>

          <div class="text-gray-light">
            <small
              v-if="page.frontmatter.date"
              class="text-gray-light"
            >{{new Date(page.frontmatter.date).toString().slice(4, 15)}}</small>
            <small class="ml-3">{{page.readingTime.text}}</small>
          </div>
        </div>
      </div>
      <div class="col-3">
        <img
          :src="page.frontmatter.image"
          :alt="page.title"
          class="w-100"
        >
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'post-item',

  props: ['page']
}
</script>

<style>
</style>