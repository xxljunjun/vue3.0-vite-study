### ts的数据类型
```ts
boolean
number
string
数组
元组
枚举
any
void
never
Object
interface类型
```

### ts的一些关键字
```ts
eum
interface
class
void
any
readonly
propName  //interface一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
public
private
constructor
super
extends
implements
```

### 类型断言
```ts
let str = '2345215'
let len = (<string>str).length;  ////有兼容性问题, 在使用到了JSX的时候兼容性不是很好
let len = (str as string).length;
```

### 函数声明
+ 1）利用type声明函数
```ts
// 先利用type声明一个函数
type AddFun = (a:number, b:number)=>number;
// 再根据声明去实现这个函数
// 此时函数的参数和返回值可以不需要写类型声明了，因为ts可以通过这个函数声明推断出来类型了
let add:AddFun = (x, y) =>{
    return x + y;
};
let res = add(30, 20);
console.log(res);
```
+ 2）利用interface声明函数
```ts
// 先利用interface声明一个函数
interface AddFun {
     (a:number, b:number):number   
}
let add:AddFun = (x, y) => {
    return x + y;
};
let res = add(30, 20);
console.log(res);
```

### ts泛型
+ 泛型是什么
```js
// 软件工程中，我们不仅要创建一致的定义良好的 API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

// 设计泛型的关键目的是在成员之间提供有意义的约束，这些成员可以是：类的实例成员、类的方法、函数参数和函数返回值。
```
+ type可以使用映射
```ts
type Keys = "name" | "sex"
type DuKey = {
  [Key in Keys]: string //类似 for ... in
}
let stu: Dukey = {
  name: 'wang'，
  sex: 'man'
}
```
