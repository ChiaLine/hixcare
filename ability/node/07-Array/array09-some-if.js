// if ＋ some 檢查是否有符合條件的資料
// ! 要注意使用查找方法時 失敗會回傳的 -1 
// ? 搭配 if時 建議使用 some方法 查找

console.log("-------- 0 ---false------")
if (0) {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("-------- '' ----false-----")
if ('') {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("-------- NaN ----false-----")
if (NaN) {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("-------- null ----false-----")
if (null) {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("-------- undefined ----false-----")
if (undefined) {
  console.log("true 進入")
} else {
  console.log(false)
}

// ! 要注意使用查找方法時 失敗會回傳的 -1 
// ? 搭配 if時 要注意 
console.log("-------- -1 -----true----")
if (-1) {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("-------- 1 ----true-----")
if (1) {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("-------- Infinity ----true-----")
if (Infinity) {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("--------  -Infinity ----true-----")
if (-Infinity) {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("--------  [] -----true----")
if ([]) {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("--------  {} ----true-----")
if ({}) {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("--------  '...' ---------")
if ('...') {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("--------  '000' ----true-----")
if ('000') {
  console.log("true 進入")
} else {
  console.log(false)
}

console.log("--- #  SyntaxError 语法错误 ----")
// if (#) {
//   console.log("true 進入")
// } else {
//   console.log(false)
// }

console.log("-------- ? ---------")
// if (?) {
//   console.log("true 進入")
// } else {
//   console.log(false)
// }

console.log("-------- a ReferenceError 参考错误 未定義---------")
// if (a) {
//   console.log("true 進入")
// } else {
//   console.log(false)
// }