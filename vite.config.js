import path from 'path';
import {
  defineConfig
} from "vite";
import vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import VitePluginElementPlus from 'vite-plugin-element-plus'

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  plugins: [
    vue(),
    VitePluginElementPlus({
      // if you need to use the *.scss source file, you need to uncomment this comment
      // useSource: true,
      // prefix: "El"
      // lib: "element-plus",
      // format: "esm"
    }),
    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: [path.resolve(__dirname, './src/locales/**')],
    }),
  ],
  productionSourceMap: false,
});