<template>
  <div class="my-3">
    <b-card class="shadow p-4">
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
    <b-card class="shadow p-4">
      ข้อมูลสถานรับเล้ยงเด็ก
      <b-img src="~/static/images/Group1659.png" />
      <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-1 />
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow p-4">
      ที่อยู่
      <b-img src="~/static/images/Group1659.png" />
      <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-2 />
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow p-4">
      การรับนักเรียน
      <b-img src="~/static/images/Group1659.png" />
      <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-3 />
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card class="shadow p-4">
      ประเภทการให้บริการ
      <b-img src="~/static/images/Group1659.png" />
      <b-img right src="~/static/images/Union25.png" type="button" v-b-toggle.accordion-4 />
      <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
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
