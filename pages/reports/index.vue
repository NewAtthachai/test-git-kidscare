<template>
  <div class="my-3">
    <b-card-group deck class="row no-gutters">
      <b-card class="col-12 col-sm-6 col-md-12">
        <b-row>
          <b-col cols="auto" class="mr-auto p-4">
            <h3>ค่าบริการทั้งหมดที่ได้รับ</h3>
          </b-col>
          <b-col cols="auto" class="p-4">
            <b-button type="submit" variant="primary" class="shadow p-2.5 m-1">Refresh</b-button>
          </b-col>
        </b-row>
        <div class="decorationtop"></div>
        <br />
        <div class="row">
          <a class="col-4">ฟ้าคิดส์เนอสเซอรี</a>
          <b-progress :value="value" :max="max" class="col-4"></b-progress>
        </div>
        <div class="col-10">
          <h6 class="d-flex justify-content-center">12,200/18,000</h6>
        </div>

        <hr class="new1" />
        <br />

        <div class="row">
          <a class="col-4">อนุบาลทานตะวัน</a>
          <b-progress :value="value" :max="max" class="col-4"></b-progress>
        </div>
        <div class="col-10">
          <h6 class="d-flex justify-content-center">74,900/84,000</h6>
        </div>
        <hr class="new1" />
        <br />

        <div class="row">
          <a class="col-4">ป๊อบคิดส์แอนด์เนอสเซอรี่</a>
          <b-progress :value="value" :max="max" class="col-4"></b-progress>
        </div>
        <div class="col-10">
          <h6 class="d-flex justify-content-center">14,2200/18,000</h6>
        </div>
        <hr class="new1" />
        <br />

        <div class="row">
          <a class="col-4">ต้นข้าวเนอสเซอรี่</a>
          <b-progress :value="value" :max="max" class="col-4"></b-progress>
        </div>
        <div class="col-10">
          <h6 class="d-flex justify-content-center">14,2200/18,000</h6>
        </div>
      </b-card>
      <b-card class="col-12 col-sm-6 col-md-12">
        <b-row>
          <b-col cols="auto" class="mr-auto p-4">
            <h3>คะแนนสถานบัน</h3>
          </b-col>
          <b-col cols="auto" class="p-4">
            <b-button type="submit" variant="primary" class="shadow p-2.5 m-1">Refresh</b-button>
          </b-col>
        </b-row>
        <div class="decorationtop"></div>
        <b-container class="bv-example-row">
          <br />

          <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="4" cols-xl="4">
            <b-col>
              <img src="~/static/images/Mask Group 50.png" />
            </b-col>
            <b-col>
              <img src="~/static/images/Mask Group 49.png" />
            </b-col>
            <b-col>
              <img src="~/static/images/Mask Group 48.png" />
            </b-col>
            <b-col>
              <img src="~/static/images/Mask Group 47.png" />
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </b-card-group>

    <br />
    <!---------------------------------------->

    <b-card-group deck class="row no-gutters">
      <b-card class="col-12 col-sm-6 col-md-12" style="height: 330px;">
        <b-row>
          <b-col cols="auto" class="mr-auto p-4">
            <h3>นักเรียคำขอ</h3>
          </b-col>
          <b-col cols="auto" class="p-4">
            <b-button type="submit" variant="primary" class="shadow p-2.5 m-1">Refresh</b-button>
          </b-col>
        </b-row>
        <div class="decorationtop"></div>
        <br />
        <table id="customers">
          <tr>
            <td>อาทิตย์ กินีสี</td>
            <td>อนุบาลทานตะวัน</td>
            <td>ครูประจำชั้น</td>
            <td>
              <b-img src="~/static/images/eye.png"></b-img>
            </td>
          </tr>

          <tr>
            <td>เพ็ญศรี มากขำ</td>
            <td>ฟ้าคิดส์เนอสเซอรี</td>
            <td>ครูประฐมวัย</td>
            <td>
              <b-img src="~/static/images/eye.png"></b-img>
            </td>
          </tr>
        </table>
        <div class="btn-bar-bottom">
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
          </b-button-toolbar>
        </div>
      </b-card>

      <!-------------------------------------------------------->

      <b-card class="col-12 col-sm-6 col-md-12">
        <b-row>
          <b-col cols="auto" class="mr-auto p-4">
            <h3>ครูคำขอ</h3>
          </b-col>
          <b-col cols="auto" class="p-4">
            <b-button type="submit" variant="primary" class="shadow p-2.5 m-1">Refresh</b-button>
          </b-col>
        </b-row>
        <div class="decorationtop"></div>
        <br />

        <table id="customers">
          <tr>
            <td>อาทิตย์ กินีสี</td>
            <td>อนุบาลทานตะวัน</td>
            <td>ครูประจำชั้น</td>
            <td>
              <b-img src="~/static/images/eye.png"></b-img>
            </td>
          </tr>

          <tr>
            <td>เพ็ญศรี มากขำ</td>
            <td>ฟ้าคิดส์เนอสเซอรี</td>
            <td>ครูประฐมวัย</td>
            <td>
              <b-img src="~/static/images/eye.png"></b-img>
            </td>
          </tr>
        </table>
        <div class="btn-bar-bottom">
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
          </b-button-toolbar>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
      ],
    };
    // loading: false,
    // lastPage: 1,
    // dashboard: {},
    // entities: [
    //   {
    //     branch: "ลาดพร้าว",
    //     pharmacist: "ภก.001",
    //     daytime: "09:00:00",
    //   },
    //   {
    //     branch: "รัชโยธิน",
    //     pharmacist: "ภก.002",
    //     daytime: "09:00:00",
    //   },
    //   {
    //     branch: "บางเขน",
    //     pharmacist: "ภก.003",
    //     daytime: "09:00:00",
    //   },
    // ],
    // refresh_time: Date.now(),
    // form: Object.assign({ page: 1, size: 15 }, this.$route.query),
    // tableFields: [
    //   {
    //     key: "branch",
    //     label: "สาขา",
    //     sortable: true,
    //   },
    //   {
    //     key: "pharmacist",
    //     label: "เภสัช",
    //     sortable: true,
    //   },
    //   {
    //     key: "daytime",
    //     label: "วันที่/เวลา",
    //     sortable: false,
    //   },
    //   {
    //     key: "active",
    //     label: "Action",
    //     sortable: false,
    //   },
    //      {
    //   key: "action",
    //   label: "Action",
    // },
    // ],
    // };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
