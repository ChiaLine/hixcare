<template>
  <div>
    <h3>練習寫不良的程式，耗費記憶體，並且說明原理</h3>
    <h3>Vue.js Memory Leak Example 内存泄漏示例 Vue.js</h3>
    <p>
      要查看内存泄漏，请打开 Chrome 任务管理器，然后单击隐藏/显示按钮 50
      次左右。
    </p>
    <p>您应该注意到内存继续增加并且没有被回收。</p>
    <p>有執行 new 時 要注意指向的區域 （全域性、區域性）</p>
    <p>執行 new時會瀏覽器要儲存空間暫存</p>
    <hr />

    <button v-if="showChoices" @click="hide">Hide</button>
    <button v-if="!showChoices" @click="show">Show</button>

    <div v-if="showChoices">
      <select
        id="choices-single-default"
        placeholder="This is a search placeholder"
      ></select>
    </div>
  </div>
</template>

<script>
import Choices from "choices.js";

export default {
  name: " MemoryLeak01",
  data() {
    return {
      showChoices: true,
      choicesSelect: null,
    };
  },
  mounted: function () {
    this.initializeChoices();
  },
  methods: {
    initializeChoices: function () {
      let list = [];
      // 让我们用许多选择加载我们的选择 所以会占用大量内存
      for (let i = 0; i < 1000; i++) {
        list.push({
          label: "Item " + i,
          value: i,
        });
      }

      //! 在移除時 沒有處理 new出來的DOM 導致持續累積記憶體使用量
      // new Choices("#choices-single-default", {
      //   searchEnabled: true,
      //   removeItemButton: true,
      //   choices: list,
      // });

      //? 在 Vue 实例的数据对象中设置对我们的choicesSelect 的引用
      //! 記憶體佔用 new 指向 window 
      this.choicesSelect = new Choices("#choices-single-default", {
        // 建立設定元素功能 & 樣式
        searchEnabled: true, // 是否应显示搜索区域。 注意：多个选择框将始终显示搜索区域。
        removeItemButton: true, //  每个项目是否应该有一个删除按钮。
        choices: list, // 選項清單
      });
    },
    show: function () {
      this.showChoices = true;
      this.$nextTick(() => {
        this.initializeChoices();
      });
    },
    hide: function () {
      //? 现在我们可以使用对 Choices 的引用来执行清理
      // ! 在从 DOM 中移除元素之前 先做清理動作
      this.choicesSelect.destroy();
      // 研究 delete 用法
      // delete this.choicesSelect;
      this.showChoices = false;
    },
    //? 解決基於應用程序中同類問題 將清理工作移到beforeDestroy()鉤子中
    beforeDestroy: function () {
      // console.log("beforeDestroy hide");
      this.choicesSelect.destroy();
    },
    //? 使用了 keep-alive，兩個生命週期鉤子：activated和deactivated.
    deactivated: function () {
      // 删除您不想保留的任何数据
      // ?想刪除保持活動組件時清理或更改數據，您可以在deactivated掛鉤中執行此操作。
    },
  },
};
</script>
