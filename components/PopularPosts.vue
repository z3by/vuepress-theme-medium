<template>
  <div
    class="popular-posts"
    v-if="popularPosts.length"
  >
    <h2>Popular Posts</h2>
    <hr>
    <ol class="list-unstyled">
      <li
        v-for="post in popularPosts"
        :key="post.key"
        class="mb-5 popular-list-item"
      >
        <router-link :to="post.path">
          <h3 class="text-dark h6">
            {{post.title}}
          </h3>
          <p class="text-secondary">{{post.frontmatter.description}}</p>
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