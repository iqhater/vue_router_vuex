<template>
  <div class="user">
    <el-divider>{{ $t("user.title") }}</el-divider>
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="120px"
      class="demo-dynamic"
    >
      <el-form-item
        :label="$t('user.firstName.title')"
        prop="firstName"
        :rules="[
          {
            required: true,
            message: `${$t('user.firstName.error1')}`,
            trigger: 'blur'
          },
          {
            min: 2,
            max: 18,
            message: `${$t('user.firstName.error2')}`,
            trigger: 'blur'
          }
        ]"
      >
        <el-input
          value="dynamicValidateForm.firstName"
          v-model="dynamicValidateForm.firstName"
          @change="handleName()"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.lastName')" prop="lastName">
        <el-input
          v-model="dynamicValidateForm.lastName"
          @change="handleSurName()"
        ></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        :label="$t('user.email.title')"
        :rules="[
          {
            required: true,
            message: `${$t('user.email.error1')}`,
            trigger: 'blur'
          },
          {
            type: 'email',
            message: `${$t('user.email.error2')}`,
            trigger: ['blur', 'change']
          }
        ]"
      >
        <el-input
          v-model="dynamicValidateForm.email"
          @change="handleEmail()"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('dynamicValidateForm')">{{
          $t("user.reset")
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      dynamicValidateForm: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  },
  methods: {
    ...mapGetters(["userInfo"]),
    ...mapMutations(["updateFirstName", "updateLastName", "updateEmail"]),
    initName() {
      if (this.userInfo().firstName != "") {
        this.dynamicValidateForm.firstName = this.userInfo().firstName;
      }
    },
    initSurName() {
      if (this.userInfo().lastName != "") {
        this.dynamicValidateForm.lastName = this.userInfo().lastName;
      }
    },
    initEmail() {
      if (this.userInfo().email != "") {
        this.dynamicValidateForm.email = this.userInfo().email;
      }
    },
    handleName() {
      this.updateFirstName(this.dynamicValidateForm.firstName);
    },
    handleSurName() {
      this.updateLastName(this.dynamicValidateForm.lastName);
    },
    handleEmail() {
      this.updateEmail(this.dynamicValidateForm.email);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();

      // clear user info from state
      this.updateFirstName(this.dynamicValidateForm.firstName);
      this.updateLastName(this.dynamicValidateForm.lastName);
      this.updateEmail(this.dynamicValidateForm.email);
    }
  },
  async mounted() {
    this.initName();
    this.initSurName();
    this.initEmail();
  }
};
</script>

<style scoped lang="scss">
.user {
  margin: 0 auto;
  width: 40%;
}
</style>
