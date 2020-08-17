<template>
  <div class="my-3">
    <b-card class="shadow p-3">
      <b-row class="topnav">
        <div class="col-md-auto">
          <b-link to="../nursery/nursery" href="#">ฟ้าคิดส์เนอสเซอรี่</b-link>
        </div>
        <div class="col-md-auto">
          <b-link to="../nursery/teachers" href="#">ข้อมูลครู</b-link>
        </div>
        <div class="col-md-auto">
          <b-link to="../nursery/student" href="#">ข้อมูลนักเรียน</b-link>
        </div>
      </b-row>
    </b-card>
    <b-card-body class="mt-3 mb-3">
      <div class="form-row">
        <div class="iuput-group col-md-6">
          <select class="form-control border border-light w-25 mb-3 h-75"></select>
        </div>
        <div class="input-group col-md-4">
          <b-input
            type="input"
            placeholder="ค้นหาชื่อ-นามสกุล / ครูดูแล"
            class="form-control border border-light w-25 mb-3 h-75"
          />
        </div>
        <div class="input-group col-md-2">
          <button type="submit" class="btn btn-primary w-75 mb-3 h-75">ค้าหา</button>
        </div>
      </div>
    </b-card-body>
    <div class="decoration-top"></div>
    <div class="decoration-botton"></div>
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
    <div class="decoration-top"></div>
    <div class="decoration-botton"></div>
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

    <div class="sss">
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
  </div>
</template>

<script>
export default {
  mounted: function () {},
  methods: {},
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
    };
  },
};
</script>

<style>
</style>
