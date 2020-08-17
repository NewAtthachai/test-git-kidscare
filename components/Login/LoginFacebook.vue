<template>
  <b-button
    class="facebook-button shadow mt-4"
    variant="light"
    @click="logInWithFacebook"
  >
    <img src="~/static/images/facebook.png" class="facebook-logo ml-4 mr-2" />
    <span class="ml-2">เข้าสู่ระบบผ่าน Facebook</span>
  </b-button>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "facebookLogin",
  methods: {
    ...mapActions("auth", ["loginFb"]),
    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      window.FB.login(response => {
        if (response.authResponse) {
          this.loginFb({
            facebook_id: response.authResponse.userID,
            facebook_access_token: response.authResponse.accessToken
          }).catch(error => {
            if (error.response.status === 504)
              alert("Cannot connect to the server.");
            else alert(error.response.data.message);
          });
        } else {
          alert("User cancelled login or did not fully authorize.");
        }
      });
      return false;
    },
    async initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "309175730443171", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: "v7.0"
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }
};
</script>
<style lang="scss">
.facebook-button {
  background-color: white;
  border: none;
  height: 50px;
}
.facebook-logo {
  height: 30px;
}
.facebook-button:hover,
.facebook-button:active {
  background-color: white;
  border: none;
}
</style>
