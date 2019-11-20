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
        @change="handleDates"
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
  methods: {
    ...mapMutations(["updateStartDate", "updateEndDate"]),
    handleDates() {
      // value-format="d-MM-yyyy" attribute in el-date-picker
      const startDate = `${this.dates[0].getDate()}-${this.dates[0].getMonth()}-${this.dates[0].getFullYear()}`;
      const endDate = `${this.dates[1].getDate()}-${this.dates[1].getMonth()}-${this.dates[1].getFullYear()}`;

      this.updateStartDate(startDate);
      this.updateEndDate(endDate);
    },
  },
  async mounted() {
    // init stored dates
    const startDate = localStorage.getItem("startDate");
    const endDate = localStorage.getItem("endDate"); 

    if (startDate && endDate) {
      this.updateStartDate(startDate);
      this.updateEndDate(endDate);
    } else {
      const date = new Date();
      const defaultDays = 6;

      const startDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
      date.setDate(date.getDate() + defaultDays);
      const endDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
      
      this.updateStartDate(startDate);
      this.updateEndDate(endDate);
    }
  },
  data() {
    return {
      // value1: [new Date(), new Date(2019, 11, 27, 10, 10)]
      dates: [new Date(), new Date().setDate(new Date().getDate() + 6)]
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
