// const srcInst = { a: 1 };

// const destInst = Object.assign({}, srcInst); // 複製物件
// const destInst2 = Object.assign({ a: 0, b: 0 }, srcInst); // 複製並且填滿預設值(寫死預設值)

// console.log('原本：', srcInst, '複製：', destInst)
// console.log('原本：', srcInst, '複製並且填滿預設值', destInst2)

// console.log(JSON.stringify(destInst, null, 2)); // 印出 JSON 格式
// console.log(JSON.stringify(destInst2, null, 2)); // 印出 JSON 格式

const defaultInst = { a: 0, b: 0 };
const srcInst = { a: 1 };
const destInst = Object.assign(defaultInst, srcInst);
console.log(destInst);
console.log(srcInst);
console.log(defaultInst);

// lodash????
// const _ = require("lodash");
// const defaultInst = { a: 0, b: 0 };
// const srcInst = { a: undefined };
// const destInst = _.cloneDeep(srcInst)
// _.defaults(destInst, defaultInst);
// console.log(JSON.stringify(destInst, null, 2))