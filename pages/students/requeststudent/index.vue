<template>
  <div class="my-3">
    <b-card class="shadow">
      <div class="p-1">
        จัดการบริการ
        <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-1 />
      </div>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <div class="decorationtop"></div>
        <b-card-body></b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow">
      <div class="p-1">
        ข้อมูลส่วนตัว
        <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-2 />
      </div>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow">
      <div class="p-1">
        ข้อมูลร่างกาย
        <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-3 />
      </div>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow">
      <div class="p-1">
        วัคซีน
        <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-4 />
      </div>
      <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow">
      <div class="p-1">
        ประวัติการเจ็บป่วย
        <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-5 />
      </div>
      <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-container class="bv-example-row mb-3 w-25 p-3">
      <b-row cols="3">
        <b-col>
          <b-button>ย้อนกลับ</b-button>
        </b-col>
        <b-col>
          <b-button>ไม่อนุมัติ</b-button>
        </b-col>
        <b-col>
          <b-button>อนุมัติ</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Dataschool from "../../../components/Add/Dataschool";
export default {
  components: { Dataschool },
};
</script>