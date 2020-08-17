<template>
  <div v-if="isExternalLink">
    <a :disabled="disabled" :href="url" :class="classList">
      <i :class="icon"></i>
      {{name}}
      <b-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</b-badge>
    </a>
  </div>
  <div v-else>
    <b-link
      :disabled="disabled"
      :exact="url==='/'"
      :to="url"
      :class="classList"
      active-class="active"
    >
      <b-row class="justify-content-center">
        <img :src="require(`../../static/images/${img}.png`)" :alt="img" />
        <!-- ดึงรูปจาก Foldername store -->
        <!-- <i :class="icon"></i> -->
      </b-row>
      <b-row class="justify-content-center mt-2">
        <h5>{{name}}</h5>
      </b-row>
      <b-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</b-badge>
    </b-link>
  </div>
</template>

<script>
export default {
  name: "sidebar-nav-link",
  props: {
    name: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    badge: {
      type: Object,
      default: () => {}
    },
    variant: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  methods: {},
  computed: {
    classList() {
      return ["nav-link", this.linkVariant, ...this.itemClasses];
    },
    linkVariant() {
      return this.variant ? `nav-link-${this.variant}` : "";
    },
    itemClasses() {
      return this.classes ? this.classes.split(" ") : [];
    },
    isExternalLink() {
      if (this.url.substring(0, 4) === "http") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
