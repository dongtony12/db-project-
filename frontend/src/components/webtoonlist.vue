<template>
  <div>
    <div v-for="(webtoon, index) in webtoons" :key="index" class="webtoon-wrap">
      <h2>ranking. {{index + 1}}</h2>
      <dl>
        <dt>제목</dt>
        <dd>{{webtoon.webtoon_title}}</dd>
        <dt>추천수</dt>
        <dd>{{webtoon.like}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webtoons: []
    };
  },
  created() {
    this.$http.post("/api/webtoon/webtoonlist").then(response => {
      this.webtoons = response.data;
    });
  }
};
</script>