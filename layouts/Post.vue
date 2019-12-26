<template>
  <div id="vuperess-theme-blog__post-layout">
    <div class="vuepress-blog-theme-content mt-5">
      <div class="my-5">
        <h1 class="h1 my-3 font-weight-light font-serif">{{$page.title}}</h1>
      </div>
      <Content />
      <hr />
      <Comment />
    </div>
  </div>
</template>

<script>
import Toc from '@theme/components/Toc.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: {
    Toc,
    Comment,
  },
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.vuepress-blog-theme-content {
  @extend $wrapper;
  font-size: 16px;
  letter-spacing: 0px;
  color: #2c3e50;
  position: relative;

  p {
    font-family: 'Lora', serif;
    margin-top: 0.86em;
    font-size: 1.3rem;
  }

  li {
    font-family: 'Lora', serif;
  }

  .header-anchor {
    display: none;
  }

  h1:not(.h1), h2, h3 {
    margin-top: 3rem;
  }
}
</style>


