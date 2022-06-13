<template>
  <div id="app">
    <!-- <h1>投球 紀錄板</h1> -->
    <!-- <ScoreBoard1 
    :score="score" 
    @after-add-hit="afterAddHit" 
    @after-add-miss="afterAddMiss"  
    /> -->

    <!-- <ScoreBoard2 
    :score="score" 
    @is-add-miss="isAddMiss" 
    @is-add-hit="isAddHit" 
    /> -->

    <h1>子元件 投球 紀錄板 v-model</h1>
    <ScoreBoard3
    v-model="scoreA"
    :modified="modified"
    />

    <ScoreBoard4
    v-model="scoreA"
    />

    <h2>父元件 命中次數 / 投球次數 紀錄板</h2>
    <div class="add-hit-miss-content">
      <p>hit: {{ scoreA.hit }}</p>
      <p>shoot: {{ scoreA.shoot }}</p>
    </div>
    <button @click="updateHit"> 從父元件 改變 shoot & hit 值＋1 </button>
    <button @click="updateMiss"> 改變 shoot 值＋1 </button>
  </div>
</template>

<script>
// import ScoreBoard1 from './components/ScoreBoard1.vue'
// import ScoreBoard2 from './components/ScoreBoard2.vue'
import ScoreBoard3 from './components/ScoreBoard3.vue'
import ScoreBoard4 from './components/ScoreBoard4.vue'

export default {
  name: 'App',
  components: {
    // ScoreBoard1,
    // ScoreBoard2,
    ScoreBoard3,
    ScoreBoard4,
  },
  data(){
    return {
      scoreA: {
        hit: 0,
        shoot: 3
      },
      modified: ""
    }
  },
  created(){
    this.modified = new Date().toISOString()
    console.log(this.modified)
  },
  methods: {
    // 第一版 接 子元件傳遞資料 修改 父元件 data
    // afterAddMiss(shoot){
    //   console.log("afterAddMiss", shoot)
    //   this.score.shoot = shoot
    // },
    // afterAddHit(scoreBoard){
    //   console.log('afterAddHit', scoreBoard)
    //   this.score = scoreBoard
    // },
    // // 第二版 接 子元件觸發通知 父元件才修改資料
    // isAddMiss(){
    //   console.log('第二版')
    //   this.score.shoot++
    // },
    // isAddHit(){
    //   console.log('第二版')
    //   this.score.shoot++
    //   this.score.hit++
    // },
    // 第三版
    updateMiss(){
      this.scoreA.shoot++
      // console.log('第3版 當父元件自己的資料改變時')
      this.modified = new Date().toISOString()
      console.log(this.modified)
    },
    updateHit(){
      this.scoreA.shoot++
      this.scoreA.hit++
      // console.log('第3版 當父元件自己的資料改變時')
      this.modified = new Date().toISOString()
      console.log(this.modified)
    }
  }
}
</script>

<style >
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

button {
  /* width: 320px; */
  height: 50px;
  padding: 10px;
  margin-right: 20px;
  border-radius: 15px;
  background: #b5f0fd;
  border: none;
  color: #000;
  font-size: 20px;
}
</style>
