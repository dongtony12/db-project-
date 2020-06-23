
<template>
  <div class="input_row">
    <label for="id">아이디</label>
    <input type="text" id="userid" v-model="user.userid" />

    <div class="input_row">
      <label for="name">이름</label>
      <input type="text" id="name" v-model="user.name" />

      <div class="input_row">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="user.password" />
      </div>
      <div>
        <button v-on:click="signUp">가입하기</button>
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
        name: "",
        password: ""
      }
    };
  },
  methods: {
    signUp: function(event) {
      this.$http
        .post("/api/users/signup", {
          user: this.user
        })
        .then(res => {
          if (res.data.success == true) {
            alert(res.data.message);
            this.$router.push({ name: "login" }); // signup button 실행후 loginpage로 전환
          } else {
            /*if (res.data.success == false)*/
            alert(res.data.message);
          }
        })
        .catch(function(error) {
          alert("error");
        });
    }
  }
};
</script>
