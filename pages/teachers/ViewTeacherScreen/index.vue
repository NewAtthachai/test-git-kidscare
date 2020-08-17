<template>
  <div class="my-3">
    <b-card class="shadow">
      <div class="p-4">
        จำนวนนักเรียน
        <b-img src="~/static/images/Group1659.png" />
        <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-1 />
      </div>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text>
            <table id="customers">
              <tr>
                <td>ด.ญ.ฮยอนจิน เดวา</td>
                <td>ฟ้าคิดส์เนอสเซอรี</td>
                <td>รายวัน</td>
                <td>
                  <b-img src="~/static/images/delete.png"></b-img>
                </td>
              </tr>

              <tr>
                <td>เพ็ญศรี มากขำ</td>
                <td>ฟ้าคิดส์เนอสเซอรี</td>
                <td>ครูประฐมวัย</td>
                <td>
                  <b-img src="~/static/images/delete.png"></b-img>
                </td>
              </tr>
            </table>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow">
      <div class="p-4">
        ข้อมูลครู
        <b-img src="~/static/images/Group1659.png" />
        <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-2 />
      </div>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <div class="decoration-top"></div>
        <div class="decoration-botton"></div>
        <b-card-body>
          <b-card-text>
            <table id="customers">
              <tr>
                <td>อ. ฮยอนจิน เดวา</td>
                <td>ฟ้าคิดส์เนอสเซอรี</td>
                <td>รายวัน</td>
                <td>
                  <b-img src="~/static/images/delete.png"></b-img>
                </td>
              </tr>

              <tr>
                <td>อ. เพ็ญศรี มากขำ</td>
                <td>ฟ้าคิดส์เนอสเซอรี</td>
                <td>ครูประฐมวัย</td>
                <td>
                  <b-img src="~/static/images/delete.png"></b-img>
                </td>
              </tr>
            </table>
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