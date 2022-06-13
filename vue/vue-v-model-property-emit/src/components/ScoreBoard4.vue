<template>
  <!-- 當子改變時 綁定父改變-->
  <!-- 父使用 v-model傳遞值 子使用$emit(v-model預設監聽,回傳改變的值) -->
  <!-- 當父改變時 綁定子改變 -->
  <!-- 子使用 computed 用來同步 value 數值 -->
  <dir class="main">
    <span>投球命中率</span>
    <div class="top">
      <div class="hit-content">{{ averageScore4 }} %</div>
      <button
        class="hit-button"
        :value="1"
        @click.stop.prevent="handleAddHitButtonClick"
      >
        子元件 Hit+1
      </button>
    </div>
    <span>命中次數 / 投球次數</span>
    <div class="bottom">
      <div class="miss-content">{{ valueSync.hit }} / {{ valueSync.shoot }}</div>
      <button
        class="miss-button"
        @click.stop.prevent="handleAddMissButtonClick"
      >
        子元件 Miss+1
      </button>
    </div>
  </dir>
</template>

<script>
export default {
  name: "ScoreBoard4",
  // ? model屬性：可更改 prop名稱 event監聽事件
  model: {
    prop: "value", // ! 預設是 value
    event: "input", // ! 預設監聽事件 input
  },
  // ? props屬性：檢查傳入的資料、設定
  props: {
    value: {
      type: Object, // 型別
      // default: 默认值
      // required: 資料是否必填
    },
  },
  data() {
    return {
      // score: this.value // ? 此寫法-直接指向同個記憶體 不獨立-傳址
      score: {}, // ? 先拷貝 再傳資料 為獨立-傳值
    };
  },
  //? computed 屬性動態處理 data資料的呈現
  // ! 在每次渲染時都會觸發 computed
  computed: {
    //? 仅读取
    averageScore4: function () {
      if (this.score.hit > 0 && this.score.shoot === 0) {
        return 0;
      }
      let average = Math.round((this.score.hit / this.score.shoot) * 100); // 計算命中率
      // console.log(average)
      return this.score.hit > 0 ? average : 0;
    },
    valueSync: {
      // ? 用來同步 value 數值
      get() {
        console.log('computed觸發 valueSync更新 ')
        this.getValue()
        return this.score //! 读取
      },
      // ? 觸發點 需先綁定v-mo在元素上 值改變才觸發
      // set(value) {
      //   console.log(value)
      //   this.$emit('input', value) //! 设置 
      // }
    }
  },
  //? 方法區
  methods: {
    getValue() {
      // 複製一份 傳進來的 value 避免修改到預設值
      this.score = { ...this.value };
    },
    handleAddHitButtonClick() {
      this.score.hit++;
      this.score.shoot++;
      //! $emit傳遞值 監聽更新 父元件資料
      this.$emit("input", this.score); 
    },
    handleAddMissButtonClick() {
      this.score.shoot++;
      this.$emit("input", this.score);
    },
  },
};
</script>

<style scoped>
.main {
  width: 600px;
  margin: 0 auto;
  padding: 10px;
  border: 3px solid #000;
  border-radius: 25px;
  text-align: left;
}

.top,
.bottom {
  width: 90%;
  height: 45%;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}

.hit-content,
.miss-content {
  background: #f5f5f5;
  width: 60%;
  border-radius: 25px;
  font-size: 50px;
  line-height: 130px;
}

span {
  font-size: 20px;
  font-weight: 500;
  margin-left: 80px;
}

button {
  width: 100px;
  height: 70px;
  border-radius: 15px;
  background: #cddcee;
  border: none;
  color: #000;
  font-size: 20px;
}
</style>
