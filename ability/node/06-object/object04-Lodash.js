// ! 官方文件 https://www.lodashjs.com/ 
// ? lodash 安裝、引入使用   
// _.cloneDeep(value) 会递归拷贝 value 深拷贝
// _.defaults(object, [sources])  目标对象、来源对象

const _ = require("lodash");

// console.log('-----  _.cloneDeep() 複製 -----------')
// const srcInst = { a: 1 };
// const destInst = _.cloneDeep(srcInst); // 深拷贝
// console.log(JSON.stringify(destInst, null, 2));


console.log('-----複製並且填滿預設值---- 寫死預設值 -----------')
const srcInst1 = { a: 1 };
const destInst1 = _.cloneDeep(srcInst1)
_.defaults(destInst1, { a: 0, b: 0 }); // 合併
console.log(JSON.stringify(destInst1, null, 2));


console.log('-----複製並且填滿預設值---- 模板預設值 -----------')
const defaultInst2 = { a: 0, b: 0 };
const srcInst2 = { a: 1 };
const destInst2 = _.cloneDeep(srcInst2)
_.defaults(destInst2, defaultInst2);
console.log(JSON.stringify(destInst2, null, 2));

console.log('-----  錯誤示範 -----------')
const defaultInst3 = { a: 0, b: 0 };
const srcInst3 = { a: 1 };
const destInst3 = _.defaults(srcInst3, defaultInst3); 
console.log(destInst3);
console.log(srcInst3);
console.log(defaultInst3);

console.log('----- 不理想值為 null 無效 undefined 有效 能被預設值替代 -----')
const defaultInst = { a: 0, b: 0 };
// const srcInst = { a: undefined };
const srcInst = { a: null };
const destInst = _.cloneDeep(srcInst)
_.defaults(destInst, defaultInst);
console.log(JSON.stringify(destInst, null, 2))
