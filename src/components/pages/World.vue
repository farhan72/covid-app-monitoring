<template>
  <line-chart :chartdata="chartData" :options="options" />
</template>

<script>
import LineChart from "../libraries/LineChart";
export default {
  name: "World",
  components: { LineChart },
  data: () => ({
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Data One",
          borderColor: "rgba(248, 121, 121, 0.5)",
          backgroundColor: "transparent",
          data: [300, 700, 450, 750, 450]
        },
        {
          label: "Data Two",
          borderColor: "rgba(227, 152, 95, 0.5)",
          backgroundColor: "transparent",
          data: [600, 550, 750, 250, 300]
        },
        {
          label: "Data Three",
          borderColor: "rgba(95, 172, 227, 0.5)",
          backgroundColor: "transparent",
          data: [40, 60, 80, 100, 250]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted() {
    this.chartData;
  }
};
</script>
