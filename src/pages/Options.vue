<template>
  <div class="options">
    <SearchBar />
    <div class="checkboxes">
      <el-checkbox
        v-for="(checkbox, index) in checkboxes"
        :key="checkbox.label"
        :label="$t(`options.checkboxes.${'label' + ++index}`)"
        :checked="checkbox.checked"
        v-model="checkbox.checked"
        size="medium"
        border
        @change="handleCheckboxes"
      ></el-checkbox>
    </div>

    <h4>{{ $t("options.dropdown.title") }}:</h4>
    <el-select
      v-model="value"
      placeholder="Select"
      @change="handleDropdownOption"
    >
      <el-option
        v-for="(item, index) in options"
        :key="item.value"
        :label="$t(`options.dropdown.${'option' + ++index + '.label'}`)"
        :value="item.value"
        :disabled="item.disabled"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "../components/SearchBar.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      checkboxes: [
        {
          label: this.$t("options.checkboxes.label1"),
          checked: false,
          idx: 0,
        },
        {
          label: this.$t("options.checkboxes.label2"),
          checked: false,
          idx: 1,
        },
        {
          label: this.$t("options.checkboxes.label3"),
          checked: false,
          idx: 2,
        },
        {
          label: this.$t("options.checkboxes.label4"),
          checked: false,
          idx: 3,
        },
      ],
      options: [
        {
          value: this.$t("options.dropdown.option1.value"),
          label: this.$t("options.dropdown.option1.label"),
        },
        {
          value: this.$t("options.dropdown.option2.value"),
          label: this.$t("options.dropdown.option2.label"),
          disabled: true,
        },
        {
          value: this.$t("options.dropdown.option3.value"),
          label: this.$t("options.dropdown.option3.label"),
        },
        {
          value: this.$t("options.dropdown.option4.value"),
          label: this.$t("options.dropdown.option4.label"),
        },
        {
          value: this.$t("options.dropdown.option5.value"),
          label: this.$t("options.dropdown.option5.label"),
        },
      ],
      value: this.$t("options.dropdown.option1.value"),
    };
  },
  methods: {
    ...mapGetters(["bookingInfo"]),
    ...mapMutations(["updateCheckboxes", "updateDropdown"]),
    initCheckboxes() {
      if (this.bookingInfo().checkboxes.length > 0) {
        this.checkboxes.forEach(() => {
          this.bookingInfo().checkboxes.forEach((checkbox2) => {
            this.checkboxes[checkbox2.idx].checked = checkbox2.checked;
          });
        });
      }
    },
    initDropdown() {
      if (this.bookingInfo().dropdown != "") {
        this.value = this.bookingInfo().dropdown;
      }
    },
    handleCheckboxes() {
      this.updateCheckboxes(this.checkboxes.filter((obj) => obj.checked));
    },
    handleDropdownOption() {
      this.updateDropdown(this.value);
    },
  },
  async mounted() {
    this.initCheckboxes();
    this.initDropdown();
    this.handleCheckboxes();
    this.handleDropdownOption();
  },
  components: {
    SearchBar,
  },
};
</script>

<style scoped lang="scss">
.checkboxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;

  .el-checkbox {
    margin: 5px;
  }
}

h4 {
  margin-top: 30px;
  margin-bottom: 0;
}
</style>
