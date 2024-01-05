import { ref } from "vue";
import { defineStore } from "pinia";

// 使用setup模式定义
export const commonStore = defineStore("commonStore", () => {
  const deviceType = ref<string>("computer");
  const deviceWidth = ref<number>(0);
  const deviceHeight = ref<number>(0);
  const deviceSize = ref<string>("md");
  const setDeviceType = (newDeviceType: string) => {
    deviceType.value = newDeviceType;
  };
  const setDeviceWidth = (width: number, height: number) => {
    deviceWidth.value = width;
    deviceHeight.value = height;
    if (width < 550) {
      deviceSize.value = "xs";
    } else if (550 <= width) {
      deviceSize.value = "sm";
    } else if (768 <= width) {
      deviceSize.value = "md";
    } else if (992 <= width) {
      deviceSize.value = "lg";
    } else if (1200 <= width) {
      deviceSize.value = "xl";
    }

  };

  return {
    deviceType,
    setDeviceType,
    deviceWidth,
    deviceHeight,
    setDeviceWidth,
    deviceSize,
  };
});
