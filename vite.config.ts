import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
        dts: "src/auto-import.d.ts", // 生成 `auto-import.d.ts` 全局声明
      }),
    ],

    resolve: {
      alias: {
        "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import 'src/styles/common/index.scss';",
        },
      },
    },
    base: "./", // 设置打包路径
    server: {
      host: "0.0.0.0",
      port: 8001, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域

      // 设置代理，根据我们项目实际情况配置
    },
  };
});
