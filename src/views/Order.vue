<template>
  <div class="order">
    <el-divider>Booking info</el-divider>
    <h4>
      Start Date:
      <span>10-11-2019</span>
    </h4>
    <h4>
      End Date:
      <span>15-11-2019</span>
    </h4>
    <h4>
      Selected checkboxes:
      <span
        v-for="checkmark in handleCheckboxes()"
        :key="checkmark.label"
      >{{ checkmark.label }}</span>
    </h4>
    <h4>
      Selected option:
      <span>{{ handleDropdownOption() }}</span>
    </h4>
    <el-divider>User info</el-divider>
    <h4>
      First Name:
      <span>{{ handleName() }}</span>
    </h4>
    <h4>
      Last Name:
      <span>{{ handleSurName() }}</span>
    </h4>
    <h4>
      Email:
      <span>{{ handleEmail() }}</span>
    </h4>
    <el-divider id="bottom-divider"></el-divider>
    <el-checkbox v-model="checked">
      <i>I have read and agree to the
      <a
        href="#"
        type="text"
        @click="centerDialogVisible = true"
      >Terms and Conditions</a>.</i>
    </el-checkbox>
    <el-dialog title="Terms and Conditions" :visible.sync="centerDialogVisible" width="30%" center>
      <span>It should be noted that the content will not be aligned in center by default. You can click on cancel button or exit icon at the right top position or just click outside dialog window.</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" plain @click="centerDialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
    <el-button
      id="send-btn"
      type="primary"
      plain
      :disabled="!checked"
      @click.prevent="successNotification();clearLocalStorage();"
    >Send order</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      centerDialogVisible: false,
      checked: false
    };
  },
  /* async mounted() {
    console.log(this.bookingInfo.checkboxes);
  }, */
  computed: {
    ...mapGetters(["bookingInfo", "userInfo"])
  },
  methods: {
    handleCheckboxes() {
      return this.bookingInfo.checkboxes;
    },
    handleDropdownOption() {
      return this.bookingInfo.dropdown;
    },
    handleName() {
      return this.userInfo.firstName;
    },
    handleSurName() {
      return this.userInfo.lastName;
    },
    handleEmail() {
      return this.userInfo.email;
    },
    clearLocalStorage() {
      // clear all local storage after submit order.
      localStorage.clear();
    },
    successNotification() {
      /* this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top right corner'
        }); */
      this.$message({
        showClose: true,
        message: "Success! Thank you for order.",
        type: "success",
        duration: 4000
      });
    }
  }
};
</script>

<style scoped lang="scss">
.order {
  margin: 0 auto;
  width: 40%;
  text-align: left;

  span {
    font-size: 0.9em;
    font-style: italic;
    font-weight: 500;
    color: #272727;
  }

  #bottom-divider {
    margin-bottom: 5px;
  }

  #send-btn {
    display: block;
    margin: 30px auto;
  }
}
</style>
