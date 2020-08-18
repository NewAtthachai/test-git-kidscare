<template>
  <div class="my-3">
    <b-card class="shadow card-body-test">
      <div class="p-1">
        จัดการบริการ
        <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-1 />
      </div>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <br />
        <div class="decorationtop"></div>
        <b-card-body>
          <b-container fluid>
            <b-row>
              <b-col>
                <b-button>View slip</b-button>
              </b-col>
            </b-row>
          </b-container>
          <b-container class="bv-example-row mb-3">
            <b-row cols-sm="2" cols-lg="2" cols-md="2" cols-xl="2" cols="2">
              <b-col>
                <b-form-group
                  label-cols="4"
                  label-cols-lg="4"
                  label-size="lg"
                  label="วันที่แจ้งเตือน"
                  label-for="input-lg"
                >
                  <b-form-input class="input-custom p-2 w-75" id="input-lg" size="lg"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label-cols="4"
                  label-cols-lg="4"
                  label-size="lg"
                  label="กำหนดชำระ"
                  label-for="input-lg"
                >
                  <b-form-input class="input-custom p-2 w-75" id="input-lg" size="lg"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label-cols="4"
                  label-cols-lg="4"
                  label-size="lg"
                  label="หลักสูตร"
                  label-for="input-lg"
                >
                  <b-form-input class="input-custom p-2 w-75" id="input-lg" size="lg"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
          <b-container fluid class="bv-example-row">
            <b-row>
              <b-col md="4">
                <b-button>แจ้งเตือนค่าใช้จ่ายแรกเข้า</b-button>
                <b-button>แจ้งเตือนค่าเทอม</b-button>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="4" offset-md="3">
                <b-button>ย้อนกลับ</b-button>
                <b-button>ยกเลิกบริการ</b-button>
                <b-button>ชำระแล้ว</b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow">
      <div class="p-1">
        ข้อมูลส่วนตัว
        <b-img src="~/static/images/Group1659.png" />
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
        <b-img src="~/static/images/Group1659.png" />
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
        <b-img src="~/static/images/Group1659.png" />
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
        <b-img src="~/static/images/Group1659.png" />
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

    <b-card class="shadow">
      <div class="p-1">
        สมุดรายงานประจำตัวนักเรียน
        <b-img src="~/static/images/Group1659.png" />
        <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-6 />
      </div>
      <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
import Dataschool from "../../../components/Add/Dataschool";
export default {
  components: { Dataschool },
};
</script>