# SimplifiedverionjQuery

##范的错误
### 关键字，比如class不可以作为函数的形参
用了class作为addClass函数的形参，调用该addClass函数的报错error SyntaxError: Unexpected token class  
后面改用classes作为形参就解决了。  
经过查询解析为：函数返回值在寄存器中, 没有地址, 不能作为形参，但可以作为实参  

### script标签要放到body标签的最后
<script src="./main.js"></script>

## 细节及步骤
主要的思路：  
1. 就是建立一个类似jQuery的函数，函数里面主要通过JavaScript的API操作DOM，然后return对应的两个函数——addClass和setText；  
2. jQuery的函数return前面需要获取到所有的div元素；    
3. addClass函数通过API——Element.classList.add()，加上for循环来实现；    
4. setText函数通过API——Node.textContent，加上for循环来实现；  
5. 因为只需要操作相应的DOM元素，所以不需要返回(return)任何值。  

