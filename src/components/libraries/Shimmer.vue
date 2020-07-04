<template>
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
        <ul class="shimmer-ul">
          <li class="content-text"></li>
          <li class="content-text"></li>
          <li class="content-text"></li>
          <li class="content-text"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shimmer"
};
</script>

<style>
#image-item {
  width: 100%;
  height: 200px;
  animation: shimmer 1s infinite ease-in-out;
  -webkit-animation: shimmer 1s infinite ease-in-out;
}
.shimmer-ul {
  margin: 0 !important;
  padding: 0;
}
.content-text {
  width: 100%;
  padding: 8px;
  list-style: none;
  animation: shimmer 1s infinite ease-in-out;
  -webkit-animation: shimmer 1s infinite ease-in-out;
}
</style>