<template>
  <section class="section">
    <div class="container">
      <line-chart :chartdata="chartData" :options="options" />
    </div>
  </section>
</template>

<script>
import LineChart from "../libraries/LineChart";
export default {
  name: "World",
  components: { LineChart },
  data: () => ({
    chartData: {
      labels: ["January"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [20],
        },
        {
          label: "Data Two",
          backgroundColor: "#dedede",
          data: [15],
        },
        {
          label: "Data Three",
          backgroundColor: "#f87979",
          data: [40],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  async mounted() {
    this.chartData;
  },
};
</script>
