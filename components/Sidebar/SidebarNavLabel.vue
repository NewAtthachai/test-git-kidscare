<template>
  <SidebarNavItem :classes="classList.navItem">
    <b-link :disabled="disabled" :class="classList.navLink" :to="url">
      <i :class="classList.icon"></i>
      {{name}}
    </b-link>
  </SidebarNavItem>
</template>

<script>
import SidebarNavItem from "./SidebarNavItem";
export default {
  name: "sidebar-nav-label",
  components: {
    SidebarNavItem
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: "#"
    },
    icon: {
      type: String,
      default: "fa fa-circle"
    },
    classes: {
      type: String,
      default: ""
    },
    label: {
      type: Object,
      required: true,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      const classes = {
        navItem: ["hidden-cn", ...this.getClasses(this.classes)].join(" "),
        navLink: "nav-label",
        icon: [
          this.icon ? this.icon : "fa fa-circle",
          this.label.variant ? `text-${this.label.variant}` : "",
          this.label.class ? this.label.class : ""
        ].join(" ")
      };
      return classes;
    }
  },
  methods: {
    getClasses(classes) {
      return classes ? classes.split(" ") : [];
    }
  }
};
</script>
