# SimplifiedverionjQuery

## 封装两个函数
### 封装一个函数getSibings()
它可以获取除了**自己**以外的其他兄弟的**元素节点**  

### 封装另一个函数addClass()
它可以一次添加**多个**class。  

#### 用三元运算法代替if...else  
if...else代码
```
    if (value) {
      node.classList.add(key)
    }
    else {
      node.classList.remove(key)
    }
```
修改该为三元运算符代码  
```
     var methodName=value?'add':'remove'
     node.classList[methodName](key)
```  
## 增加命名空间
命名空间为honghong。
### 犯的错误
function getSibings(),其中getSibings就代表该函数。function就是一个函数声明，错误的把getSibings()当做函数，getSibings()应该叫做该函数的调用。  

### 增加命名空间的目的
1. 为了代表是谁的库。比如jQuery写的库就最开始会有一个$或者jQuery，而我的库就可以叫做honghong。  
2. 如果用户（一个人）用了一个和该库名字营养的变量，比如用了一个  
`var getSibings=1`
这样在用该库，因为该库里面有一个函数名字也叫做getSibings，那么就会覆盖掉getSibings=1。所以可以防止覆盖声明的全局变量。  

## 把addClass修改为数组及forEach来遍历，简单一点
addClass的修改为数组来forEach遍历  
`classes.forEach((value)=>node.classList.add(value))`  

## 使用命名空间，把具名函数变成匿名函数，防止覆盖全局变量
比如把  
`function getSibings(){}`  
变为  
`honghong.getSibings=function(){}`   

## 用item3.getSibings()来代替honghong.getSibings(item3)
### 修改浏览器自带的Node原型链来实现
把Node的原型增加这两个函数的方法，增加代码  
```
Node.prototype.getSibings=honghong.getSibings
Node.prototype.addClass=honghong.addClass
```
就可以直接使用  
```
item3.getSibings()
item1.addClass(['red', 'border'])
```
#### 继续优化
可以把原型链后面直接写成函数  
```
Node.prototype.getSibings=直接写成匿名函数
Node.prototype.addClass=直接写成匿名函数
```
#### 隐式指定this的说明
```
item3.getSibings()
item1.addClass(['red', 'border'])
```
前面的item3和item1会通过this传入到函数里面，函数本身被调用的就有一个this。如果**没有直接写出this**，那么这个this就是该函数调用前的那个，比如这里的getSibings()里面的this就是item1，而addClass(['red', 'border'])的this就是item1。  

#### 显式指定this的说明
当你要**写出了this的时候**，this会覆盖掉前面的那个调用的信息item1。   
比如  
`item1.getSibings.call(item5)`  
那么此时的this是item5,会覆盖掉原来的this为item3。  
如果加上this但是不改变结果，只需要this和前面的值相同即可。  
把代码
```
item1.getSibings()
item1.addClass(['red', 'border'])
```
修改为带this的，但是和原来代码效果一样的代码  
```
item1.getSibings.call(item1)
item1.addClass.call(item1,['red', 'border'])
```

### 修改浏览器自带的Node原型链来实现的缺点
如果有两个或者多个人同时设置了原型，并添加了相同的key,那么还是会互相覆盖。

### 另一种方法自己创建的构造函数来调用浏览器的自带的原型来实现
该方法可以防止相互覆盖
具体实现思路就是：
1. 自己写一个构造函数，该构造函数**返回(return)**getSibings()和addClass();  
2. 该构造函数可以赋值给一个变量，那么该变量就获得了该构造函数所返回（return）的函数getSibings()和addClass()的使用权;  
3. 该构造函数赋的匿名函数需要一个形参来获得操作的对象;  
`window.Node2 = function(node){}`
4. 该构造函数赋值给一个变量的时候传一个实参;  
`var node2 = Node2(item1)`
5. 此时this就用不到了，因为this前面是一个变量(node2)，而我们要用到的参数是构造函数里面传的参数;
```
node2.getSibings()
node2.addClass(['red', 'border'])
```
6. node2.getSibings也可以写成node2.getSibings()，只是前面代表了一个函数，后面代表了执行这个函数。因为这里并不需要传入参数，所以他们是实现的效果先相同;
7. node2.addClass(['red', 'border']),这里需要传入参数，所以这里必须加他的括号并传入一个数组参数，说明传入这个数组来执行这个函数。

## 终于引出了jQuery
把Node2改成jQuery，所以jQuery它是一个构造函数，它可以接受一个元素（节点），这个元素（节点）就是旧的对象，**返回一个新的对象（jQuery对象），新的对象里面有各种函数和属性（也就是JQuery的API）**，这个**新的函数里面有JavaScript原生的API**，也可以说是DOM原型链中的各种接口，函数。**可以节省很多代码**，因为原生的JavaScript在return的函数里面被jQuery包装起来了。
简洁的说就是jQuery他接受一个旧的对象（比如DOM对象），返回给你一个新的对象（比如DOM对象）。新的对象会调用旧的对象里面的API

### jQuery更智能
jQuery()的括号里面不仅可以传入DOM元素，还可以传入选择器，所以如果是选择器，那么就会出现字符串或者对象的判断。

### 需要注意的问题
1. typeof 返回的是**字符串**，需要加引号，并且返回的对象的**第一个字母o是小写**，也就是'object'，字符串**第一个字母s也是小写**，也就是'string'。  
2. 为了保证node不变，并且node作为return之前的一个全局变量，那么应该在**return之前来判断传入的参数是DOM对象，还是字符串（选择器）**,经过判断之后把传入的参数经过操作后继续保存在node中，那么后续的代码都可以不用改变了。  
3. 这样就可以使用选择器了，比如使用  
`var node2 = jQuery('#item3')`  
或者  
`var node2=jQuery('div>div:nth-child(0n+1)')`  
等等  
4. 并且此时还用到了**闭包**，闭包就是一个函数（比如addClass）用到的该函数外面的变量（比如let node），那么这个函数和函数外面的变量统称为闭包。这个外面的变量，在函数内部一直在用他，但是用户却访问不到。因为这个变量（比如let node）的作用域在JQuery这个函数里面，相当于一个隐藏的或者中间变量。
```
window.jQuery = function(nodeOrSelector){//传入的nodeOrSelector在return之前经过改变传递给了node
    let node
    if(){node = document.querySelector(nodeOrSelector)}
    else if(){node=nodeOrSelector}
  return {
    getSibings: function () {操作node},
    addClass: function (classes) {操作node}
  }
}
var node2 = jQuery('#item1')
```


















