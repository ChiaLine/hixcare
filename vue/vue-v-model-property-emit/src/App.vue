<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>投球 紀錄板</h1>
    <ScoreBoard :score="score" 
    @after-add-hit="afterAddHit" 
    @after-add-miss="afterAddMiss" 
    @is-add-miss="isAddMiss" 
    @is-add-hit="isAddHit" 
    
    />

    <div class="add-hit-miss-content">
      <p>hit: {{ score.hit }}</p>
      <p>shoot: {{ score.shoot }}</p>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ScoreBoard from './components/ScoreBoard.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    ScoreBoard
  },
  data(){
    return {
      score: {
        hit: 7,
        shoot: 10
      }
    }
  },
  methods: {
    // 第一版 接 子元件傳遞資料 修改 父元件 data
    afterAddMiss(shoot){
      console.log("afterAddMiss", shoot)
      this.score.shoot = shoot
    },
    afterAddHit(scoreBoard){
      console.log('afterAddHit', scoreBoard)
      this.score = scoreBoard
    },
    // 第二版 接 子元件觸發通知 父元件才修改資料
    isAddMiss(){
      this.score.shoot++
    },
    isAddHit(){
      this.score.shoot++
      this.score.hit++
    }
  }
}
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

.add-hit-miss-content {
  width: 600px;
  height: 60px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

p {
  border: 2px solid #000;
  border-radius: 25px;
  width: 45%;
  font-size: 35px;
}
</style>
