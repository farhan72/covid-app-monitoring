<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["dataLine"],
  data: () => ({
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      },
      legend: {
        display: true
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted() {
    const list = this.dataLine.filter(item => item.provinsi != "Indonesia");
    const chartLabels = list.map(item => item.provinsi);
    const totalPositif = list.map(item => item.kasusPosi);
    this.renderChart(
      {
        labels: chartLabels,
        datasets: [
          {
            label: "Kasus Positif",
            data: totalPositif,
            fill: true,
            borderColor: "#780707",
            backgroundColor: "rgba(120, 7, 7, 0.5)",
            borderWidth: 1
          }
        ]
      },
      this.options
    );
  }
};
</script>
