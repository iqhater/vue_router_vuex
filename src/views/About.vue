<template>
  <div class="about">
    <el-divider>User info</el-divider>
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="120px"
      class="demo-dynamic"
    >
      <el-form-item
        label="First Name"
        prop="firstName"
        :rules="[
        { required: true, message: 'Please input correct first name', trigger: 'blur' },
        { min: 2, max: 18, message: 'Length should be 2 to 18', trigger: 'blur' }
        ]"
      >
        <el-input value="dynamicValidateForm.firstName" v-model="dynamicValidateForm.firstName" @change="handleName()"></el-input>
      </el-form-item>
      <el-form-item label="Last Name" prop="lastName">
        <el-input v-model="dynamicValidateForm.lastName" @change="handleSurName()"></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label="Email"
        :rules="[
        { required: true, message: 'Please input email address', trigger: 'blur' },
        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ]"
      >
        <el-input v-model="dynamicValidateForm.email" @change="handleEmail()"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('dynamicValidateForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

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
    // ...mapGetters(["userInfo"]),
    ...mapMutations(["updateFirstName", "updateLastName", "updateEmail"]),
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
    }
  }
};
</script>

<style scoped lang="scss">
.about {
  margin: 0 auto;
  width: 40%;
}
</style>
