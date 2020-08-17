const LOGIN = "LOGIN";
const GETME_SUCCESS = "GETME_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";
const LOGOUT = "LOGOUT";

const deleteAllCookie = function() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

const auth = {
  namespaced: true,
  state: {
    loading: false,
    loaded: true,
    isLoggedIn: false,
    user: null
  },
  mutations: {
    [LOGIN](state) {
      state.loading = true;
      state.loaded = false;
    },
    [GETME_SUCCESS](state, payload) {
      state.user = payload;
      state.loaded = true;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [LOGIN_SUCCESS](state, payload) {
      state.user = payload.user;
      state.loaded = true;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [LOGIN_FAILED](state) {
      state.isLoggedIn = false;
      state.loading = false;
      state.loaded = true;
    },
    [LOGOUT](state) {
      state.loading = false;
      state.loaded = true;
      state.isLoggedIn = false;
      state.user = null;
    }
  },
  actions: {
    getMe({ commit }) {
      return this.$axios
        .get("api/v1/me")
        .then(response => {
          commit(GETME_SUCCESS, response.data);
        })
        .catch(error => {
          const code = parseInt(error.response && error.response.status);
          if (code == 404) {
            // window.location = "/login";
          }
        });
    },
    register({ commit }, { e_or_p, password, confirm_password }) {
      return this.$axios
        .post("api/v1/users", {
          e_or_p,
          password,
          confirm_password,
          role: 2,
          name: "test"
        })
        .then(response => {
          this.$router.replace({
            path: "/login"
          });
        });
    },
    login({ commit }, { e_or_p, password }) {
      return this.$axios
        .post("api/v1/guest/login", {
          e_or_p,
          password
        })
        .then(response => {
          commit(LOGIN_SUCCESS, response.data.user);
          this.$router.replace({
            path: "/"
          });
        });
    },
    loginFb({ commit }, { facebook_id, facebook_access_token }) {
      return this.$axios
        .post("api/v1/guest/login/facebook", {
          facebook_id,
          facebook_access_token
        })
        .then(response => {
          commit(LOGIN_SUCCESS, response.data.user);
          this.$router.replace({
            path: "/"
          });
        });
    },
    loginGg({ commit }, { google_id, google_access_token }) {
      return this.$axios
        .post("api/v1/guest/login/google", {
          google_id,
          google_access_token
        })
        .then(response => {
          commit(LOGIN_SUCCESS, response.data.user);
          this.$router.replace({
            path: "/"
          });
        });
    },
    logout({ commit }) {
      return this.$axios
        .post("/api/v1/me/logout", {
          refresh_token: window.localStorage.getItem("refresh_token")
        })
        .then(() => {
          commit(LOGOUT);
          deleteAllCookie();
          this.$router.replace({
            path: "/login"
          });
        });
    }
  }
};

export default auth;
