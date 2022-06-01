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

// console.log(root)
// console.log(root = data)

// BFTT（廣度優先）
function bftt(node){
  if(node !== null) {
    queue.push(node)

    for(let i = 0; i < queue.length; i++) {
      let currentNode = queue[i]

      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
    }

  }
}

// DFTT（深度優先）
// 遍歷的方式 中、左、右
function preOrder(node) {
  if (node !== null) {
    path += node.name + " "
    preOrder(node.left)
    preOrder(node.right)
  }
}

//遍歷的方式 左、中、右
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left)     // left
    path += node.name + " "  // root
    inOrder(node.right)    // right
  }
}

//遍歷的方式 左、右、中
function postOrder(node) {
  if (node !== null) {
    postOrder(node.left)
    postOrder(node.right)
    path += node.name + " "
  }
}

// bftt(data)
// console.log(queue)

// preOrder(data)
// inOrder(data)
// postOrder(data)
console.log(path)