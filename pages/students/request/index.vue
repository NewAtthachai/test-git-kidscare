<template>
  <div class="mt-3">
    <div class="form-row">
      <div class="iuput-group col-md-6">
        <select class="form-control shadow-sm w-25 mb-3 h-75">
          <option value="1">ทำรายการ</option>
          <option value="2">ดูแลนักเรียน</option>
        </select>
      </div>
      <div class="input-group col-md-4">
        <b-input
          type="input"
          placeholder="ค้นหา"
          class="form-control border border-light w-25 mb-3 h-75"
        />
      </div>
      <div class="input-group col-md-2">
        <button type="submit" class="btn btn-primary w-75 mb-3 h-75">ค้าหา</button>
      </div>
    </div>

    <b-card>
      <b-card-body>ข้อมูลครู</b-card-body>
      <div class="decoration-top"></div>
      <div class="decoration-botton"></div>
      <table id="customers">
        <tr>
          <td>
            <b-radio type="radio" name="exampleRadios" id="exampleRadios1" value="option1"></b-radio>
          </td>
          <td>ชื่อ-นามสกุล</td>
          <td>เบอร์โทรศัพท์</td>
          <td>สถานศึกษา</td>
          <td>ตำแหน่ง</td>
          <td>จำนวนนักเรียน/คน</td>
        </tr>
        <div class="decoration-mid"></div>

        <tr>
          <td>
            <b-radio type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></b-radio>
          </td>

          <td>โทมัส แอนดรูโน่</td>
          <td>081-234-5678</td>
          <td>ฟ้าคิดส์เนอสเซอรี่</td>
          <td>ภาษาต่างประเทศ</td>
          <td>0</td>
          <td>
            <b-img src="/images/eye.png"></b-img>
          </td>
        </tr>
        <div class="decoration-mid"></div>

        <tr>
          <td>
            <b-radio type="radio" name="exampleRadios" id="exampleRadios3" value="option3"></b-radio>
          </td>

          <td>ฟ้าใส สีคราม</td>
          <td>088-765-4321</td>
          <td>ฟ้าคิดส์เนอสเซอรี่</td>
          <td>ครูประจำชั้น</td>
          <td>5</td>
          <td>
            <b-img src="/images/eye.png"></b-img>
          </td>
        </tr>
      </table>
    </b-card>

    <!------------------------>
    <div>
      <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>

      <b-modal id="bv-modal-example" size="xl" hide-footer ok-only no-stacking>
        <template v-slot:modal-title>ข้อมูลครู</template>

        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <table id="customers">
          <tr>
            <td>
              <b-radio type="radio" name="exampleRadios" id="exampleRadios1" value="option1"></b-radio>
            </td>
            <td>ชื่อ-นามสกุล</td>
            <td>เบอร์โทรศัพท์</td>
            <td>สถานศึกษา</td>
            <td>ตำแหน่ง</td>
            <td>จำนวนนักเรียน/คน</td>
          </tr>
          <div class="decoration-mid"></div>

          <tr>
            <td>
              <b-radio type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></b-radio>
            </td>

            <td>โทมัส แอนดรูโน่</td>
            <td>081-234-5678</td>
            <td>ฟ้าคิดส์เนอสเซอรี่</td>
            <td>ภาษาต่างประเทศ</td>
            <td>0</td>
            <td>
              <b-img src="/images/eye.png"></b-img>
            </td>
          </tr>
          <div class="decoration-mid"></div>

          <tr>
            <td>
              <b-radio type="radio" name="exampleRadios" id="exampleRadios3" value="option3"></b-radio>
            </td>

            <td>ฟ้าใส สีคราม</td>
            <td>088-765-4321</td>
            <td>ฟ้าคิดส์เนอสเซอรี่</td>
            <td>ครูประจำชั้น</td>
            <td>5</td>
            <td>
              <b-img src="/images/eye.png"></b-img>
            </td>
          </tr>
        </table>
        <div class="row justify-content-end">
          <b-button v-b-modal.modal-multi-3>Open Third Modal</b-button>
        </div>
      </b-modal>
      <b-modal id="modal-multi-3" size="sm" title="ทำรายการเรียบร้อยแล้ว" ok-only>
        <p class="d-block text-center">ได้เพิ่มนักเรียนไปยังครู "ฟ้าใส สีคราม" เรียบร้อยแล้วค่ะ</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {},
  data() {
    return {
      aspects: [
        { text: "ทำรายการ_1" },
        { text: "ทำรายการ_2" },
        { text: "ทำรายการ_3" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// .modal-header {
//   // border-bottom: 0px;
// }
// .modal-footer {
//   // border-top: 0px;
// }
// .decoration-top {
//   height: 1px; /* ความสูงของเส้น */
//   width: 100%; /* ความหนาของเส้น */
//   background-color: #e0e3da; /* สีของเส้น */
//   /* // margin: 50%; */
//   /* // display: block; */
// }
// .decoration-botton {
//   height: 4px; /* ความสูงของเส้น */
//   width: 100%; /* ความหนาของเส้น */

//   background-color: #f9f9f9;
// }
// .decoration-mid {
//   height: 1px; /* ความสูงของเส้น */
//   width: 100%; /* ความหนาของเส้น */

//   background-color: #f7f9fb;
// }
// #customers {
//   /* // font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; */
//   /* // border-collapse: collapse; */
//   width: 100%;
// }

// #customers td {
//   padding: 10px;
// }

// #customers th {
//   padding-top: 12px;
//   padding-bottom: 12px;
//   /* // background-color: #4caf50; */
//   color: black;
// }
</style>
