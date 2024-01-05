import { ref } from "vue";
import { defineStore } from "pinia";
import { User } from "@/interface/User";
import api from "@/services/api";
import { ResultProps } from "@/interface/Common";

// 使用setup模式定义
export const authStore = defineStore(
  "authStore",
  () => {
    const token = ref<string>("");
    const user = ref<User | null>(null);
    const loginState = ref<string>("login");
    const role = ref<number>(-1);
    const setToken = (newToken: string) => {
      token.value = newToken;
    };
    const setUserInfo = (newUserInfo: User) => {
      user.value = newUserInfo;
    };

    const getUserInfo = async () => {
      const userInfoRes = (await api.request.get("user")) as ResultProps;
      if (userInfoRes.msg === "OK") {
        user.value = { ...userInfoRes.data };
        if (user.value) {
          role.value = user.value.adminRole;
        }
      }
    };
    const setLoginState = (newState) => {
      loginState.value = newState;
    };

    return {
      token,
      role,
      user,
      setToken,
      setUserInfo,
      getUserInfo,
      loginState,
      setLoginState,
    };
  }
  // { persist: true }
);
