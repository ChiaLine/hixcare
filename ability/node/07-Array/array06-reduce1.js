// Method	用途 前後關聯計算  常見用於將陣列中所有數字累加起來
// Array.prototype.reduce()	 // ! 可放兩個參數 reduce(函式, 預設值) 
// ? 將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值
// 假如 initialValue 預設值 未被提供，reduce() 將會跳過第一個陣列索引，從陣列索引 1 開始執行
// 若有提供 initialValue 預設值，則會由陣列索引 0 開始執行
// ? 函式運算 可傳入4個參數(accumulator, currentValue, currentIndex, array)
// ? 每次計算的結果會再與下個元素作計算，直到結束為止 prev (前一個), next (後一個)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] // 合計 78

console.log("-------- reduce  沒有條件 & return，會是 undefined  ---------")
var reduceEmpty = numbers.reduce(function (accumulator, currentValue, currentIndex, array) {

})
console.log(reduceEmpty)

console.log("------- 分別為前一個回傳值, 目前值, 當前索引值 總和為 78  ---------")
var reducePlus = numbers.reduce(function (accumulator, currentValue, currentIndex, array) {
  // 分別為前一個回傳值, 目前值, 當前索引值
  console.log(accumulator, currentValue, '索引', currentIndex)
  return accumulator + currentValue  // 與前一個值相加
}, 0);                                    // 傳入初始化值為 0
console.log(reducePlus);                  // 總和為 78

console.log("-------- reduce 與前一個值比較哪個大 最大值為 12 ---------")
var reducePlus = numbers.reduce(function (accumulator, currentValue, currentIndex, array) {
  console.log('reduce', accumulator, currentValue, currentIndex)
  return Math.max(accumulator, currentValue) // 與前一個值比較哪個大
}, 0);
console.log(reducePlus)
