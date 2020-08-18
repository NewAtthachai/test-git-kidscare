<template>
  <div class="my-3">
    <b-card-body class="mt-3 mb-3">
      <div class="form-row">
        <div class="iuput-group col-md-6">
          <select
            class="form-control shadow-sm w-25 h-100"
            name="LeaveType"
            @change="onChange($event)"
          >
            <option :value="null">ทำรายการ</option>
            <option value="1">อนุมัติ</option>
            <option value="1">ไม่อนุมัติ</option>
          </select>
        </div>
        <div class="input-group col-md-4">
          <!-- <b-input-group> -->
          <b-form-input class="form-control h-100" placeholder="ค้นหาชื่อ-นามสกุล / สถานศึกษา "></b-form-input>
          <b-input-group-append>
            <b-button variant="primary">
              <b-img src="~static/images/Group 3472.png" />
            </b-button>
          </b-input-group-append>
          <!-- </b-input-group> -->
        </div>
      </div>
    </b-card-body>

    <div class="overflow-auto">
      <b-table
        class="mb-0 table-leave-line"
        thead-class="border"
        :tbody-tr-class="setTbodyTrClass"
        id="my-table"
        :items="entities"
        :fields="tableFields"
        :per-page="perPage"
        :busy="loading"
        :current-page="currentPage"
        head-variant="primary"
      >
        <template v-slot:head(show_details)="row">
          <b-form-checkbox v-model="row.detailsShowing"></b-form-checkbox>
        </template>

        <template v-slot:cell(show_details)="row">
          <b-form-checkbox v-model="row.detailsShowing"></b-form-checkbox>
        </template>

        <template v-slot:cell(image)="row">
          <b-img src="~static/images/eye.png" v-model="row.checkclick"></b-img>
          <!-- เวลาเปิดใช้งานมันจะไม่สามารถใช้ฟังชั่นอื่นได้-->
          <b-link class="stretched-link" to="/students/requeststudent"></b-link>
        </template>
      </b-table>
      <div class="mt-3">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          align="center"
        ></b-pagination>
      </div>
      <!-- <p>Current Page: {{ currentPage }}</p> -->
    </div>
    <!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <div>
      <b-modal
        id="bv-modal-example"
        size="sm"
        hide-header
        hide-footer
        ok-only
        centered
        no-stacking
        ref="modalExample"
      >
        <!-- <b-container> </b-container> -->
        <b-container fluid class="text-center">
          <div class="text-primary">ทำรายการเรียบร้อยแล้ว</div>
          <div class="ml-md-auto p-3">
            ได้แจ้งเตือนค่าเทอม "ด.ช.ฮยอนซอ อู"
            เรียบร้อยแล้วค่ะ
          </div>
          <div class="justify-content-md-center p-2">
            <b-button variant="primary" class="sign-in-btn w-100">ตกลงครู</b-button>
          </div>
        </b-container>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      //จำนวนคอลั้ม
      perPage: 5,
      currentPage: 5,
      entities: [
        {
          name: "ด.ญ.ฮยอนจิน  เดวา",
          school: "ฟ้าคิดส์เนอสเซอรี่ ",
          course: "รายวัน",
        },
        {
          name: "ด.ญ.ฮยอนจิน  เดวา",
          school: "ฟ้าคิดส์เนอสเซอรี่ ",
          course: "รายวัน",
        },
        {
          name: "ด.ญ.ฮยอนจิน  เดวา",
          school: "ฟ้าคิดส์เนอสเซอรี่ ",
          course: "รายวัน",
        },
      ],
      tableFields: [
        {
          show_details: "",
        },
        {
          key: "name",
          label: "ชื่อ-นามสกุล",
        },
        {
          key: "school",
          label: "สถานศึกษา",
        },

        {
          key: "course",
          label: "หลักสูตร",
        },

        { key: "image", label: " ", sortable: false },
      ],
    };
  },
  computed: {
    rows() {
      return this.entities.length;
    },
  },
  methods: {
    onChange($event) {
      console.log(event.target.value);
      this.$refs.modalExample.show();
    },
    getColumnStyle(field) {},
    setTbodyTrClass(item) {
      const classes = ["custom-border", "pt-4", "mt-5"];
      return classes;
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
