# SimplifiedverionjQuery

## 封装两个函数
### 封装一个函数geiSibings()
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
