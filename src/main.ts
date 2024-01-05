import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { registerStore } from "@/store";
import router from "@/router";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import weekday from "dayjs/plugin/weekday";
import dayjs from "dayjs";
// import ElementPlus from "element-plus";
// import zhCn from "element-plus/es/locale/lang/zh-cn";
// import "./styles/common/index.scss";
// import "element-plus/dist/index.css";

const app = createApp(App);
dayjs.extend(weekday);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.locale("zh-cn");
app.provide("dayjs", dayjs);

app
  .use(router)
  //   .use(ElementPlus, {
  //     locale: zhCn,
  //   })
  .use(createPinia());
registerStore();
app.mount("#app");
