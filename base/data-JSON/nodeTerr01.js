const data = {
  name: "小明",
  gender: "男",
  left: {
    name: "小明爸爸",
    gender: "男",
    left: {
      name: "小明祖父",
      gender: "男",
      left: {
        name: "小明曾祖父",
        gender: "男",
        left: null,
        right: null
      },
      right: {
        name: "小明曾祖母",
        gender: "女",
        left: null,
        right: null
      }
    },
    right: {
      name: "小明祖母",
      gender: "女",
      left: {
        name: "小明外曾祖父",
        gender: "女",
        left: null,
        right: null
      },
      right: {
        name: "小明外曾祖母",
        gender: "女",
        left: null,
        right: null
      }
    }
  },
  right: {
    name: "小明媽媽",
    gender: "女",
    left: {
      name: "小明外祖父",
      gender: "男",
      left: {
        name: "小明外曾祖父",
        gender: "女",
        left: null,
        right: null
      },
      right: {
        name: "小明外曾祖母",
        gender: "女",
        left: null,
        right: null
      }
    },
    right: {
      name: "小明外祖母",
      gender: "女",
      left: {
        name: "小明外曾祖父",
        gender: "女",
        left: null,
        right: null
      },
      right: {
        name: "小明外曾祖母",
        gender: "女",
        left: null,
        right: null
      }
    }
  }
}



let root = null // 根節點
let path = "" // 紀錄走到哪裡  路徑
let queue = []

console.log(root)
console.log(root = data)


// 遍歷的方式
// 中、左、右（深度優先）
function preOrder(node) {
  console.log(1)
  if (node !== null) {
    path += node.name + " "
    preOrder(node.left)
    preOrder(node.right)
  }
}

preOrder(data)
console.log(path)