<template>
  <header class="app-header navbar">
    <button
      class="navbar-toggler mobile-sidebar-toggler d-lg-none"
      type="button"
      @click="mobileSidebarToggle"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-link class="navbar-brand" to="/"></b-link>
    <b-navbar-nav class="navbar-nav-sub d-md-down-none">
      <!-- เป็นการแสดงชื่อ navbar ด้านบน -->
      <b-link
        v-for="active in links"
        v-bind:key="`${active.url}`"
        class="p-4 navbar-nav-sub-item"
        :exact="true"
        :to="active.url"
        active-class="active"
      >{{ active.name }}</b-link>
      <!-- <b-link
        class="p-4 navbar-nav-sub-item"
        to="/reports/school"
        active-class="active"
      >สถานรับเลี้ยงเด็ก</b-link>-->
    </b-navbar-nav>
    <!-- <button
      class="navbar-toggler sidebar-toggler d-md-down-none mr-auto"
      type="button"
      @click="sidebarToggle"
    >
      <span class="navbar-toggler-icon"></span>
    </button>-->
    <b-navbar-nav class="ml-auto mx-4">
      <b-nav-item-dropdown v-if="user" right class="nav-popup">
        <template slot="button-content">
          <span class="pl-2 d-inline-block text-truncate profile-text">
            <strong>{{ `${user.name}` }}</strong>
          </span>
        </template>
        <!-- <b-dropdown-item @click="logout">ออกจากระบบ</b-dropdown-item> -->
        <b-dropdown-item @click="logout">ออกจากระบบ</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </header>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["navItems"],
  name: "c-header",
  mounted: function () {
    const path = $nuxt.$route.name;
    if (path) {
      this.currentActive = `/${path}`;
      this.navItems.forEach((item) => {
        if (item.url === `/${path}`) this.links = item.sub;
      });
    }
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-hidden");
    },
    sidebarMinimize(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-minimized");
    },
    mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-mobile-show");
    },
    asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("aside-menu-hidden");
    },
  },
  data: function () {
    return {
      notifications: [],
      links: [],
    };
  },
  watch: {
    //ส่วนที่แสดง ข้อความบน header
    "$nuxt.$route.name": function () {
      const path = $nuxt.$route.name;
      if (path) {
        this.currentActive = `/${path}`;
        // console.log(path)
        this.navItems.forEach((item) => {
          if (item.url === `/${path}`) this.links = item.sub;
        });
      }
    },
  },
};
</script>

<style lang="scss">
.navbar-nav-sub {
  margin-left: 100px;
  .navbar-nav-sub-item {
    height: 70px;
    min-width: 180px;
    text-align: center;
    color: #06a8f0;
    margin-left: 15px;
    text-decoration: none;
    &.active {
      height: 70px;
      color: #06a8f0;
      text-decoration: none;
      border-bottom: 3px solid #06a8f0;
    }

    &:hover {
      height: 70px;
      color: #06a8f0;
      text-decoration: none;
      border-bottom: 3px solid #06a8f0;
    }
  }
}
.user-profile-icon {
  border-radius: 50%;
  width: 42px;
  height: 42px;
}
.nav-popup {
  list-style-type: none;
}
.ic-notification {
  font-size: x-large;
}
.notification-box {
  .scroll-menu {
    height: 400px;
    min-width: 300px;
    overflow-y: scroll;
  }
  .scroll-menu::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: #f5f5f5;
  }
  .scroll-menu::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  .scroll-menu::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
    background-color: #555;
  }
}
.notification-item-unread {
  background-color: rgba(32, 168, 216, 0.1);
}
</style>
