<template>
  <div>
    <div class="columns is-multiline mt-2 has-text-centered">
      <div class="column">
        <div class="notification is-primary">
          <h3 class="title">Jumlah Kasus</h3>
          <div class="subtitle">{{formatNumber(dataIndonesia.jumlahKasus)}} Jiwa</div>
        </div>
      </div>
      <div class="column">
        <div class="notification is-warning">
          <h3 class="title">Dalam Perawatan</h3>
          <div class="subtitle">{{formatNumber(dataIndonesia.perawatan)}} Jiwa</div>
        </div>
      </div>
      <div class="column">
        <div class="notification is-success">
          <h3 class="title">Sembuh</h3>
          <div class="subtitle">{{formatNumber(dataIndonesia.sembuh)}} Jiwa</div>
        </div>
      </div>
      <div class="column">
        <div class="notification is-danger">
          <h3 class="title">Meninggal</h3>
          <div class="subtitle">{{formatNumber(dataIndonesia.meninggal)}} Jiwa</div>
        </div>
      </div>
    </div>
    <div class="hero">
      <div class="hero-body">
        <div class="container" v-if="dataPerProvinsi.data">
          <line-chart :dataLine="dataPerProvinsi.data"></line-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "../libraries/LineChart";
import axios from "axios";

export default {
  name: "Indonesia",
  components: { LineChart },
  data: () => ({
    dataIndonesia: [],
    dataPerProvinsi: []
  }),
  methods: {
    async getDataIndonesia() {
      await axios
        .get(process.env.VUE_APP_API_COVID_IND)
        .then(response => (this.dataIndonesia = response.data))
        .catch(e => console.log(e));
    },
    getDataPerProvinsi() {
      axios
        .get(process.env.VUE_APP_API_COVID_IND + "/provinsi")
        .then(response => (this.dataPerProvinsi = response.data))
        .catch(e => console.log(e));
    },
    formatNumber(num) {
      let number = null;
      if (num >= 0) {
        number = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
      return number;
    },
    loadDataFromAPI() {
      this.getDataIndonesia();
      this.getDataPerProvinsi();
    }
  },
  created() {
    this.loadDataFromAPI();
    const time = 1 * 24 * 60 * 60 * 1000;
    setInterval(() => this.loadDataFromAPI(), time);
  }
};
</script>
