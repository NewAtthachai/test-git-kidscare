<template>
  <div>
    <h2>อาหารที่ชอบ</h2>
    <input type="text" name="food" @input="changeFood" />
  </div>
</template>

<script>
export default {
  methods: {
    changeFood: function(event) {
      // console.log(event.target.value);
      this.$store.commit("setFood", event.target.value);
    }
  }
};
</script>

<style>
</style>