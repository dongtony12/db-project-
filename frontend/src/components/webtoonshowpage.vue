<template>
  <div>
    <h1>상세 내용</h1>
    {{webtoon}}
  </div>
</template>

<script>
export default {
  created: function() {
    var id = this.$route.params.id;
    this.$http.get(`/api/webtoon/${id}`).then(response => {
      this.webtoon = response.data;
    });
  },
  data: function() {
    return {
      webtoon: {}
    };
  }
};
</script>