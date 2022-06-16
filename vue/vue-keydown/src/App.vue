<template lang="pug">
  #app
    //-  <img alt="Vue logo" src="./assets/logo.png"> 
    //-  <HelloWorld msg="Welcome to Your Vue.js App"/> 
    h1 做一個只能輸入整數的 input 元件
    h1 keydown 事件研究 触发于键盘按键按下的时候
    div
      //- input(type='text', placeholder='請輸入', @keydown='show($event)')

    div
      label(for='name') 輸入 正常觸發模式：
      //- input 綁定事件觸發 正常觸發模式
      input#name(type='text', placeholder='請輸入' @keydown='show($event)')

    div
      label(for='name1') 模式：
      //- 模式
      input#name1(type='text',  placeholder='請輸入' @keydown='show($event)')
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  methods: {
    show(event) {
      // console.log(event);
      switch (event.key) {
        case "ArrowUp":
          // 按“↑”方向键时要做的事。
          console.log(event.key, event.keyCode);
          break;
        case "ArrowDown":
          // 按“↓”方向键时要做的事。
          console.log(event.key, event.keyCode);
          break;
        case "ArrowLeft":
          // 按“←”方向键时要做的事。
          console.log(event.key, event.keyCode);
          break;
        case "ArrowRight":
          // 按“→”方向键时要做的事。
          console.log(event.key, event.keyCode);
          break;
        case "Enter":
          // 按“回车”键时要做的事。
          console.log(event.key, event.keyCode);
          break;
        case "Escape":
          // 按“ESC”键时要做的事。
          console.log(event.key, event.keyCode);
          break;
        default:
          return; // 什么都没按就退出吧。
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  margin-bottom: 15px;
}

label {
  font-size: 26px;
}

input {
  height: 24px;
}
</style>
