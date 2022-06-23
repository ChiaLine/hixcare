<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h3>Vue 應用程序中的內存洩漏通常不是來自 Vue 本身，而是在將其他庫合併到應用程序中時發生</h3>
    <h3>這個例子的問題是該 v-if指令 從 DOM 中刪除了父元素</h3>
    <h3>但是沒有主動清理 由 Choices.js 創建的額外 DOM 片段，從而導致內存洩漏，佔用記憶體空間</h3>
    <hr />
    <!-- 官方的練習 -->
    <MemoryLeak01 />
  </div>
</template>

<script>
import MemoryLeak01 from "./components/MemoryLeak01.vue";

export default {
  name: "App",
  components: {
    MemoryLeak01,
  },
};
</script>

<style>
#app {
  margin: 10px 0px 0px 40px;
}

.choices {
  width: 300px;
  margin-top: 10px;
}

button {
  background-color: white;
  border: 1px solid;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
}
</style>
