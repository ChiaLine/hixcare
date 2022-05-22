// 使用類別宣告 建立一個點
class Node {
  constructor(key){
    this.key = key
    this.left = null
    this.right = null
  }
}

// 建立一個二元樹（與root比、左要小、右要大）
class BinarySearchTree {
  constructor() {
    this.root = null // 根節點
    this.path = "" // 紀錄走到哪裡  路徑
    this.queue = [] 
  }
  
  // 判斷 node 放入 左 或 右
  treeInsert(node) {
    let pre = null // 上一個
    let cur = this.root // 當前

    // 
    while (cur !== null) {
      pre = cur 
      if (node.key < cur.key) {
        cur = cur.left
      } else {
        cur = cur.right
      }
    }
    
    // 無 root時
    if ( pre === null) {
      this.root = node
    } else if (node.key < pre.key) {
      pre.left = node
    } else {
      pre.right = node
    }
  }
  
  // 尋找 某一筆要的資料
  searchRecursively(x, key) {
    // 
    if (x === null || key === x.key) {
      return x
    } else if (key < x.key) {
      return this.searchRecursively(x.left, key)
    } else {
      return this.searchRecursively(x.right, key)
    }
  }

  //
  searchIteratively(x, key) {
    while (x !== null && key !== x.key) {
      if ( key < x.key) {
        x = x.left
      } else {
        x = x.right
      }
    }

    if (x === null) {
      console.log("Node not found 不成立")
    } else {
      console.log("Node found 成立")
    }
    return x
  }

  // 遍歷的方式
  // 中、左、右（深度優先）
    preOrder(node) {
      if (node !== null) {
        this.path += node.key + " "
        this.preOrder(node.left)
        this.preOrder(node.right)
      }
    }
    
    // 左、中、右
    inOrder(node) {
      if (node !== null) {
        this.inOrder(node.left)
        this.path += node.key + " "
        this.inOrder(node.right)
      }
    }
    
    // 左、右、中
    postOrder(node) {
      if (node !== null) {
        this.postOrder(node.left)
        this.postOrder(node.right)
        this.path += node.key + " "
      }
    }
    
    // 每層(寬度優先)
    bftt(node) {
      if (node !== null) {
        this.queue.push(node)
        for(let i = 0; i < this.queue.length; i++) {
          let currentNode = this.queue[i]
          if (currentNode !== null) {
            if (currentNode.left !== null) {
              this.queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
              this.queue.push(currentNode.right)
            }
          }
        }
      }
    }
}


// 建立 二元樹
let bst = new BinarySearchTree()
// console.log('建立前', bst)
bst.treeInsert(new Node(15))
bst.treeInsert(new Node(6))
bst.treeInsert(new Node(5))
bst.treeInsert(new Node(1))
bst.treeInsert(new Node(13))
bst.treeInsert(new Node(-7))
bst.treeInsert(new Node(3))
// console.log('建立後：', bst)

// input -> new Node(15), new Node(6) ... new Node(3)
// logic -> tree node root

// 四種 遍歷 樹 方法 (深度優先)
bst.preOrder(bst.root)
console.log('preOrder:' , bst.path)

// bst.inOrder(bst.root)
// console.log('inOrder:' , bst.path)

// bst.postOrder(bst.root)
// console.log('postOrder:' , bst.path)

// 每層 (寬度優先)
bst.bftt(bst.root)
console.log(bst.queue)


// 查找某個樹節點 不存在則回傳 null
let result = bst.searchRecursively(bst.root, -7)
console.log('查找某個樹節點:', result)

// let result = bst.searchIteratively(bst.root, -7)
// console.log('searchIteratively:' ,result)
