<template>
  <div
    class="popular-posts"
    v-if="popularPosts.length"
  >
    <h2>Popular Posts</h2>
    <p class="text-secondary">What’s trending right now.</p>
    <hr>
    <ol class="list-unstyled">
      <li
        v-for="post in popularPosts"
        :key="post.key"
        class="my-3 popular-list-item"
      >
        <router-link :to="post.path">
          <h3 class="text-dark">
            {{post.title}}
          </h3>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
    name: 'popular-posts',

    props: ['popularPosts']
}
</script>

<style>
</style>