<template lang="pug">
  #app
    //-  <img alt="Vue logo" src="./assets/logo.png"> 
    //-  <HelloWorld msg="Welcome to Your Vue.js App"/> 
    h1 做一個只能輸入整數的 input 元件
    h1 keydown 事件研究 触发于键盘按键按下的时候
    div
      //- input(type='text', placeholder='請輸入', @keydown='show($event)')

    div
      label(for='name') 正常觸發模式＋設定條件做事：
      input#name(type='text', placeholder='請輸入' @keydown='show')

    div
      label(for='name1') Number模式：
      input#name1(type='text',  placeholder='Number' @keydown='showNumber')

    div
      label(for='name2') e.preventDefault取消事件：
      //- 英文狀態無法輸入 切換中文可以 確認文字後會無法刪除 未確認前可刪除
      //- VUE提供的提供的修飾符 @keydown.prevent = preventDefault
      input#name2(type='text',  placeholder='英文狀態無法輸入，切換中文可以' @keydown.prevent="showPreventDefault")
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      // usedKeys: ["ArrowUp", "ArrowDown", "PageUp", "PageDown"],
      usedKeys: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"],
      Keys: [],
    };
  },
  methods: {
    show(event) {
      console.log(event);
      console.log(`key: ${event.key} code: ${event.code}  charCode: ${event.charCode} keyCode: ${event.keyCode}`)

      // ? 正常觸發 設定條件做事
      // switch (event.key) {
      //   case "ArrowUp":
      //     // 按“↑”方向键时要做的事。
      //     console.log(event.key, event.keyCode);
      //     break;
      //   case "ArrowDown":
      //     // 按“↓”方向键时要做的事。
      //     console.log(event.key, event.keyCode);
      //     break;
      //   case "ArrowLeft":
      //     // 按“←”方向键时要做的事。
      //     console.log(event.key, event.keyCode);
      //     break;
      //   case "ArrowRight":
      //     // 按“→”方向键时要做的事。
      //     console.log(event.key, event.keyCode);
      //     break;
      //   case "Enter":
      //     // 按“回车”键时要做的事。
      //     console.log(event.key, event.keyCode);
      //     break;
      //   case "Escape":
      //     // 按“ESC”键时要做的事。
      //     console.log(event.key, event.keyCode);
      //     break;
      //   default:
      //     console.log("條件其他以外的按鍵", event.key, event.keyCode);
      //     return; // 什么都没按就退出吧。
      // }
    },
    // ? 只能輸入整數的 input 元件
    showNumber(e) {
      // 是數字就跳出
      if (this.usedKeys.includes(e.key)) {
        console.log("showNumber", e.code);
        return;
      }

      if (e.keyCode === 229) {
        console.log('切換注音後', 229)
        // ! mac 切換注音後 取消事件 使用會失效
        e.preventDefault();
      }

      // 非數字
      console.warn(`keydown ${e.key}`);
      e.preventDefault();
    },

    showPreventDefault(event) {
      // ? 在 keydown 執行 e.preventDefault() 取消事件 會造成打字無效
      // event.preventDefault();
      console.log(event);
      // console.log(event.cancelable);
      // ! mac 切換注音後 取消事件 使用會失效
      // ?解法 event.keyCode 中文都是 229

      if (event.keyCode === 229) {
        console.log(229)
        event.preventDefault();
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
  width: 300px;
  height: 24px;
}
</style>
