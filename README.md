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
为了代表是谁的库。比如jQuery写的库就最开始会有一个$或者jQuery，而我的库就可以叫做honghong。  

