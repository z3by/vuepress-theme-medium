<template>
  <div
    id="base-list-layout"
    class="fill-height"
  >

    <div class="row my-5">
      <div class="col-md-12 col-lg-8">
        <div
          class="my-5"
          v-for="page in pages"
        >
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
                <small
                  v-if="page.frontmatter.date"
                  class="text-gray-light"
                >{{page.frontmatter.date}}</small>
              </div>
            </div>
            <div class="col-3">
              <img
                src="https://picsum.photos/120"
                :alt="page.title"
              >
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-12 col-lg-4 my-5">
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
    </div>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import { NavigationIcon, ClockIcon } from 'vue-feather-icons'

export default {
  components: { NavigationIcon, ClockIcon },
  computed: {

    currentTag () {
      if (this.$route.meta) {
        return this.$route.meta.id;
      }
    },

    pages () {
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
  }
}
</script>
