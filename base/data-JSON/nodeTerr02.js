// 使用類別宣告 建立一個人類物件
class Human {
  constructor(name, gender){
    this.name = name
    this.gender = gender
    this.left = null
    this.right = null
  }
}

const h = new Human("小明", "男")
const h1 = new Human("小明爸", "男")
const h2 = new Human("小明媽", "女")
const h3 = new Human("小明爺爺", "男")
const h4 = new Human("小明奶奶", "女")
// console.log(h)
// console.log(h1)
// console.log(h2)

// 建立 樹
let root = null
console.log('建立前', root)

// 判斷 human 男生放左邊、女生放右邊
const treeInsert = function (human) {
  // console.log("treeInsert 判斷", human)
  let pre = null // 上一個 previous
  let cur = root // 現在

  // 有根節點時 
  while (cur !== null) {
    pre = cur
    if (human.gender === "男") {
      cur = cur.left
    } else {
      cur = cur.right
    }
  }

  // 判斷 目前是否有指向 的 節點
  if (pre === null) {
    root = human // 指定 根節點
  } else if (human.gender === "男") {
    // pre.left = human // 判斷 要放左 或 右 ???
    cur.left = human // 判斷 要放左 或 右 ???
  } else {
    // pre.right = human
    cur.right = human
  }
}

treeInsert(h)
treeInsert(h1)
treeInsert(h2)
treeInsert(h3)
treeInsert(h4)

console.log('建立後', root)
