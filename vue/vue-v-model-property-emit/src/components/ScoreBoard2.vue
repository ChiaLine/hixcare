<template>
<!-- 第二版 -->
  <dir class="main">
    <span>投球命中率</span>
    <div class="top">
      <div class="hit-content">{{ averageScore2 }} %</div>
      <button class="hit-button" @click.stop.prevent="handleAddHitButtonClick">Hit</button>
    </div>
    <span>命中次數 / 投球次數</span>
    <div class="bottom">
      <div class="miss-content">{{ score.hit }} / {{ score.shoot }}</div>
      <button class="miss-button" @click.stop.prevent="handleAddMissButtonClick">Miss</button>
    </div>
  </dir>
</template>

<script>
export default {
  name: "ScoreBoard",
  props: {
    score: Object,
  },
  methods: {
    // 父元件掛監聽 子元件傳遞 資料
    handleAddHitButtonClick(){
      console.log("第二版")
      this.$emit("is-add-hit")
    },
    handleAddMissButtonClick(){
      console.log('第二版')
      this.$emit("is-add-miss")
    }
  },
  computed: {
    // 計算命中率
    averageScore2: function() {
      let average = Math.round((this.score.hit / this.score.shoot) * 100)
      console.log(average)
      return this.score.hit > 0 ? average : 0
    }
  }
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
  height: 50px;
  border-radius: 15px;
  background: #cddcee;
  border: none;
  color: #000;
  font-size: 20px;
}
</style>
