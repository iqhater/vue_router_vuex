<template>
  <div class="faq">
    <el-collapse v-model="activeNames">
      <el-collapse-item :title="$t('faq.section1.title')" name="1">
        <div>{{ $t("faq.section1.description.block1") }}</div>
        <div>{{ $t("faq.section1.description.block2") }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('faq.section2.title')" name="2">
        <div>{{ $t("faq.section2.description.block1") }}</div>
        <div>{{ $t("faq.section2.description.block2") }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('faq.section3.title')" name="3">
        <div>{{ $t("faq.section3.description.block1") }}</div>
        <div>{{ $t("faq.section3.description.block2") }}</div>
        <div>{{ $t("faq.section3.description.block3") }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('faq.section4.title')" name="4">
        <div>{{ $t("faq.section4.description.block1") }}</div>
        <div>{{ $t("faq.section4.description.block2") }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('faq.section5.title')" name="5">
        <div>{{ $t("faq.section5.description.block1") }}</div>
        <div>{{ $t("faq.section5.description.block2") }}</div>
        <div>{{ $t("faq.section5.description.block3") }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["2"]
    };
  }
};
</script>

<style scoped lang="scss">
.faq {
  margin: 0 auto;
  width: 40%;
  text-align: left;

  div {
    font-size: 1.1em;
    margin-left: 10px;
  }

  @media (max-width: 599px) {
    width: 100%;
  }
}
</style>
