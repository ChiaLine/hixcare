// 展開運算子... 複製
console.log('----- 展開運算子... 複製 -----------')
// const srcInst = { a: 1 };
// const destInst = { ...srcInst };
// console.log(JSON.stringify(destInst, null, 2));

console.log('-----複製並且填滿預設值---- 寫死預設值 -----------')
const srcInst1 = { a: 1 };
const destInst1 = { a: 0, b: 0, ...srcInst1 };
console.log(JSON.stringify(destInst1, null, 2));


console.log('-----複製並且填滿預設值---- 模板預設值 -----------')
const defaultInst2 = { a: 0, b: 0 };
const srcInst2 = { a: 1 };
const destInst2 = { ...defaultInst2, ...srcInst2 };
console.log(JSON.stringify(destInst2, null, 2));



