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
### 修改原型链来实现
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









