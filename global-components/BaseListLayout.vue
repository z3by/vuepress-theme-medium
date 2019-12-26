<template>
  <div
    id="base-list-layout"
    class="fill-height"
  >
    <div class="row my-5 justify-content-between">
      <div class="col-md-12 col-lg-7">
        <post-item
          v-for="page in pages"
          :key="page.key"
          :page="page"
        ></post-item>
      </div>
      <div class="col-md-12 col-lg-4">
        <popular-posts :popularPosts="popularPosts"></popular-posts>
      </div>
    </div>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import PopularPosts from '../components/PopularPosts'
import PostItem from '../components/PostItem'

export default {
  components: { PopularPosts, PostItem },

  computed: {

    pages () {
      if (this.$route.meta.pid == 'tag') {
        const pages = this.$tag.list.filter(tag => {
          return tag.path === this.$route.path
        })[0].pages
        return pages
      }

      return this.$site.pages.filter(page => {
        return !page.path.startsWith('/tag/') &&
          !page.path.startsWith('/page/') &&
          page.path !== '/'
      })

    },

    popularPosts () {
      return this.$site.pages.filter(page => page.frontmatter.popular).slice(0, 9)
    }
  },

  methods: {
    resovlePostDate (date) {
      return new Date(date.replace(/\-/g, "/").trim()).toDateString()
    }
  },

}
</script>
