<template>
  <div
    class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden"
  >
    <div class="app">
      <AppHeader :navItems="navItems" />
      <div class="app-body">
        <Sidebar :navItems="navItems" />
        <main class="main">
          <div class="container-fluid">
            <nuxt />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import nav from "../_nav";
import { Header as AppHeader, Sidebar, Footer } from "~/components"; //ดึงชุดคำสั่งมาจาก Index.js ของ component

export default {
  loading: true,
  name: "default",
  components: { AppHeader, Sidebar, Footer },
  mounted: function() {
    if (!this.user) {
      this.getMe();
    }
  },
  head() {
    return {
      bodyAttrs: {
        class:
          "app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden"
      }
    };
  },
  methods: {
    ...mapActions("auth", ["getMe"])
  },
  computed: {
    ...mapState("auth", ["user"]),
    navItems: function() {
      return nav.items.filter(i => {
        if (i.ignoreRoles) {
          return this.user && !i.ignoreRoles.includes(this.user.role.value);
        }
        return true;
      });
    },
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched;
    }
  },
  data() {
    return {};
  }
};
</script>

<style></style>
