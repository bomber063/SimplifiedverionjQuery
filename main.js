window.honghong = {}//增加命名空间honghong 
honghong.getSibings = function () {
  var allchirdren =this.parentNode.children

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

honghong.addClass = function (classes) {
  classes.forEach((value) => this.classList.add(value))
}

Node.prototype.getSibings=honghong.getSibings
Node.prototype.addClass=honghong.addClass


// honghong.getSibings(item1)
// honghong.addClass(item3, ['red', 'border'])

item1.getSibings()
item1.addClass(['red', 'border'])