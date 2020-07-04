<template>
  <div class="main">
    <Header />
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import $ from "jquery";
import Header from "../components/pages/Header";
import Footer from "../components/pages/Footer";
export default {
  name: "Layout",
  components: {
    Header,
    Footer
  },
  methods: {
    hamburgerMenu() {
      $(document).ready(function() {
        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");
        });
      });
    }
  },
  created: function() {
    this.hamburgerMenu();
  }
};
</script>

<style lang="scss">
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/utilities/mixins";

@media (min-width: 768px) {
  .chart {
    transform: translateY(30%);
  }
}

.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  .footer {
    margin-top: auto;
  }
}
</style>
