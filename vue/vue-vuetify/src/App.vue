<template lang="pug">
  //- 最外層 v-app
  v-app
    //- 導覽設定 v-app-bar(bottom='', color='primary', dark='')
      位置 app/bottom 主題顏色內primary key名稱 深色模式dark
    v-app-bar(app='')
      v-toolbar-items
        v-list-item
          v-icon.mr-2 mdi-account-box-multiple
          //- <v-icon class="mr-2"> mdi-account-box-multiple </v-icon>
          span.primary--text.font-weight-bold.title Employee
          span.primary--text.font-weight-light.title Data
          v-list-item-content
      //- v-spacer 用于分配父子组件之间的剩余宽度
      v-spacer
      v-toolbar-items
        //- 切換按鈕顏色元件
        ThemeChangerMenu
    v-main
      //- Carousel
      card.mt-10
      //- navbar
      v-list-item-action
      v-switch(v-model='$vuetify.theme.dark')
      //- Carousel

      //- 導覽列
      v-app-bar(bottom='')
        //- 标题
        v-toolbar-title
          //- 圖示
          v-icon.mr-2 mdi-account-box-multiple
          //- 文字 info螢光色
          span Employee
          //- 文字 info文字色
          span Data
        //- 用于 分配父子组件之间的剩余宽度
        v-spacer(color="indigo darken-3")
        //- 切換按鈕顏色元件
        ThemeChangerMenu
        
</template>

<script>
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Carousel from "./components/Carousel.vue";
import ThemeChangerMenu from "./components/ThemeChangerMenu.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Card,
    Carousel,
    ThemeChangerMenu
  },

  data: () => ({
    //
  }),
};
</script>
