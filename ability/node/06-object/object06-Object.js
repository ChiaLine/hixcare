// 家庭成員～  複製方法的 使用判斷時機 
// ! 在於需不需要使用 undefined & null 情境 來覆蓋預設值
// ? 效能排行: { ... } > Object.assign() > lodash > JSON
const _ = require("lodash")

const family = {
  father: "爸爸",
  mother: "媽媽",
  child: "小明"
  // child: 0
  // child: undefined
  // child: null
}

const add = {
  // child: "小明"
  // child: undefined
  child: null
}

console.log('------------ ...展開運算子 ------------')
const destInst1 = { ...family, ...add } // 展開運算子... 淺 第一層
console.log(destInst1)

console.log('家庭基本成員 --複製 --預設值 --新增成員')
console.log('------------ Object.assign ------------')
const destInst = Object.assign({}, family) // ! 要注意 傳址 非 傳值 情況
Object.assign(destInst, add)
console.log(destInst)

console.log('------------ _lodash底線 ------------')
// ! 可以阻擋 undefined 使用預設值
const destInst2 = _.cloneDeep(family) // 複製 深
_.defaults(destInst2, add) //合併
console.log(destInst2)

console.log('------------ JSON ------------')
const destInst3 = JSON.parse(JSON.stringify(family));
console.log(destInst3)
console.log(JSON.stringify(destInst3, null, 2));
