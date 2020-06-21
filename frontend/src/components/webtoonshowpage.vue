<template>
  <div class="detail">
    <h1>{{webtoon.webtoon_title}}</h1>
    <img v-bind:src="webtoon.poster" class="poster" />
    <section>
      <h2>웹툰정보</h2>
      <dl class="info">
        <dt>작가 :</dt>
        <dd>{{webtoon.pen_name}}</dd>
        <dt>연재처 :</dt>
        <dd>{{webtoon.platform_name}}</dd>
        <dt>링크 :</dt>
        <dd>{{webtoon.webtoon_link}}</dd>
      </dl>
    </section>
    <router-link :to="{ name: 'webtoonindexpage', params: { id: webtoon.id }}" class="link">돌아가기</router-link>
  </div>
</template>

<script>
export default {
  created: function() {
    var id = this.$route.params.id;
    this.$http.get(`/api/webtoon/${id}`).then(response => {
      this.webtoon = response.data[0];
    });
  },
  data: function() {
    return {
      webtoon: {}
    };
  }
};
</script>