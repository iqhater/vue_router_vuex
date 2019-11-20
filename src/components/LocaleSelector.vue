<template>
  <div class="locale">
    <el-dropdown @command="setLocale">
      <span class="el-dropdown-link">
        <img :src="getImgUrl" alt="flag" class="flags" />
        <span>{{ $i18n.locale.toUpperCase() }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="en">
          <img src="../assets/img/flags/en.svg" alt="flag_icon_en" class="flags" />English
        </el-dropdown-item>
        <el-dropdown-item command="ru">
          <img src="../assets/img/flags/ru.svg" alt="flag_icon_ru" class="flags" />Русский
        </el-dropdown-item>
        <el-dropdown-item command="es">
          <img src="../assets/img/flags/es.svg" alt="flag_icon_es" class="flags" />Español
        </el-dropdown-item>
        <el-dropdown-item command="de">
          <img src="../assets/img/flags/de.svg" alt="flag_icon_de" class="flags" />Deutsch
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

export default {
  computed: {
    getImgUrl() {
      return require(`../assets/img/flags/${this.$i18n.locale}.svg`);
    }
  },
  methods: {
    /* ...mapMutations(["updateCheckboxes", "updateDropdown"]),
    handleCheckboxes() {
      this.updateCheckboxes(this.checkboxes.filter(obj => obj.checked));
    }, */
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      });
    }
  }
};
</script>

<style lang="scss">
.locale {
  display: inline;
  position: relative;
  left: 90px;
}
.flags {
  vertical-align: middle;
  width: 22px;
  margin-right: 10px;
  margin-top: -2px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #2c3e50;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>