<template>
  <div class="input_row">
    <label for="userid">아이디</label>
    <input type="text" id="id" v-model="user.userid" />
    <div class="input_row">
      <label for="password">비밀번호</label>
      <input type="password" id="password" v-model="user.password" />
      <div>
        <button v-on:click="login">로그인</button>
        <a href="/signUp">가입하기</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        userid: "",
        password: ""
      }
    };
  },
  methods: {
    async login(event) {
      const res = await this.$http.post("/api/users/login", {
        user: this.user
      });

      if (res.data.success == true) {
        alert(res.data.message);
        this.$router.push({ name: "webtoonindexpage" });
      } else {
        alert(res.data.message);
      }
    }
    // login: function(event) {
    //   this.$http
    //     .post("/api/users/login", {
    //       user: this.user
    //     })
    //     .then(
    //       res => {
    //         //로그인 성공
    //         alert(res.data.message);
    //         this.$router.push({ name: "webtoonindexpage" });
    //       },
    //       err => {
    //         // error 를 보여줌
    //         alert("Login failed! please check your id or password");
    //       }
    //     )
    //     .catch(err => {
    //       alert(err);
    //     });
    // }
  }
};
</script>