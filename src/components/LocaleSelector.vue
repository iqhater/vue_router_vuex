<template>
  <div class="locale">
    <el-dropdown @command="setLocale">
      <span class="el-dropdown-link">
        <img :src="getImgUrl" alt="flag" class="flags" />
        <span>{{ $i18n.locale.toUpperCase() }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="en">
            <img
              src="../assets/img/flags/en.svg"
              alt="flag_icon_en"
              class="flags"
            />English
          </el-dropdown-item>
          <el-dropdown-item command="ru">
            <img
              src="../assets/img/flags/ru.svg"
              alt="flag_icon_ru"
              class="flags"
            />Русский
          </el-dropdown-item>
          <el-dropdown-item command="es">
            <img
              src="../assets/img/flags/es.svg"
              alt="flag_icon_es"
              class="flags"
            />Español
          </el-dropdown-item>
          <el-dropdown-item command="de">
            <img
              src="../assets/img/flags/de.svg"
              alt="flag_icon_de"
              class="flags"
            />Deutsch
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  computed: {
    getImgUrl() {
      const imgUrl = new URL(
        `../assets/img/flags/${this.$i18n.locale}.svg`,
        import.meta.url
      );
      return imgUrl;
    },
  },
  methods: {
    setLocale(locale) {
      if (locale === this.$i18n.locale) return;
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
};
</script>

<style lang="scss">
.locale {
  display: inline;
  position: relative;
  left: 90px;

  @media (max-width: 599px) {
    top: -198px;
    left: 100px;
  }
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

.el-dropdown-menu__item {
  margin: 7px !important;
  border-radius: 5px;
}
</style>
