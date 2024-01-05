import { authStore } from "@/store/auth";
import { commonStore } from "@/store/common";

export interface IAppStore {
  authStore: ReturnType<typeof authStore>;
  commonStore: ReturnType<typeof commonStore>;
}

const appStore: IAppStore = {} as IAppStore;
/**
 * 注册app状态库
 */

export const registerStore = () => {
  appStore.authStore = authStore();
  appStore.commonStore = commonStore();
};

export default appStore;
