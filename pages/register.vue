<template>
  <div class="app flex-row">
    <div class="container">
      <div>
        <b-img class="login-logo mx-auto d-block mt-5" src="../static/images/kidscare.png"></b-img>
      </div>
      <div class="text-center mt-4">
        <span>
          มีบัญชีอยู่แล้วต้องการ
          <b-link to="/login">เข้าสู่ระบบ</b-link>
        </span>
      </div>
      <b-row class="h-75" align-h="around" align-v="center">
        <b-col lg="4" class="my-auto">
          <b-form class="mt-3" @submit="onSubmit">
            <b-form-group id="input-group-1" label="อีเมล หรือ หมายเลขโทรศัพท์" label-for="input-1">
              <b-form-input
                id="input-1"
                class="login-input"
                v-model="username"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="รหัสผ่าน" label-for="input-2">
              <b-form-input
                id="input-2"
                class="login-input"
                v-model="password"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="ยืนยันรหัสผ่าน" label-for="input-2">
              <b-form-input
                id="input-2"
                class="login-input"
                v-model="confirmPassword"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-alert variant="danger" :show="error != ''">{{ error }}</b-alert>
            <div class="d-flex justify-content-center">
              <b-button type="submit" variant="primary" class="mt-3 sign-in-btn">สมัครสมาชิก</b-button>
            </div>
          </b-form>
        </b-col>
        <b-col lg="1" class="d-flex justify-content-center">
          <div class="vl d-md-down-none"></div>
        </b-col>
        <b-col lg="4" class="my-auto p-3">
          <b-row class="d-flex flex-column justify-content-start px-3">
            <google />
            <facebook class="my-1" />
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Facebook from "../components/Login/LoginFacebook";
import Google from "../components/Login/LoginGoogle";

export default {
  name: "Register",
  layout: "full",
  components: { Facebook, Google },
  data: function () {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  },
  mounted() {},
  methods: {
    ...mapActions("auth", ["register"]),
    onSubmit: function (evt) {
      evt.preventDefault();
      // localStorage.setItem("user", 1);
      // window.location.href = "/";
      this.register({
        e_or_p: this.username,
        password: this.password,
        confirm_password: this.confirmPassword,
      }).catch((error) => {
        this.error = error.response.data.message;
      });
    },
  },
};
</script>
<style >
</style>
