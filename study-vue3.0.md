### vue3.0 的初始的设计目标

```
更小
更快
加强TypeScript支持
加强API设计一致性
提高自身可维护性
开放更多底层功能

```
### vue3.0
```
使用proxy代替了definePropertry实现响应式
重写虚拟DOM的实现和Tree-Shaking：去掉没用的代码
更好的拥抱ts
```

### 新特性
+ vue3组件内可以没有根标签

+ vue的main入口文件

+ vue3.0的开发者工具

+ 常用的组合式API

+ h渲染函数

+ setup可以兼容vue2.0（不建议一起使用）
```
vue2.0的配置可以读取vue3.0;vue3.0的setup不能读取vue2.0
混用时setup优先
setup不允许加async
```

+ 通过ref实现响应式数据
```js
let name = ref("张三")
let age = ref(18)
let obj = ref({
      type:"前端工程师",
      salary:"30k"
    })
//方法
function  change() {
    //引用对象
    name.value = "李四"
    age.value = 20
    obj.value.salary="40k"
}
proxy ==>对复杂数据类型实现响应式  reactive函数
RefImpl ==对基本数据类型实现响应式
```

+ reactive函数
```js
let obj = reactive({
    type:"前端工程师",
    salary:"30k"
})
function  change() {
    //引用对象
    age.value = 20
    obj.salary="40k"
}

const 代理对象 = reactive(源对象)
//内部是基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作
//reactive定义的响应式数据是"深层次的"
```

### vue2.0响应式方法
```
存在的问题：
    新增属性、删除属性、界面不会更新
        this.$set()
        this.$delete()
    直接通过下标修改数组、界面不会自动更新
        this.$set()
        push、pop、splice...
```

### vue3.0响应式原理
```
Proxy

```

### reactive和ref的区别
+ 从定义数据的角度对比
```
ref用来定义基本数据类型
reactive用来定义对象或数组类型的数据
（ref也可以用来定义对象或数组类型数据，它内部会自动通过reactive转成代理对象）
```
+ 从原理的角度
```
ref通过object.defineProperty()的get和set实现响应式(数据劫持)
reactive通过使用Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部的数据
```
+ 从使用角度
```
ref定义的数据：在js操作数据时需要.value;模板中不需要.value
reactive定义的数据：都不需要.value
```

### vue2.0的$attrs和$slots的作用
```
$attrs是prosps的兜底
$slots是用于接收父组件的插槽
```

### setup
```js
// setup执行的时机在beforeCreacte之前执行一次，this是undefinded
// setup的参数：
    emits:["自定义事件"]
    setup(prosps,context){

    }
    context里面有attrs、slots、emit
```

### vue3的计算属性
```js
import {computed} from "vue"
let allName = computed(()=>{
    return 111
})
let allName = computed({
    set(){

    },
    get(val){
        
    }
})
```

<!-- ### watch的监听属性 -->

