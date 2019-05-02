function geiSibings(node){
  var allchirdren = item1.parentNode.children
  
  var arr = {
    length: 0
  }
  for (i = 0; i < allchirdren.length; i++) {
    if (allchirdren[i] !== node) {
      arr[arr.length] = allchirdren[i]
      arr.length += 1
    }
  }
  console.log(arr)
  }
  
  geiSibings(item1)

