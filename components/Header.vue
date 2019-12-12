<template>
  <header>

    <nav class="navbar navbar-expand-lg py-4 navbar-light border-0 container">
      <router-link
        class="navbar-brand font-serif font-weight-bold"
        to="/"
      >{{$site.title}}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="navbar-nav ml-auto align-items-center search-wrapper overflow-hidden"
        :class="{focused: searchExpanded}"
      >
        <button
          class="btn shadow-none"
          @click="SearchInputExpand"
        >
          <ThemifyIcon
            icon="search"
            class="search-input__icon"
          />
        </button>
        <input
          type="text"
          class="form-control border-0 shadow-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          ref="searchInput"
          @blur="searchExpanded = !searchExpanded"
        >
      </div>

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
import SearchBox from '@SearchBox'
import ThemifyIcon from 'vue-themify-icons/ThemifyIcon'

export default {
  data () {
    return {
      searchExpanded: false
    }
  },
  components: { SearchBox, ThemifyIcon },
  methods: {
    SearchInputExpand () {
      this.searchExpanded = true
      this.$refs['searchInput'].focus();
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-wrapper {
  width: 2rem;
  transition: all 0.2s ease;
}

.search-wrapper.focused {
  width: 20rem;
}
</style>
