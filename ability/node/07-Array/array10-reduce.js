// 移除陣列中的重複項目
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
// sort() 自動排序內容
let result = arr.sort().reduce((init, current) => {
  // console.log("init", init, current)
  if (init.length === 0 || init[init.length - 1] !== current) {
    init.push(current);
  }
  return init;
}, []);

console.log("-------- 移除陣列中的重複項目 ---------")
console.log(result); //[1,2,3,4,5]
