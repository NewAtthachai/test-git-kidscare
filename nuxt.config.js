export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Kidscare",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap"
      }
    ],
    script: [
      {
        src: "https://apis.google.com/js/platform.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#06a8f0", failedColor: "#06a8f0" },
  /*
   ** Global CSS
   */
  css: ["~/assets/bootstrap/style.scss", "~/assets/fontawesome/css/all.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/axios", { src: "~plugins/fb-sdk.js", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/toast"
  ],
  axios: {
    baseURL: process.env.API_URL || "https://dev.kidscare.plus",
    browserBaseURL: "",
    credentials: true,
    proxy: process.env.NODE_ENV !== "production",
    redirectError: {
      404: "/404"
    }
  },
  proxy: {
    "/api/": {
      // target: "http://localhost:8000/"
      target: "https://dev.kidscare.plus"
    }
  },
  toast: {
    position: "top-right",
    duration: 2000
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    base: "/admin/"
  }
};
