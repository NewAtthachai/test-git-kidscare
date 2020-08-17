<template>
  <div class="my-3">
    <b-row>
      <b-col v-for="school in schools" :key="school.id" md="4">
        <b-card>
          <b-row>
            <b-col cols="auto" class="mr-auto p-4">
              <h4>{{school.name}}</h4>
            </b-col>
          </b-row>
          <div class="decorationtop"></div>
          <br />
          <b-img center src="~/static/images/Mask Group 51.png" alt="Circle image" />
          <br />
          <from class="mt-3">
            <b-card-text>ผู้บริหาร : {{school.executive_name}}</b-card-text>
            <b-card-text>สาขา: {{school.branch_name}},{{school.province}}</b-card-text>
            <b-card-text>จำนวนครู : 10</b-card-text>
            <b-card-text>จำนวนนักเรียน : 50</b-card-text>
          </from>
        </b-card>
        <b-link to="/school/nursery" class="stretched-link"></b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SidebarNavLink from "../../components/Sidebar/SidebarNavLink";

export default {
  name: "sidebar",
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    SidebarNavLink,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      schools: [],
    };
  },
  methods: {
    fetchData() {
      this.$axios
        .get("api/v1/owner/school")
        .then((response) => {
          this.schools = response.data;
        })
        .catch((error) => {});
    },
    handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle("open");
    },
  },
};
</script>

<style></style>
