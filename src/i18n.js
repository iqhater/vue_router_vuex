import Vue from "vue";
import VueI18n from "vue-i18n";
// import en from "element-ui/lib/locale/lang/en";
// import ru from "element-ui/lib/locale/lang/ru-RU";
// import es from "element-ui/lib/locale/lang/es";
// import de from "element-ui/lib/locale/lang/de";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: loadLocaleMessages()
});
