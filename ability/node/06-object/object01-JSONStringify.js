// JSON.stringify() 将一个 JavaScript 对象或值转换为 JSON 字符串
// 參數 1 對象是誰
// 參數 2 如该参数为 null 或未提供，则对象所有的属性都会被序列化
// 參數 3 指定缩进用的空格多少

console.log('JSON---函数、undefined 被单独转换时，会返回 undefined----') 
console.log(JSON.stringify(undefined)) // ! 被单独转换时，会返回 undefined
console.log(JSON.stringify(function () { })) 

console.log('JSON---出现在数组中时 undefined function Symbol 转换成 null-------')
console.log(JSON.stringify({ x: [10, undefined, function () { }, Symbol('')] }));


console.log('-----當值 有 數字 字串 null undefined [] {} function Symbol 時-------')
const srcInst = { a: 1, b: "字串", c: null, d: undefined, e: [], f: {}, g: function () { }, h: Symbol(), i: "egg" }
const destInst = Object.assign({}, srcInst)
console.log('destInst:', destInst)
console.log('----注意被轉換 JSON 時會被忽略 的值 ----出现在非数组对象---')
console.log(JSON.stringify(destInst, null, 2)) // ! 注意 在被轉換時會被忽略 的值 
