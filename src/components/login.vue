<template>
    <div id="login">
      <h1>Login</h1>
        <p v-if='feedback' class='text-danger'>{{feedback}}</p>
        <div class="form-group">
            <input type="text" class="form-control form-control-sm" placeholder="Username" v-model="login.username">
        </div>
         <div class="form-group">
            <input type="password" class="form-control form-control-sm" placeholder="Password" v-model="login.password">
        </div>
        <button class="btn btn-primary btn-sm" v-on:click.prevent="userlogin">Login</button>                
    </div>
</template>
 
<script>
import axios from "axios";
import qs from "qs";

export default {
  data() {
    return {
      login: {
        username: "",
        password: ""
      },
      feedback: null
    };
  },
  created(){
    if(this.$route.path == '/login'){
      localStorage.clear();
    }
  },
  methods: {
    userlogin: function() {
      if (this.login.username != "" && this.login.password != "") {
        let self = this;
        axios
          .post(
            `http://localhost:9000/auth/login`,
            qs.stringify(this.login)
          )
          .then(function(response) {
            if (response.data.data) {
              console.log("response.data", response.data.data);
              let currentToken = "vuejak";
              const accessToken = response.data.data.access_token;
              localStorage.setItem("token", currentToken);
              localStorage.setItem("access_token", accessToken);
              localStorage.setItem("username", response.data.data.username);
              self.$router.push({
                name: "homeView"
              });
            } else {
              self.feedback = "Login Gagal !!!";
              self.login.username = "";
              self.login.password = "";              
            }
          })
          .catch(error => console.log(error));
      } else {
        this.feedback = "Username dan Password tidak boleh kosong !!!";
      }
    }
  }
};
</script>
 
<style scoped>
#login {
  margin: 500px;
  border: 1px solid #cccccc;
  background-color: #f8f9fa;
  margin: auto;
  margin-top: 200px;
  margin-left: 250px;
  padding: 20px;
}
</style> 