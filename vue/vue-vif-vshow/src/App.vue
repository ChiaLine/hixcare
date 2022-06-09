<template>
  <div id="app">
    <h1>使用 v-for + v-if 與 v-show 的差異</h1>
    <h1>湘北籃球隊計分板</h1>
    <!-- showError() 執行時內部＆回傳值出錯 -->
    <h3> 1-表格模式 使用 computed 屬性先行過濾 [...] 髒資料 在 for項目出來 </h3>
    <div v-show="players.length">
      <table>
        <thead>
          <tr>
            <th>球員</th>
            <th>得分</th>
            <th>籃板</th>
            <th>助攻</th>
            <th>抄截</th>
            <th>阻攻</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(player, index) in playersFilter"  :key="index" >
            <td >{{ player.name }}</td>
            <td >{{ player.pts }}</td>
            <td >{{ player.reb }}</td>
            <td >{{ player.ast }}</td>
            <td >{{ player.stl }}</td>
            <td >{{ player.blk }}</td>
            <!-- <td >{{ player === null ? "" : player.name  }}</td> -->
            <!-- <td v-if="player !== null">{{ player.name  }}</td> -->
            <!-- <td v-if="player !== null && player !== undefined">{{ player.pts }} </td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <h3>2-div模式 使用 v-for + v-if 函式條件判斷來確定資料乾淨再渲染 </h3>
    <div v-for="(player, index) in players"  :key="index">
    <!-- 注意 v-show 會無法先確定資料乾淨時 就導致渲染失敗空白 -->
      <!-- <div v-show="getPlayersFilter(player)"> -->
      <div v-if="getPlayersFilter(player)">
        <span>{{ player.name }}</span>
        <span>{{ player.pts }}</span>
        <span>{{ player.reb }}</span>
        <span>{{ player.ast }}</span>
        <span>{{ player.stl }}</span>
        <span>{{ player.blk }}</span>
      </div>
    </div>

    <!-- v-if分組 測試 -->
    <template v-if="-1">
      <h1>v-if + template 分組A 條件成立 -1</h1>
    </template>
    <template v-else>
      <h1>v-else + template分組B 條件不成立</h1>
    </template>
    <h1 v-if="type === 'A'">A</h1>
    <h1 v-else-if="type === 'B'">B</h1>
    <h1 v-else-if="type === 'C'">C</h1>
    <h1 v-else>v-else 條件都不成立 Not A/B/C</h1>

    <!-- v-show 測試值 -->
    <h1 v-show="!null">v-show 條件成立 !null</h1>
    <h1 v-show="!undefined">v-show 條件成立 !undefined</h1>
    <h1 v-show="!NaN">v-show 條件成立 !NaN</h1>
    <h1 v-show="!0">v-show 條件成立 !0</h1>
    <h1 v-show="!''">v-show 條件成立 !''</h1>
    <h1 v-show="-1">v-show 條件成立 -1</h1>
    <h1 v-show="[]">v-show 條件成立 [ ]</h1>
    <h1 v-show="{}">v-show 條件成立 { }</h1>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {},
  data() {
    return {
      // ? 自動轉換 t＆f
      // qqq: [],
      // qqq: NaN,
      // ! 類型錯誤
      // qqq: null,
      // qqq: undefined,
      type: "G",
      isShow: null,
      egg: [
        {
          name: undefined,
          age: 12,
          show: null,
        },
      ],
      players: [
        { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
        { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
        null,
        { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
        { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
        { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 },
      ],
    };
  },
  created() {},
  methods: {
    clickModal() {
      console.log(this.isShow);
      this.isShow = !this.isShow;
      console.log("app clickModalToggle", this.isShow);
    },
    show() {
      setTimeout(() => {
        console.log("show setTimeout", this.isShow);
        this.isShow = !this.isShow;
      }, 2000);
    },
    showError() {
      // ! 成功編譯、渲染失敗、當值為 undefined、null時 執行類型錯誤
      // return this.qqq
      // return this.qqq[0]
      // return this.qqq.name;

      // ? 編譯失敗、不存在的 abc未定義
      // return abc.name

      // ! 成功編譯、渲染失敗、js拋出錯誤
      // return this.egg
      // return this.eg()
      // this.abc();
      // throw "使用 throw 拋出例外錯誤";
      // throw new Error( "使用 throw new Error() 拋出例外錯誤")

      // ! 成功編譯＆渲染、js印出錯誤
      // console.error('使用console.error()報錯')

      // ? 成功編譯＆渲染、js執行正常 undefined值會被當作 false
      // return undefined
      // return undefined
      // return NaN;

      // const res = this.egg.find(n => n.name === 'egg')
      // return res

      // return {
      //   name: undefined,
      //   age: 12,
      //   show: null
      // }

      // ? 成功編譯＆渲染、js執行正常 !undefined值 = true
      // return true
      // return [undefined, undefined]

      // const res = this.egg.map(() => {})
      // return !res[0]
    },
    getPlayersFilter(player){
      if (player !== null) {
        return true
      }

      return false
    }
  },
  computed: {
    playersFilter: function() {
      return this.players.filter(p => {
        return p !== null
      })
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

/* 強制蓋過 v-show 效果 利用 css權重特性 */
/* important > 內聯 > Id > Class > 標籤 ... */
.back {
  display: block !important;
}

span {
  margin-right: 20px;
}

</style>
