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
```

