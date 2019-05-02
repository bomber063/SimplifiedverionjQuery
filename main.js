function getSibings(node) {
  var allchirdren = item1.parentNode.children

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
}



function addClass(node, classes) {

  for (let key in classes) {
    var value = classes[key]
    var methodName=value?'add':'remove'//用三元运算代替if...else
    node.classList[methodName](key)
  }
}

window.honghong={}//增加命名空间honghong 
honghong.getSibings=getSibings//getSibings才是函数，getSibings()是调用该函数
honghong.addClass=addClass
honghong.getSibings(item1)
honghong.addClass(item3, { 'red': true, 'border': true })

