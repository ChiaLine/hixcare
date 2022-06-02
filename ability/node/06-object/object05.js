// ! 官方文件 https://www.lodashjs.com/ & https://www.npmjs.com/package/fast-printf
// ? lodash 安裝、引入使用 & npm i fast-printf 安裝、引入使用   
// 排行: { ... } > Object.assign() > lodash > JSON

const _ = require("lodash");
const fpf = require("fast-printf");
const printf = (...test) => {
  console.log(fpf.printf(...test))
}

const FILL_DEFAULTS = true;
const LOOP = 1000000;

const defaultInst = { a: 0, b: 0 };
const srcInst = { a: 1 };
let begin, end1, end2, end3;

// { ... }
begin = new Date();
for (let i = 0; i < LOOP; i++) {
  if (FILL_DEFAULTS) {
    const destInst = { ...defaultInst, ...srcInst };
  } else {
    const destInst = { ...srcInst };
  }
}
end1 = new Date() - begin;

// Object.assign()
begin = new Date();
for (let i = 0; i < LOOP; i++) {
  const destInst = {};
  if (FILL_DEFAULTS) {
    Object.assign(destInst, defaultInst);
  }
  Object.assign(destInst, srcInst);
}
end2 = new Date() - begin;

// lodash
begin = new Date();
for (let i = 0; i < LOOP; i++) {
  const destInst = _.cloneDeep(srcInst);
  if (FILL_DEFAULTS) {
    _.defaults(destInst, defaultInst);
  }
}
end3 = new Date() - begin;

// JSON
if (!FILL_DEFAULTS) {
  begin = new Date();
  for (let i = 0; i < LOOP; i++) {
    const destInst = JSON.parse(JSON.stringify(srcInst));
  }
  end4 = new Date() - begin;
}

console.log('-------------------------------------------')
if (FILL_DEFAULTS) {
  console.log('             clone + defaults         ')
} else {
  console.log('                clone only            ')
}
console.log('-------------------------------------------')
printf('       Spread Operator {...}: %4d (x%.2f)', end1, 1)
printf('             Object.assign(): %4d (x%.2f)', end2, end2 / end1)
printf('                      lodash: %4d (x%.2f)', end3, end3 / end1)
if (!FILL_DEFAULTS) {
  printf('JSON.parse(JSON.stringify()): %4d (x%.2f)', end4, end4 / end1)
}