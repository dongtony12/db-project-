
<template>
  <div class="input_row">
    <label for="id">아이디</label>
    <input type="text" id="id" v-model="user.userid" />

    <div class="input_row">
      <label for="password">패스워드</label>
      <input type="password" id="password" v-model="user.password" />

      <div class="input_row">
        <label for="age">나이</label>
        <input type="text" id="age" v-model="user.age" />
        <div>
          <button click="signUp">가입하기</button>
        </div>
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
        password: "",
        age: ""
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
            this.$router.push("/webtoon"); // signup button 실행후 mainpage로 전환
          }
          if (res.data.success == false) {
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
