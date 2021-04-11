<template>
  <div class="order">
    <el-divider>{{ $t("order.booking.title") }}</el-divider>
    <h4>
      {{ $t("order.booking.startDate") }}
      <span>{{ startDate() }}</span>
    </h4>
    <h4>
      {{ $t("order.booking.endDate") }}
      <span>{{ endDate() }}</span>
    </h4>
    <h4>
      {{ $t("order.booking.selectedCheckboxes") }}
      <span v-for="checkmark in handleCheckboxes()" :key="checkmark.label"
        >{{ checkmark.label }},
      </span>
    </h4>
    <h4>
      {{ $t("order.booking.selectedOption") }}
      <span>{{ handleDropdownOption() }}</span>
    </h4>
    <el-divider>{{ $t("order.user.title") }}</el-divider>
    <h4>
      {{ $t("order.user.firstName") }}
      <span>{{ handleName() }}</span>
    </h4>
    <h4>
      {{ $t("order.user.lastName") }}
      <span>{{ handleSurName() }}</span>
    </h4>
    <h4>
      {{ $t("order.user.email") }}
      <span>{{ handleEmail() }}</span>
    </h4>
    <el-divider id="bottom-divider"></el-divider>
    <el-checkbox v-model="checked">
      <i
        >{{ $t("order.terms.title") }}
        <a href="#" type="text" @click="centerDialogVisible = true">{{
          $t("order.terms.link")
        }}</a
        >.</i
      >
    </el-checkbox>
    <el-dialog
      :title="$t('order.terms.modal.title')"
      :visible="centerDialogVisible"
      width="90%"
      center
    >
      <span>{{ $t("order.terms.modal.description") }}</span>
      <span slot:="footer" class="dialog-footer">
        <el-button type="info" plain @click="centerDialogVisible = false">{{
          $t("order.terms.modal.cancel")
        }}</el-button>
      </span>
    </el-dialog>
    <el-button
      id="send-btn"
      type="primary"
      plain
      :disabled="!checked"
      @click.prevent="
        successNotification();
        clearLocalStorage();
      "
      :loading="loading"
      >{{ $t("order.send") }}</el-button
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      centerDialogVisible: false,
      checked: false,
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["bookingInfo", "userInfo"]),
  },
  methods: {
    startDate() {
      return this.bookingInfo.startDate;
    },
    endDate() {
      return this.bookingInfo.endDate;
    },
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
      const loading = this.$loading({
        lock: true,
        text: this.$t("order.loading"),
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 2000);

      setTimeout(() => {
        this.loading = false;
        this.$message({
          showClose: true,
          message: this.$t("order.success"),
          type: "success",
          duration: 4000,
        });
        this.checked = false;
      }, 2000);
      this.loading = true;
    },
  },
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

  @media (max-width: 599px) {
    width: 100%;
  }
}
</style>
