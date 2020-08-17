<template>
  <div class="app container">
    <b-row class="h-75 mx-auto my-auto" align-v="center">
      <b-col cols="12">
        <h1 v-if="error.statusCode === 404">Page not found.</h1>
        <h1 v-else-if="error.statusCode === 401">{{ error.message }}</h1>
        <h1 v-else>An error occurred</h1>
        <nuxt-link to="/" v-if="error.statusCode === 404"
          >Go to home page</nuxt-link
        >
        <nuxt-link to="/login" v-if="error.statusCode === 401"
          >Go to login page</nuxt-link
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "full", // you can set a custom layout for the error page
  mounted() {}
};
</script>
