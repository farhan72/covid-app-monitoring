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
                  :src="
                    'https://www.countryflags.io/' +
                      summary.CountryCode +
                      '/flat/64.png'
                  "
                >
                  <img
                    :src="
                      'https://www.countryflags.io/' +
                        summary.CountryCode +
                        '/flat/64.png'
                    "
                    :alt="summary.Slug"
                  />
                  <div slot="placeholder">
                    Loading....
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
                  <li>
                    Konfirmasi Terbaru: {{ formatNumber(summary.NewConfirmed) }}
                  </li>
                  <li>Meninggal: {{ formatNumber(summary.NewDeaths) }}</li>
                  <li>
                    Total Meninggal: {{ formatNumber(summary.TotalDeaths) }}
                  </li>
                  <li>Sembuh: {{ formatNumber(summary.NewRecovered) }}</li>
                  <li>
                    Total Sembuh: {{ formatNumber(summary.TotalRecovered) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </span>
        <span v-if="isLoad">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by2">
                <div id="image-item"></div>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <div class="content-text"></div>
                </div>
              </div>
              <div class="content">
                <div class="content-text"></div>
                <div class="content-text"></div>
                <div class="content-text"></div>
              </div>
            </div>
          </div>
        </span>
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
    global: Object,
    isLoad: true,
  }),
  methods: {
    async getCountryAffected() {
      this.isLoad = true;
      for (let i = 0; i <= 11; i++) {
        this.summaryList.push(i);
      }
      await axios
        .get(process.env.VUE_APP_COVID + `/summary`)
        .then((response) => {
          const data = response.data;
          this.summaryList = data.Countries;
          this.global = data.Global;
        })
        .catch((e) => console.log(e))
        .finally(() => (this.isLoad = false));
    },
    formatNumber(num) {
      let number = null;
      if (num >= 0) {
        number = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
      return number;
    },
  },
  mounted() {
    this.getCountryAffected();
    const time = 1 * 24 * 60 * 60 * 1000;
    setInterval(() => this.getCountryAffected(), time);
  },
};
</script>

<style scoped>
#image-item {
  width: 100%;
  height: 100px;
  animation: shimmer 1s infinite ease-in-out;
  -webkit-animation: shimmer 1s infinite ease-in-out;
}
.content-text {
  width: 100%;
  height: 10px;
  animation: shimmer 1s infinite ease-in-out;
  -webkit-animation: shimmer 1s infinite ease-in-out;
}
</style>
