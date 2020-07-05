<script>
import { Doughnut, mixins } from "vue-chartjs";

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveData],
  data: () => ({
    options: {
      legend: {
        display: true
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  props: ["data"],
  mounted() {
    const chartLabels = this.data.map(item => item.provinsi);
    const totalPositif = this.data.map(item => item.kasusPosi);
    this.renderChart(
      {
        labels: chartLabels,
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            data: totalPositif
          }
        ]
      },
      this.options
    );
  }
};
</script>