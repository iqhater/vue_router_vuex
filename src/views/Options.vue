<template>
  <div class="options">
    <FindBar />
    <div class="checkboxes">
      <el-checkbox
        v-for="checkbox in checkboxes"
        :key="checkbox.label"
        :label="checkbox.label"
        :checked="checkbox.checked"
        v-model="checkbox.checked"
        size="medium"
        border
        @change="handleCheckboxes()"
      ></el-checkbox>
    </div>

    <h4>Select option:</h4>
    <el-select v-model="value" placeholder="Select" @change="handleDropdownOption()">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
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
          label: "Option 1",
          checked: true
        },
        {
          label: "Option 2",
          checked: false
        },
        {
          label: "Option 3",
          checked: false
        },
        {
          label: "Option 4",
          checked: false
        }
      ],
      options: [
        {
          value: "One",
          label: "One 1"
        },
        {
          value: "Two",
          label: "Two 2",
          disabled: true
        },
        {
          value: "Three",
          label: "Three 3"
        },
        {
          value: "Four",
          label: "Four 4"
        },
        {
          value: "Five",
          label: "Five 5"
        }
      ],
      value: "One 1"
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
    // this.bookingInfo.checkboxes
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
