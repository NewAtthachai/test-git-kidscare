<template>
  <div class="my-3">
    <b-card-body class="mt-3 mb-3">
      <div class="form-row">
        <div class="iuput-group col-md-6">
          <select
            class="form-control shadow-sm w-25 mb-3 h-75"
            name="LeaveType"
            @change="onChange($event)"
            v-model="key"
          >
            <option :value="null">ทำรายการ</option>
            <option value="1">ดูแลนักเรียน</option>
          </select>
        </div>
        <div class="input-group col-md-4">
          <b-input-group>
            <b-form-input type="number" min="0.00"></b-form-input>

            <b-input-group-append>
              <b-input-group-text>
                <b-icon icon="x" />
              </b-input-group-text>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
    </b-card-body>
  </div>
</template>

<script>
export default {
  data() {
    key: "";
    return {};
  },

  methods: {
    onChange($event) {
      console.log(event.target.value);
      this.$refs.modalExample.show();
    },
  },
};
</script>

<style lang="scss" scoped>
.searchBlock {
  input {
    padding-right: 30px;
  }
  .labelSearchBtn {
    width: 20px;
    height: 20px;
    background-image: url(~static/images/icon_search@2x.png);
    //https://via.placeholder.com/150
    background-size: cover;
    background-position: center center;
    right: 8px;
    top: 24%;
    padding: 0 0 0;
    position: absolute;
    background-color: white;
    cursor: pointer;
    z-index: 99;
  }
  .labelPlusBtn {
    width: 20px;
    height: 20px;
    background-image: url(/images/icon/icon-plus-circle@2x.png);
    background-size: cover;
    background-position: center center;
    right: 31px;
    top: 23%;
    padding: 0 0 0;
    position: absolute;
    background-color: white;
    cursor: pointer;
    // z-index: 99;
  }
}
.card {
  border: none;
}
// .modal-content {

//     /* background-color: #fff; */

// }
</style>
