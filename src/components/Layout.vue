<template>
  <div class="main">
    <Header />
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
      <button @click="scrollToTop" class="button is-dark is-rounded" id="scroll-up">
        <i class="fas fa-arrow-up" aria-hidden="true"></i>
      </button>
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
    },
    scrollToTop() {
      $("html, body").animate({ scrollTop: 0 }, 300);
    },
    toggleButtonScroll() {
      if (window.scrollY > 60) {
        $("#scroll-up").show();
      } else {
        $("#scroll-up").hide();
      }
    }
  },
  mounted: function() {
    $("#scroll-up").hide();
    window.addEventListener("scroll", this.toggleButtonScroll);
    this.hamburgerMenu();
  }
};
</script>

<style lang="scss">
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/utilities/mixins";

.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  .footer {
    margin-top: auto;
  }
}

#scroll-up {
  position: fixed;
  right: 10px;
  bottom: 20rem;
  width: 4rem;
  height: 4rem;
  animation: fade 0.5s linear forwards;
  -webkit-animation: fade 0.5s linear forwards;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
