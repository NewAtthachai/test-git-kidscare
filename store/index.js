import Vuex from "vuex";
import auth from "./modules/auth";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth: auth
    },
    actions: {
      async nuxtServerInit({ commit }, { app, redirect, route }) {
        try {
          const user = await app.$axios.$get("api/users");
          commit("auth/GETME_SUCCESS", user);
          if (route.path == "/login") {
            redirect("/");
          }
        } catch (error) {}
      }
    }
  });
};

export default createStore;
