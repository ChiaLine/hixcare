import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  //? 深色切換 可通过 this.$vuetify.theme.dark 控制
  theme: { 
    // ? 默认使用 light主题，可在主题服务中添加 dark选项修改
    dark: false, 
    //? disable禁用主題
    // disable: true,
    //? 主題顏色設定修改
    themes: {
      dark: {
        primary: "#fff", // ? 主要
        accent: "#FFCA28", // ? 強調
        secondary: "#607D8B", // ? 次要
        success: "#FFEB3B", // ? 成功
        info: "#2196F3", // ? 信息
        warning: "#9C27B0", // ? 警告
        error: "#B71C1C" // ? 錯誤
      },
      //? 淺色設定
      light: {
        primary: "#3f51b5",
        accent: "#673ab7",
        secondary: "#9c27b0",
        success: "#e91e63",
        info: "#f44336",
        warning: "#4caf50",
        error: "#009688"
      }
    },
  },
});



