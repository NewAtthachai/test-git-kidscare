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
          <!-- <b-input-group> -->
          <b-form-input class="form-control h-100" placeholder="ค้นหาชื่อ-นามสกุล / ตำแหน่ง"></b-form-input>
          <b-input-group-append>
            <b-button variant="primary">
              <b-img src="~static/images/Group 3472.png" />
            </b-button>
          </b-input-group-append>
          <!-- </b-input-group> -->
        </div>
      </div>
    </b-card-body>
    <div class="decorationtop"></div>

    <!----------------------------------------------------------------------------------->
    <b-card-body class="mt-3 mb-3 p-3">
      <div class="form-row">
        <b-check></b-check>
        <div class="iuput-group col-md-2">ชื่อ-นามสกุล</div>
        <div class="input-group col-md-2">ครูดูแล</div>
        <div class="input-group col-md-2">ประเภท</div>
        <div class="input-group col-md-2">ยอดชำระ</div>
      </div>
    </b-card-body>
    <div class="decorationtop"></div>

    <!------------------------------------------------------------------------------------>

    <b-card class="shadow-sm mt-3 mb-3 p-4">
      <div class="form-row">
        <b-check></b-check>
        <div class="iuput-group col-md-2">ด.ญ.ฮยอนจิน เดวา</div>
        <div class="input-group col-md-2">กรองแก้ว รักสะอาด</div>
        <div class="input-group col-md-2">รายวัน</div>
        <div class="input-group col-md-2">ชำระแล้ว</div>

        <div class="input-group col-md-2">
          <b-img src="~/static/images/eye.png" />
          <b-link class="stretched-link" to="/teachers/viewteacher"></b-link>
        </div>
      </div>
    </b-card>
    <!------------------------------------------------------------------------------------>

    <b-card class="shadow-sm mt-3 mb-3 p-4">
      <div class="form-row">
        <b-check></b-check>
        <div class="iuput-group col-md-2">ด.ช.ฮยอนซอ อู</div>
        <div class="input-group col-md-2">กรองแก้ว รักสะอาด</div>
        <div class="input-group col-md-2">รายวัน</div>
        <div class="input-group col-md-2 text-danger">ค้างชำระ</div>
        <div class="input-group col-md-2">
          <b-img src="~/static/images/eye.png" />
        </div>
      </div>
    </b-card>
    <!------------------------------------------------------------------------------------>

    <b-card class="shadow-sm mt-3 mb-3 p-4">
      <div class="form-row">
        <b-check></b-check>
        <div class="iuput-group col-md-2">ด.ญ.แพรววา คงสวัสดิ์</div>
        <div class="input-group col-md-2">อดิศักดิ์ กรุงทอง</div>
        <div class="input-group col-md-2">รายเดือน</div>
        <div class="input-group col-md-2">ชำระแล้ว</div>
        <div class="input-group col-md-2">
          <b-img src="~/static/images/eye.png" />
        </div>
      </div>
    </b-card>
    <!------------------------------------------------------------------------------------>

    <b-card class="shadow-sm mt-3 mb-3 p-4">
      <div class="form-row">
        <b-check></b-check>
        <div class="iuput-group col-md-2">ด.ญ.น่านฟ้า ใจดี</div>
        <div class="input-group col-md-2">อดิศักดิ์ กรุงทอง</div>
        <div class="input-group col-md-2">รายเดือน</div>
        <div class="input-group col-md-2">ชำระแล้ว</div>
        <div class="input-group col-md-2">
          <b-img src="~/static/images/eye.png" />
        </div>
      </div>
    </b-card>
    <!------------------------------------------------------------------------------------>

    <b-card class="shadow-sm mt-3 mb-3 p-4">
      <div class="form-row">
        <b-check></b-check>
        <div class="iuput-group col-md-2">ด.ช.น่านน้ำ ใจดี</div>
        <div class="input-group col-md-2">ฟ้าใส สีคราม</div>
        <div class="input-group col-md-2">รายวัน</div>
        <div class="input-group col-md-2">ชำระแล้ว</div>
        <div class="input-group col-md-2">
          <b-img src="~/static/images/eye.png" />
        </div>
      </div>
    </b-card>
    <!------------------------------------------------------------------------------------>

    <div class="bar-center">
      <b-button-toolbar
        aria-label="Toolbar with button groups"
        key-nav
        class="justify-content-md-center"
      >
        <b-button class="shadow-sm p-2.5 m-1 bg-white rounded bar-in-btn">
          <img src="~/static/images/Group 3498.png" />
        </b-button>
        <b-button class="shadow-sm p-2.5 m-1 bg-white rounded bar-in-btn">
          <img src="~/static/images/Path 939.png" />
        </b-button>

        <b-button class="shadow-sm p-2.5 m-1 bg-white rounded bar-in-btn">1</b-button>

        <b-button class="shadow-sm p-2.5 m-1 bg-white rounded bar-in-btn">2</b-button>

        <b-button class="shadow-sm p-2.5 m-1 bg-white rounded bar-in-btn">
          <img src="~/static/images/Path 940.png" />
        </b-button>
        <b-button class="shadow-sm p-2.5 m-1 bg-white rounded bar-in-btn">
          <img src="~/static/images/Group 3499.png" />
        </b-button>
        <h5 class="m-3">แสดงจำนวน</h5>
        <b-button class="shadow-sm p-2.5 m-1 bg-white rounded bar-in-btn">
          5
          <img src="~/static/images/Path 941.png" />
        </b-button>
      </b-button-toolbar>
    </div>
    <!--------------------------------------------------------------------------------------------------------->
    <div>
      <b-modal
        id="bv-modal-example"
        size="xl"
        hide-header
        hide-footer
        ok-only
        centered
        no-stacking
        ref="modalExample"
      >
        <b-container>
          <div class="text-primary">
            <h4>ดูแลนักเรียน</h4>
          </div>
          <br />
          <div class="text-primary">ชื่อนามสกุล</div>
        </b-container>
        <div>
          <label class="w-100 m-0 p-2 position-relative searchBlock">
            <a class="labelSearchBtn"></a>
            <b-form-input class="rounded" placeholder="พิมพ์คำค้นหา" list="drug_list"></b-form-input>
          </label>
        </div>
        <div>
          <b-card-body id="customers" class="mt-3 mb-3 p-3">
            <div class="form-row">
              <b-check></b-check>
              <div class="iuput-group col-md-2 text-primary">ชื่อ-นามสกุล</div>
              <div class="input-group col-md-2 text-primary">ครูดูแล</div>
              <div class="input-group col-md-2 text-primary">ประเภท</div>
              <div class="input-group col-md-2 text-primary">ยอดชำระ</div>
            </div>
          </b-card-body>
          <hr class="new1" />

          <!------------------------------------------------------------------------------------>

          <b-card class="shadow-none mt-3 mb-3 p-4 bg-light">
            <div class="form-row">
              <b-check></b-check>
              <div class="iuput-group col-md-2">ด.ญ.ฮยอนจิน เดวา</div>
              <div class="input-group col-md-2">กรองแก้ว รักสะอาด</div>
              <div class="input-group col-md-2">รายวัน</div>
              <div class="input-group col-md-2">ชำระแล้ว</div>

              <div class="input-group col-md-2">
                <b-img src="~/static/images/eye.png" />
                <b-link class="stretched-link" to="/teachers/ViewTeacherScreen"></b-link>
              </div>
            </div>
          </b-card>
          <!------------------------------------------------------------------------------------>

          <b-card class="shadow-none mt-3 mb-3 p-4 bg-light">
            <div class="form-row">
              <b-check></b-check>
              <div class="iuput-group col-md-2">ด.ช.ฮยอนซอ อู</div>
              <div class="input-group col-md-2">กรองแก้ว รักสะอาด</div>
              <div class="input-group col-md-2">รายวัน</div>
              <div class="input-group col-md-2 text-danger">ค้างชำระ</div>
              <div class="input-group col-md-2">
                <b-img src="~/static/images/eye.png" />
                <b-link class="stretched-link" to="/teachers/ViewTeacherScreen"></b-link>
              </div>
            </div>
          </b-card>
          <!------------------------------------------------------------------------------------>

          <b-card class="shadow-none mt-3 mb-3 p-4 bg-light">
            <div class="form-row">
              <b-check></b-check>
              <div class="iuput-group col-md-2">ด.ญ.แพรววา คงสวัสดิ์</div>
              <div class="input-group col-md-2">อดิศักดิ์ กรุงทอง</div>
              <div class="input-group col-md-2">รายเดือน</div>
              <div class="input-group col-md-2">ชำระแล้ว</div>
              <div class="input-group col-md-2">
                <b-img src="~/static/images/eye.png" />
                <b-link class="stretched-link" to="/teachers/ViewTeacherScreen"></b-link>
              </div>
            </div>
          </b-card>
          <!------------------------------------------------------------------------------------>

          <b-card class="shadow-none mt-3 mb-3 p-4 bg-light">
            <div class="form-row">
              <b-check></b-check>
              <div class="iuput-group col-md-2">ด.ญ.น่านฟ้า ใจดี</div>
              <div class="input-group col-md-2">อดิศักดิ์ กรุงทอง</div>
              <div class="input-group col-md-2">รายเดือน</div>
              <div class="input-group col-md-2">ชำระแล้ว</div>
              <div class="input-group col-md-2">
                <b-img src="~/static/images/eye.png" />
                <b-link class="stretched-link" to="/teachers/ViewTeacherScreen"></b-link>
              </div>
            </div>
          </b-card>
          <!------------------------------------------------------------------------------------>

          <b-card class="shadow-none mt-3 mb-3 p-4 bg-light rounded">
            <div class="form-row">
              <b-check></b-check>
              <div class="iuput-group col-md-2">ด.ช.น่านน้ำ ใจดี</div>
              <div class="input-group col-md-2">ฟ้าใส สีคราม</div>
              <div class="input-group col-md-2">รายวัน</div>
              <div class="input-group col-md-2">ชำระแล้ว</div>
              <div class="input-group col-md-2">
                <b-img src="~/static/images/eye.png" />
                <b-link class="stretched-link" to="/teachers/ViewTeacherScreen"></b-link>
              </div>
            </div>
          </b-card>
        </div>
        <b-container class="bv-example-row">
          <b-row class="text-center">
            <b-col>
              <b-button variant="outline-primary ">ยกเลิก</b-button>
              <b-button
                variant="primary"
                class="btn-color-background"
                v-b-modal.modal-multi-3
              >บันทึก</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-modal>
      <b-modal id="modal-multi-3" size="sm" hide-header hide-footer ok-only centered>
        <b-container fluid class="text-center">
          <div class="text-primary">ทำรายการเรียนร้อย</div>
          <div class="ml-md-auto p-3">ได้เพิ่มนักเรียนไปยังครู "ฟ้าใส สีคราม" เรียบร้อยแล้วค่ะ</div>
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
// .searchBlock {
//   input {
//     padding-right: 30px;
//   }

// .labelPlusBtn {
//   width: 20px;
//   height: 20px;
//   background-image: url(/images/icon/icon-plus-circle@2x.png);
//   background-size: cover;
//   background-position: center center;
//   right: 31px;
//   top: 23%;
//   padding: 0 0 0;
//   position: absolute;
//   background-color: white;
//   cursor: pointer;
//   // z-index: 99;
// }
// }
// .card {
//   border: none;
// }
// .modal-content {

//     /* background-color: #fff; */

// }
</style>
