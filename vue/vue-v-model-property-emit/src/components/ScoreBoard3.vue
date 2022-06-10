<template>
<!-- 第3版 v-model -->
  <dir class="main">
    <span>投球命中率</span>
    <div class="top">
      <div class="hit-content">{{ averageScore3 }} %</div>
      <button class="hit-button" :value="1" 
      @click.stop.prevent="handleAddHitButtonClick">子元件 Hit+1</button>
    </div>
    <span>命中次數 / 投球次數</span>
    <div class="bottom">
      <div class="miss-content">{{ score.hit }} / {{ score.shoot }}</div>
      <button class="miss-button" 
      @click.stop.prevent="handleAddMissButtonClick"> 子元件 Miss+1</button>
    </div>
  </dir>
</template>

<script>
export default {
  name: "ScoreBoard3",
  // model屬性定義方法 更改 prop名稱 event事件
  model: {
    prop: 'value', // 預設是 value
    // event: 'input', // 預設監聽事件是 input
    event: 'input', // 預設監聽事件是 input
  },
  // 檢查验证 type型別 default默认值 required必填
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      // 傳址
      // score: this.value
      // 拷貝一份 傳進來的資料 傳值
      score: {}
    }
  },
  created(){
    console.log('created', this.score)
    this.getValue()
  },
  methods: {
    getValue(){
      this.score = { ... this.value }
      console.log('getValue')
      console.log(this.score)
    },
    handleAddHitButtonClick(){
      console.log("第3版 v-model 自動更新？")
      this.score.hit++
      this.score.shoot++
      this.$emit('input', this.score)
      // this.$emit('input')
    },
    handleAddMissButtonClick(){
      console.log('第3版 v-model')
      this.score.shoot++
      this.$emit('input', this.score)
    }
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  computed: {
    // 計算命中率
    averageScore3: function() {
      if (this.score.hit > 0 && this.score.shoot === 0) {
        return 0
      }

      let average = Math.round((this.score.hit / this.score.shoot) * 100)
      // console.log(average)
      return this.score.hit > 0 ? average : 0
    }
  },
  // wahch: {
  //   value(new_value, old_value) {
  //     console.log(new_value, old_value)
  //   }
  // }
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

.top, .bottom {
  width: 90%;
  height: 45%;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}

.hit-content, .miss-content {
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
