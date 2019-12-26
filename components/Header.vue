<template>
  <header>
    <nav class="navbar py-3 d-flex navbar-light border-0 container">
      <router-link
        class="navbar-brand font-serif font-weight-bold"
        to="/"
      >{{$site.title}}
      </router-link>

      <SearchBox />
    </nav>

    <nav class="navbar navbar-light border-0 container x-overflow-scroll">
      <ul class="navbar-nav mx-auto d-flex flex-row">
        <li
          class="text-uppercase mx-2"
          v-for="tag in $tag.list"
          :key="tag.name"
        >
          <router-link
            class="nav-link text-nowrap "
            :to="tag.path"
          >
            {{tag.name}}
          </router-link>

        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import SearchBox from './SearchBox'

export default {
  components: { SearchBox },
}
</script>

<style lang="stylus" scoped>
.navbar {
  @media (max-width: $MQNarrow) {
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>
