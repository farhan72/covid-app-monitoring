<template>
  <div>
    <div class="columns is-multiline">
      <div
        class="column is-one-quarter-desktop is-half-tablet"
        v-for="summary in summaryList"
        :key="summary.CountryCode"
      >
        <div class="card">
          <div v-if="!isLoad">
            <div class="card-image">
              <figure class="image is-4by2">
                <img
                  :src="'https://www.countryflags.io/'+summary.CountryCode+'/flat/64.png'"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title is-4">{{summary.Country}}</p>
                </div>
              </div>

              <div class="content">
                <ul>
                  <li>Total Terkonfirmasi: {{formatNumber(summary.TotalConfirmed)}}</li>
                  <li>Konfirmasi Terbaru: {{formatNumber(summary.NewConfirmed)}}</li>
                  <li>Meninggal: {{formatNumber(summary.NewDeaths)}}</li>
                  <li>Total Meninggal: {{formatNumber(summary.TotalDeaths)}}</li>
                  <li>Sembuh: {{formatNumber(summary.NewRecovered)}}</li>
                  <li>Total Sembuh: {{formatNumber(summary.TotalRecovered)}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "World",
  data: () => ({
    summaryList: [],
    isLoad: false
  }),
  methods: {
    async getCountryAffected() {
      this.isLoad = true;
      await axios
        .get(process.env.VUE_APP_COVID + `/summary`)
        .then(response => {
          this.isLoad = false;
          this.summaryList = response.data.Countries;
        })
        .catch(e => {
          this.isLoad = false;
          console.log(e);
        });
    },
    formatNumber(num) {
      let number = null;
      if (num >= 0) {
        number = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
      return number;
    }
  },
  mounted() {
    this.getCountryAffected();
  }
};
</script>