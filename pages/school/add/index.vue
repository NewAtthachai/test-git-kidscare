<template>
  <div class="my-3">
    <b-card class="shadow">
      <div class="p-4">
        ข้อมูลสถานรับเล้ยงเด็ก
        <b-img src="~/static/images/Group1659.png" />
        <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-1 />
      </div>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text>
            <Dataschool />
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow p-4">
      ที่อยู่
      <b-img src="~/static/images/Group1659.png" />
      <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-2 />
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text>
            <b-container class="bv-example-row bv-example-row-flex-cols">
              <b-row>
                <b-col align-self="baseline">
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>

                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>
                </b-col>
                <div class="vl d-md-down-none"></div>
                <b-col align-self="stretch">
                  <b-img right src="~/static/images/Group 3106.png" />
                  <b-button>เลือกรูปภาพ</b-button>
                  <h5 class="text-info">ขนาดไฟล์: สูงสุด 1 MB ไฟล์ที่รองรับ: .JPEG, .PNG</h5>
                </b-col>
              </b-row>
            </b-container>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow p-4">
      การรับนักเรียน
      <b-img src="~/static/images/Group1659.png" />
      <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-3 />
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text>
            <b-container class="bv-example-row bv-example-row-flex-cols">
              <b-row>
                <b-col align-self="baseline">
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>

                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>
                </b-col>
                <div class="vl d-md-down-none"></div>
                <b-col align-self="stretch">
                  <b-img right src="~/static/images/Group 3106.png" />
                  <b-button>เลือกรูปภาพ</b-button>
                  <h5 class="text-info">ขนาดไฟล์: สูงสุด 1 MB ไฟล์ที่รองรับ: .JPEG, .PNG</h5>
                </b-col>
              </b-row>
            </b-container>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow p-4">
      ประเภทการให้บริการ
      <b-img src="~/static/images/Group1659.png" />
      <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-4 />
      <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text>
            <b-container class="bv-example-row bv-example-row-flex-cols">
              <b-row>
                <b-col align-self="baseline">
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>

                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label-size="lg"
                    label="ประเภท/สังกัด"
                    label-for="input-lg"
                  >
                    <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
                    <b-img right src="~/static/images/Union25.png" type="button" />
                  </b-form-group>
                </b-col>
                <div class="vl d-md-down-none"></div>
                <b-col align-self="stretch">
                  <b-img right src="~/static/images/Group 3106.png" />
                  <b-button>เลือกรูปภาพ</b-button>
                  <h5 class="text-info">ขนาดไฟล์: สูงสุด 1 MB ไฟล์ที่รองรับ: .JPEG, .PNG</h5>
                </b-col>
              </b-row>
            </b-container>
          </b-card-text>
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