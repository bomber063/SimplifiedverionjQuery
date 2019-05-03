window.jQuery = function (nodeOrSelector) {
  let nodes = {}
  if (typeof nodeOrSelector === 'string') {
    var temp = document.querySelectorAll(nodeOrSelector)//为了引出一个原型链中只包含Object原型，所以引出一个临时变量
    for (i = 0; i < temp.length; i++) {
      nodes[i] = temp[i]
    }
    nodes.length = temp.length
  }
  else if (nodeOrSelector instanceof Node) {//instanceof Node是为了检测他不是一个DOM集合
    nodes = {
      0: nodeOrSelector,
      length: 1
    }
  }
  // console.log(nodes[0].textContent.__proto__)
  nodes.addClass = function (classes) {
    classes.forEach((value) => {
      for (i = 0; i < nodes.length; i++) {
        nodes[i].classList.add(value)
      }
    })

  }

  nodes.getText = function () {//以数组方式获取多个文本节点
    var texts = []
    // texts.push(nodes[0].textContent)
    for (let i = 0; i < nodes.length; i++) {
     texts.push(nodes[i].textContent)
    }
    return texts

  }

  nodes.setText = function (text) {//设置多个文本
    // var texts = []
    // texts.push(nodes[0].textContent)
    for (let i = 0; i < nodes.length; i++) {
    //  texts.push(nodes[i].textContent)
      nodes[i].textContent=text
    }
    // return nodes
  }

  nodes.text=function(text){//这个才是jQuery实际的效果，也就是当括号里面没有参数的时候，就是以数组方式获取多个文本，当括号里面有参数的时候就是设置多个文本。
    if(text===undefined){
      var texts = []
      // texts.push(nodes[0].textContent)
      for (let i = 0; i < nodes.length; i++) {
       texts.push(nodes[i].textContent)
      }
      return texts
    }
    else{
      for (let i = 0; i < nodes.length; i++) {
        //  texts.push(nodes[i].textContent)
          nodes[i].textContent=text
        }
    }
  }


  return nodes//把17到24行换成26到34行也是一样的

  // return {
  //   addClass:function (classes) {
  //     classes.forEach((value) => {
  //       for (i = 0; i < nodes.length; i++) {
  //         nodes[i].classList.add(value)
  //       }
  //     })
  //   }
  // }
}

var node2 = jQuery('div>div')
// var node2=jQuery('div>div:nth-child(0n+1)')

// node2.getSibings()//这里没有getSibings()了，因为比较麻烦
node2.addClass(['red', 'border'])
// node2.getText
// console.log(node2.getText())
// node2.setText('hi')
node2.text('hi')
