# SimplifiedverionjQuery

## 犯的错误
### 关键字，比如class不可以作为函数的形参
用了class作为addClass函数的形参，调用该addClass函数的报错error SyntaxError: Unexpected token class  
后面改用classes作为形参就解决了。  
为什么关键字class不能作为形参？ 

### script标签要放到body标签的最后
<script src="./main.js"></script>

## 细节及步骤
主要的思路：  
1. 就是建立一个类似jQuery的函数，函数里面主要通过JavaScript的API操作DOM，然后return对应的两个函数——addClass和setText；  
2. jQuery的函数return前面需要获取到所有的div元素；    
3. addClass函数通过API——Element.classList.add()，加上for循环来实现；    
4. setText函数通过API——Node.textContent，加上for循环来实现；  
5. 因为只需要操作相应的DOM元素，所以不需要返回(return)任何值。  

更详细的实现思路跟学习笔记见分支[sidebar](https://github.com/bomber063/SimplifiedverionjQuery/tree/sidebar)

看完详细的细节，就对jQuery不陌生啦。  
当然详细的JQuery还能做更多事情  
1. jQuery 在兼容性方面做得很好，1.7 版本兼容到 IE 6；  
2. jQuery 还有动画、AJAX 等模块，不止 DOM 操作；  
3. jQuery 的功能更丰富；  
4. jQuery 使用了 prototype，我们没有使用，等讲了 new 之后再用；  

[jQuery中文文档](https://www.jquery123.com/)  
[jQuery英文文档](https://api.jquery.com/)  
[阮一峰关于jQuery设计思想](http://www.ruanyifeng.com/blog/2011/07/jquery_fundamentals.html)  

## 用jQuery的时候一个好的习惯
最好在存jQuery返回的对象里面前面写一个$，以便更容易区别哪些是由jQuery的API生成的对象，而不会错用了DOM原生JavsScirpt的API：  
例如：  
`var $node=$('ul>li')`

