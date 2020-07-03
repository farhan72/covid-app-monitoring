<template>
  <div class="main">
    <Header />
    <router-view></router-view>
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
    Footer,
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
    },
  },
  created: function() {
    this.hamburgerMenu();
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  .footer {
    margin-top: auto;
  }
}
</style>
