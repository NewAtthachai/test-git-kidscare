<template>
  <div class="my-3">
    <b-container>
      <b-button>test</b-button>
      <b-button>test</b-button>
      <b-button>test</b-button>
    </b-container>
    <b-row>
      <b-button>test</b-button>
      <b-button>test</b-button>
      <b-button>test</b-button>
    </b-row>
    <div class="container">
      <div class="row">
        <b-button>test</b-button>
        <b-button>test</b-button>
        <b-button>test</b-button>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <b-button>test</b-button>
        <b-button>test</b-button>
        <b-button>test</b-button>
      </div>
    </div>
    <!------------------------------------------------------------------------>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row>
        <b-col align-self="baseline">
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="ประเภท/สังกัด"
            label-for="input-lg"
          >
            <b-form-input
              class="login-input p-2 w-75"
              id="input-lg"
              size="lg"
              placeholder="โปรดเลือกประเภท/สังกัด"
            ></b-form-input>

            <b-img right src="~/static/images/Union25.png" type="button" />
          </b-form-group>

          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="ผู้รับใบอนุญาต"
            label-for="input-lg"
          >
            <b-row>
              <b-radio
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              >นิติบุคคล</b-radio>
              <b-radio
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              >บุคคลธรรมดา</b-radio>
              <b-radio type="radio" name="exampleRadios" id="exampleRadios3" value="option3">อื่นๆ</b-radio>
            </b-row>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="ชื่อ"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="ชื่อโรงเรียน"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="ใบอนุญาติเลขที่"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="ออกให้โดย สำนัก"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="เมื่อวันที่"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="โทรศัพท์"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="โทรสาร"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="มือถือ"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="ไอดีไลน์"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="อีเมล"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="เว็ปไซต์"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="8"
            label-size="lg"
            label="ชื่อผู้รับใบอนุญาตดำเนินการ (ผู้บริหาร)"
            label-for="input-lg"
          ></b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="คำนำหน้า"
            label-for="input-lg"
          >
            <b-row>
              <b-radio
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              >นิติบุคคล</b-radio>
              <b-radio
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              >บุคคลธรรมดา</b-radio>
              <b-radio type="radio" name="exampleRadios" id="exampleRadios3" value="option3">อื่นๆ</b-radio>
            </b-row>
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="4"
            label-size="lg"
            label="ชื่อสกุล (ภาษา)"
            label-for="input-lg"
          >
            <b-form-input class="login-input" id="input-lg" size="lg"></b-form-input>
          </b-form-group>
        </b-col>
        <!----------------------------------------------------------------------------->
        <b-col lg="1" class="d-flex justify-content-center">
          <div class="vl d-md-down-none"></div>
        </b-col>
        <b-col align-self="stretch">
          <b-container class="bv-example-row">
            <b-row class="justify-content-md-center">
              <b-col cols="12" md="auto">
                <b-img src="~/static/images/Group 3106.png" />
              </b-col>
            </b-row>
            <br />
            <b-row class="justify-content-md-center">
              <b-col cols="12" md="auto">
                <b-button class="col-md-6 offset-md-3" variant="outline-primary">เลือกรูปภาพ</b-button>
                <br />
                <h5 class="text-secondary">ขนาดไฟล์: สูงสุด 1 MB ไฟล์ที่รองรับ: .JPEG, .PNG</h5>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <!------------------------------------------------------------------------>
    <!-- <b-form-group
      label-cols="1"
      label-cols-lg="1"
      label-size="lg"
      label="อัพโหลดรูปภาพ"
      label-for="input-lg"
      class="start"
    >
      <b-button variant="outline-primary">เลือกรูป</b-button>
      <b-img src="~/static/images/Mask Group 35.png"></b-img>
      <b-img src="~/static/images/Mask Group 35.png"></b-img>
      <b-img src="~/static/images/Mask Group 35.png"></b-img>
      <b-img src="~/static/images/Mask Group 35.png"></b-img>
      <b-img src="~/static/images/Mask Group 35.png"></b-img>
    </b-form-group>-->
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="auto">
        <h5>อัพโหลดรูปภาพ</h5>
        <h5 class="text-secondary">ไม่เกิน 5 รูป</h5>
        <b-button variant="outline-primary">เลือกรูปภาพ</b-button>
      </b-col>

      <b-img src="~/static/images/Mask Group 35.png"></b-img>
      <b-img src="~/static/images/Mask Group 35.png"></b-img>
      <b-img src="~/static/images/Mask Group 35.png"></b-img>
      <b-img src="~/static/images/Mask Group 35.png"></b-img>
      <b-img src="~/static/images/Mask Group 35.png"></b-img>
    </b-row>
  </div>
</template>
<style >
/* .custom-control-input:checked ~ .custom-control-label::before {
  border-color: #ffffff;
  background-color: #06a8f0;
}
.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-image: none;
} */
</style>