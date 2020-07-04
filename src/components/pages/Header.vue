<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="../../assets/covid-icon.svg" height="28" />
          <b class="ml-2">COVID19</b>
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end" v-if="routes">
          <router-link
            v-for="(route, index) in routes"
            :key="index"
            :to="route.path"
            class="navbar-item"
            :active-class="$route.name == route.name ? 'is-active' : ''"
          >{{route.name}}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    routes: []
  }),
  methods: {
    getAllRoute() {
      if (this.$router.options.routes) {
        this.$router.options.routes.forEach(item => {
          this.routes.push({ path: item.path, name: item.name });
        });
      }
    }
  },
  created() {
    this.getAllRoute();
  }
};
</script>