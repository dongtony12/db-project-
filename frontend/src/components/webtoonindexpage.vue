<template>
  <div class="webtoons">
    <h1>웹툰 목록</h1>
    <div v-for="webtoon in webtoons" class="webtoons" v-bind:key="webtoon">
      <img v-bind:src="webtoon.poster" class="poster" />
      <div>
        <strong></strong>,
        <i></i>
        <router-link :to="{ name: 'webtoonshowpage', params: { id: webtoon.id }}">더보기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get("/api/webtoon").then(response => {
      this.webtoons = response.data;
    });
  },
  data() {
    return {
      webtoons: []
    };
  }
};
</script>