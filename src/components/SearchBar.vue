<template>
  <div class="search">
    <div class="block">
      <h4 class="demonstration">{{ $t("findBar.title") }}:</h4>
      <el-date-picker
        v-model="dates"
        type="datetimerange"
        :range-separator="$t('findBar.separator')"
        :start-placeholder="$t('findBar.start')"
        :end-placeholder="$t('findBar.end')"
        @change="handleDates"
        format="DD.MM.YYYY HH:mm"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FindBar",
  props: {
    msg: String,
  },
  computed: mapGetters(["bookingInfo"]),
  methods: {
    ...mapMutations(["updateStartDate", "updateEndDate"]),
    handleDates() {
      // format="dd-MM-yyyy HH:mm" attribute in el-date-picker
      const startDate = `${this.dates[0].getDate()}.${(
        "0" +
        (this.dates[0].getMonth() + 1)
      ).slice(-2)}.${this.dates[0].getFullYear()}`;
      const endDate = `${this.dates[1].getDate()}.${(
        "0" +
        (this.dates[1].getMonth() + 1)
      ).slice(-2)}.${this.dates[1].getFullYear()}`;

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
    const defaultDays = 6;
    return {
      dates: [
        new Date(),
        new Date().setDate(new Date().getDate() + defaultDays),
      ],
    };
  },
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

@media screen and (max-width: 599px) {
  .search {
    height: unset;
  }
}
</style>
