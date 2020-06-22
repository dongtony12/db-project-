<style>
.cell {display:inline-block;width:25%;}

</style>
<template>
  <div class="wrap">
    <h1>웹툰목록</h1>
    <div>
    <div class="webtoons">
      <div class="row">
      <div v-for="webtoon in webtoons" class="cell" v-bind:key="webtoon">
        <router-link :to="{ name: 'webtoonshowpage', params: { id: webtoon.id }}">
          <img v-bind:src="webtoon.poster" class="poster" />
        </router-link>
        <div class="detail">
          <strong class="tit">{{webtoon.webtoon_title}}</strong>
          <router-link
            :to="{ name: 'webtoonshowpage', params: { id: webtoon.id }}"
            class="link"
          >자세히보기</router-link>
        </div>
      </div>
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