const vue_fb = {};
vue_fb.install = function install(Vue, options) {
  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

  window.fbAsyncInit = function onSDKInit() {
    FB.init(options);
    FB.AppEvents.logPageView();
    Vue.FB = FB;
    window.dispatchEvent(new Event("fb-sdk-ready"));
  };
  Vue.FB = undefined;
};

import Vue from "vue";

Vue.use(vue_fb, {
  appId: "289147909087149",
  autoLogAppEvents: true,
  xfbml: true,
  cookie: true,
  version: "v7.0"
});

export default ({ app }, inject) => {
  inject("fb", vue_fb);
};
