// Object.assign() 回傳的值為 合併目標物件及(多個)來源物件所得到的最終物件
// 用來複製一個或多個物件自身所有可數的屬性到另一個目標物件
// 參數 1 目標物件是誰
// 參數 2 來源物件是誰

console.log('-----複製-----------')
// const srcInst = { a: 1 };
// const destInst = Object.assign({}, srcInst);
// console.log(JSON.stringify(destInst, null, 2));

console.log('-----複製並且填滿預設值---- 寫死預設值 -----------')
// const srcInst = { a: 1 };
// const destInst = Object.assign({ a: 0, b: 0 }, srcInst); // ! key相同時 後者會覆蓋前者
// console.log(JSON.stringify(destInst, null, 2));


console.log('-----複製並且填滿預設值---- 模板預設值 -----------')
// const defaultInst = { a: 0, b: 0 };
// const srcInst = { a: 1 };
// const destInst = {};
// Object.assign(destInst, defaultInst);
// console.log(JSON.stringify(destInst, null, 2));
// Object.assign(destInst, srcInst);
// console.log(JSON.stringify(destInst, null, 2));


console.log('-----複製並且填滿預設值---- 錯誤示範 -----------')
const defaultInst = { a: 0, b: 0 }; // 目標對象
const srcInst = { a: 1 }; // 來源對象
const destInst = Object.assign(defaultInst, srcInst); // ! 淺層 複製
console.log(destInst);
console.log(srcInst);
console.log(defaultInst); // 值 會被覆蓋



console.log('----------- 物件 複製時 要注意 淺層 ＆ 深層 -----------')
function test() {
  let a = { b: { c: 4 }, d: { e: { f: 1 } } }
  let g = Object.assign({}, a) // 淺層 複製
  let h = JSON.parse(JSON.stringify(a)); // 深層 複製
  console.log(g.d) // { e: { f: 1 } }
  g.d.e = 32
  console.log('g.d.e set to 32.') // g.d.e set to 32.
  console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  console.log(h) // { b: { c: 4 }, d: { e: { f: 1 } } }
  h.d.e = 54
  console.log('h.d.e set to 54.') // h.d.e set to 54.
  console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  console.log(h) // { b: { c: 4 }, d: { e: 54 } }
}
test();


console.log('----------- 物件 複製時 要注意 淺層 ＆ 深層 -----------')
const egg = { a: { b: 9 }, c: 1 }
const eg = Object.assign({}, egg)
const e = JSON.parse(JSON.stringify(eg, null))
console.log(egg)
console.log(eg)
console.log(e)
eg.c = 8
eg.a.b = 13
console.log(egg)
console.log(eg)
console.log(e)
