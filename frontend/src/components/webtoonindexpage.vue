<template>
  <div class="wrap">
    <h1>웹툰목록</h1>
    <ul class="webtoons">
      <li v-for="webtoon in webtoons" class="item" v-bind:key="webtoon">
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
      </li>
    </ul>
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