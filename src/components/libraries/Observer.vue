<template>
  <div class="observer-item"></div>
</template>

<script>
export default {
  name: "observer",
  data: () => ({
    observer: null
  }),
  methods: {
    makeObserver() {
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          this.$emit("intersect");
        }
      });
      this.observer.observe(this.$el);
    }
  },
  mounted() {
    this.makeObserver();
  }
};
</script>

<style scoped>
.observer-item {
  height: 1px;
}
</style>