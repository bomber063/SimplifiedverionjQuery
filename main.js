window.honghong = {}//增加命名空间honghong 

Node.prototype.getSibings = function () {
  var allchirdren = this.parentNode.children

  var arr = {
    length: 0
  }
  for (i = 0; i < allchirdren.length; i++) {//该循环是为了是想一个伪数组
    if (allchirdren[i] !== this) {
      arr[arr.length] = allchirdren[i]
      arr.length += 1
    }
  }
  return arr
}

Node.prototype.addClass = function (classes) {
  classes.forEach((value) => this.classList.add(value))
}


// honghong.getSibings(item1)
// honghong.addClass(item3, ['red', 'border'])

item1.getSibings.call(item1)
item1.addClass.call(item1,['red', 'border'])