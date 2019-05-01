window.jQuery = function(node) {
    var divs = document.getElementsByTagName(node)
    return {
      addClass: function(classes) {
        for (var i = 0; i < divs.length; i++) {
          divs[i].classList.add(classes)
        }
      },
      setText: function(wenben) {
        for (var i = 0; i < divs.length; i++) {
          divs[i].textContent = wenben
        }
      }
    }
  }
  
  window.$ = jQuery
  
  var $div = $('div')
//   div1.onclick=function(){
  $div.addClass('red') // 可将所有 div 的 class 添加一个 red
  $div.setText('hi') // 可将所有 div 的 textContent 变为 hi
//   console.log(1)
// }

