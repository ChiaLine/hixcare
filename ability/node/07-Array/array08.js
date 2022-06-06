// 取交集
const array1 = [0, 1, 2, 3, 4, 5]
// const array2 = [0, 2, 6, 7] // 0 2
const array2 = [7, 8, 9] // 無


console.log("-------- 取交集 ---------")
const intersectedItems = array1.filter(value => array2.includes(value))
console.log(intersectedItems)


console.log("-------- 是否有交集項目 ---------")
const intersected = array1.some(value => array2.includes(value))
console.log(intersected)
