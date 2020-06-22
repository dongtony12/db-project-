<template>
  <div class="detail">
    <h1>{{webtoon.webtoon_title}}</h1>
    <img v-bind:src="webtoon.poster" class="poster" />
    <section>
      <h2>웹툰정보</h2>
      <dl class="info">
        <dt>작가 :{{webtoon.pen_name}}</dt>
        <dt>연재처 :{{webtoon.platform_name}}</dt>
        <dt>링크 :{{webtoon.webtoon_link}}</dt>
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