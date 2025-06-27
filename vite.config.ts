import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path';
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  // base: '/company/',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
      dirs: ['src/components/global'],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      comps: resolve(__dirname, './src/components'),
      store: resolve(__dirname, './src/store'),
      '~': resolve(__dirname, './')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //自定义的主题文件
        additionalData: `@use "@/assets/element-theme.scss" as *;`,
      },
    },
  },
})
