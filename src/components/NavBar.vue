<template>
  <div id="nav">
    <router-link :to="`/${$i18n.locale}`">{{ $t("nav.home") }}</router-link>
    |
    <router-link :to="`/${$i18n.locale}/options`">{{
      $t("nav.options")
    }}</router-link>
    |
    <router-link :to="`/${$i18n.locale}/user`">{{
      $t("nav.user")
    }}</router-link>
    |
    <router-link :to="`/${$i18n.locale}/faq`">{{ $t("nav.faq") }}</router-link>
    |
    <router-link :to="`/${$i18n.locale}/order`">{{
      $t("nav.order")
    }}</router-link>
    <LocaleSelector />
  </div>
</template>

<script>
import LocaleSelector from "./LocaleSelector.vue";

export default {
  components: {
    LocaleSelector,
  },
};
</script>

<style lang="scss">
/* Menu navbar styles */
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 5px;

    &.router-link-exact-active {
      color: #42a7b9;
      text-decoration: underline;
    }
  }

  @media (max-width: 599px) {
    flex-direction: column;
  }
}
</style>
