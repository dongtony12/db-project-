
<template>
  <form>
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
  </form>
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
            this.$router.push({ path: "login" }); // signup button 실행후 loginpage로 전환
          }
          if (res.data.success == false) {
            //sign up fail 이 안뜬다
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
