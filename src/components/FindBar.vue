<template>
  <div class="search">
    <div class="block">
      <h4 class="demonstration">{{ $t("findBar.title") }}:</h4>
      <el-date-picker
        v-model="dates"
        type="datetimerange"
        :range-separator='$t("findBar.separator")'
        :start-placeholder='$t("findBar.start")'
        :end-placeholder='$t("findBar.end")'
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FindBar",
  props: {
    msg: String
  },
  computed: mapGetters(["bookingInfo"]),
  methods: mapMutations(["updateStartDate", "updateEndDate"]),
  async mounted() {
    // init stored dates
    const startDate = localStorage.getItem("startDate");
    const endDate = localStorage.getItem("endDate");

    if (startDate || endDate) {
      this.updateStartDate(startDate);
      this.updateEndDate(endDate);
    } else {
      this.updateStartDate(new Date());
      this.updateEndDate(7);
    }

    // console.log(this.bookingInfo.startDate);
    // console.log(this.bookingInfo.endDate);
  },
  data() {
    return {
      // value1: [new Date(), new Date(2019, 11, 27, 10, 10)]
      dates: [new Date(), new Date().setDate(new Date().getDate() + 7)]
    };
  }
};
</script>

<style scoped lang="scss">
.search {
  width: 85%;
  height: 80px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 4px;

  .block {
    margin: 5px 0;

    h4 {
      margin: 0;
    }
  }
}
</style>
