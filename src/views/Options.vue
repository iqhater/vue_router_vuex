<template>
  <div class="options">
    <FindBar />
    <div class="checkboxes">
      <el-checkbox
        v-for="(checkbox, index) in checkboxes"
        :key="checkbox.label"
        :label="$t(`options.checkboxes.${'label' + ++index}`)"
        :checked="checkbox.checked"
        v-model="checkbox.checked"
        size="medium"
        border
        @change="handleCheckboxes()"
      ></el-checkbox>
    </div>

    <h4>{{ $t("options.dropdown.title") }}:</h4>
    <el-select v-model="value" placeholder="Select" @change="handleDropdownOption()">
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
import FindBar from "@/components/FindBar.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      checkboxes: [
        {
          label: this.$t("options.checkboxes.label1"),
          checked: true
        },
        {
          label: this.$t("options.checkboxes.label2"),
          checked: false
        },
        {
          label: this.$t("options.checkboxes.label3"),
          checked: false
        },
        {
          label: this.$t("options.checkboxes.label4"),
          checked: false
        }
      ],
      options: [
        {
          value: this.$t("options.dropdown.option1.value"),
          label: this.$t("options.dropdown.option1.label")
        },
        {
          value: this.$t("options.dropdown.option2.value"),
          label: this.$t("options.dropdown.option2.label"),
          disabled: true
        },
        {
          value: this.$t("options.dropdown.option3.value"),
          label: this.$t("options.dropdown.option3.label")
        },
        {
          value: this.$t("options.dropdown.option4.value"),
          label: this.$t("options.dropdown.option4.label")
        },
        {
          value: this.$t("options.dropdown.option5.value"),
          label: this.$t("options.dropdown.option5.label")
        }
      ],
      value: this.$t("options.dropdown.option1.value")
    };
  },
  methods: {
    ...mapGetters(["bookingInfo"]),
    ...mapMutations(["updateCheckboxes", "updateDropdown"]),
    handleCheckboxes() {
      this.updateCheckboxes(this.checkboxes.filter(obj => obj.checked));
    },
    handleDropdownOption() {
      this.updateDropdown(this.value);
    }
  },
  async mounted() {
    this.handleCheckboxes();
    this.handleDropdownOption();
  },
  components: {
    FindBar
  }
};
</script>

<style scoped lang="scss">
.checkboxes {
  margin-top: 30px;
}

h4 {
  margin-top: 30px;
  margin-bottom: 0;
}
</style>
