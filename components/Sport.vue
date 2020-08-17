<template>
  <div>
    <h2>กีฬาที่ชอบ</h2>
    <input type="text" name="sport" @input="changeSport" value />
  </div>
</template>

<script>
export default {
  methods: {
    changeSport: function(event) {
      // console.log(event.target.value);
      this.$store.commit("setSport", event.target.value);
    }
  }
};
</script>

<style>
</style>