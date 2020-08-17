<template>
  <b-button id="customBtn" class="google-button shadow" variant="light">
    <img src="~/static/images/google.png" class="google-logo ml-2" />
    <span class="ml-3 text-left">เข้าสู่ระบบผ่าน Google</span>
  </b-button>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "googleLogin",
  mounted() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "135630724678-p0tvbr4lipkkrfrmchc725r9mhn86cka.apps.googleusercontent.com",
      });
      this.attachSignin(document.getElementById("customBtn"));
    });
  },
  data() {
    return {
      auth2: null,
    };
  },
  methods: {
    ...mapActions("auth", ["loginGg"]),
    attachSignin(element) {
      this.auth2.attachClickHandler(
        element,
        {},
        (googleUser) => {
          this.loginGg({
            google_id: googleUser.Ot.OU,
            google_access_token: googleUser.getAuthResponse().id_token,
          }).catch((error) => {
            if (error.response.status === 504)
              alert("Cannot connect to the server.");
            else alert(error.response.data.message);
          });
        },
        (error) => {
          console.log(JSON.stringify(error, undefined, 2));
        }
      );
    },
  },
};
</script>
<style lang="scss">
.google-logo {
  height: 30px;
}
.google-button {
  background-color: white;
  border: none;
  height: 50px;
}
.google-button:hover,
.google-button:active {
  background-color: white;
  border: none;
}
</style>
