<template>
  <DoughnutChart :chartData="chartData" :options="options" />
</template>

<script>
import DoughnutChart from "../libraries/DoughnutChart";
export default {
  name: "Country",
  components: { DoughnutChart },
  data: () => ({
    chartData: {
      labels: ["Babol", "Cabanatuan", "Daegu", "Jerusalem"],
      datasets: [
        {
          borderWidth: 1,
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)"
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)"
          ],
          data: [1000, 500, 1500, 1000]
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      responsive: true,
      maintainAspectRatio: false
    }
  })
};
</script>