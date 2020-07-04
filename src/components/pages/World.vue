<template>
  <div>
    <!-- Search -->
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="email" placeholder="Search" />
      <span class="icon is-small is-right">
        <i class="fas fa-search"></i>
      </span>
    </div>
    <!--  -->
    <div class="columns is-multiline mt-4">
      <div
        class="column is-one-quarter-desktop is-half-tablet"
        v-for="(summary, index) in summaryList"
        :key="index"
      >
        <span v-if="!isLoad">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by2">
                <clazy-load
                  :src="'http://www.geognos.com/api/en/countries/flag/'+summary.CountryCode+'.png'"
                >
                  <img
                    :src="'http://www.geognos.com/api/en/countries/flag/'+summary.CountryCode+'.png'"
                    :alt="summary.Slug"
                  />
                  <div slot="placeholder">
                    <div id="image-item"></div>
                  </div>
                </clazy-load>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title is-4">{{ summary.Country }}</p>
                </div>
              </div>

              <div class="content">
                <ul>
                  <li>
                    Total Terkonfirmasi:
                    {{ formatNumber(summary.TotalConfirmed) }}
                  </li>
                  <li>Konfirmasi Terbaru: {{ formatNumber(summary.NewConfirmed) }}</li>
                  <li>Meninggal: {{ formatNumber(summary.NewDeaths) }}</li>
                  <li>Total Meninggal: {{ formatNumber(summary.TotalDeaths) }}</li>
                  <li>Sembuh: {{ formatNumber(summary.NewRecovered) }}</li>
                  <li>Total Sembuh: {{ formatNumber(summary.TotalRecovered) }}</li>
                </ul>
              </div>
            </div>
          </div>
        </span>
        <span v-if="isLoad">
          <Shimmer />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Shimmer from "../libraries/Shimmer";

export default {
  name: "World",
  components: { Shimmer },
  data: () => ({
    summaryList: [],
    global: Object,
    isLoad: true
  }),
  methods: {
    getCountryAffected() {
      this.setDefaultList();
      this.fetchAPI();
    },
    formatNumber(num) {
      let number = null;
      if (num >= 0) {
        number = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
      return number;
    },
    setDefaultList() {
      for (let i = 0; i <= 11; i++) {
        this.summaryList.push(i);
      }
      return this.summaryList;
    },
    async fetchAPI() {
      this.isLoad = true;
      await axios
        .get(process.env.VUE_APP_COVID + `/summary`)
        .then(response => {
          const data = response.data;
          this.summaryList = data.Countries;
          this.global = data.Global;
        })
        .catch(e => console.log(e))
        .finally(() => (this.isLoad = false));
    }
  },
  mounted() {
    this.getCountryAffected();
    const time = 1 * 24 * 60 * 60 * 1000;
    setInterval(() => this.getCountryAffected(), time);
  }
};
</script>
