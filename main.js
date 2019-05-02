window.honghong = {}//增加命名空间honghong 
honghong.getSibings = function (node) {
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

honghong.addClass = function (node, classes) {
  classes.forEach((value) => node.classList.add(value))
}

honghong.getSibings(item1)
honghong.addClass(item3, ['red', 'border'])