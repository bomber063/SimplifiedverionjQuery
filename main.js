window.Node2 = function(node){
  return {
    getSibings: function () {
      var allchirdren = node.parentNode.children
      var arr = {
        length: 0
      }
      for (i = 0; i < allchirdren.length; i++) {//该循环是为了是想一个伪数组
        if (allchirdren[i] !== node) {
          arr[arr.length] = allchirdren[i]
          arr.length += 1
        }
      }
      return arr
    },
    addClass: function (classes) {
      classes.forEach((value) => node.classList.add(value))
    }
  }
}

var node2 = Node2(item1)
node2.getSibings()//这里因为getSibings刚好就代表了一个函数，那么可以不用写出括号，当然写出括号，括号里面不带值也是一样的效果
node2.addClass(['red', 'border'])
