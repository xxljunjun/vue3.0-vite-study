### 在vue中引入的
```js
import { 
    createApp,  
    version,
    nextTick,
    toRefs,  
    toRef,  //创建一个ref对象，其value值指向另一个对象中的某个属性
    h,
    ref,
    reactive,
    computed,
    readonly,  //保护数据不被修改
    shallowReadonly,  //只保护第一层不被修改
    shallowRef,  //只考虑对象的最外层数据的响应式（浅响应式）
    shallowReactive,  //只处理基本数据类型的响应式，不进行对象类型的响应式处理
    watchEffect,
    watch,
    toRaw,  //将一个由  reactive生成的响应式对象  转为  普通对象
    markRaw,  //标记一个对象，使其永远不会再成为响应式数据
    isRef,  //检查一个值是否为一个ref对象
    unref,  //如果参数是 ref，则返回内部值，否则返回参数本身
    isProxy,  //检查一个对象是否是由reactive或者readonly方法创建的代理
    isReactive,  //检查一个对象是否是由reactive创建的响应式代理
    isReadonly,  //检查一个对象是否是由readonly创建的只读代理
    triggerRef,
    customRef,
    effectScope,
    getCurrentScope,
    onScopeDispose,
    provide,
    inject,
    ref,  //setup中替换this.$refs.xxx
    useCssModule,
    mergeProps,
    cloneVNode,
    isVNode,
    resolveComponent,
    resolveDirective,
    withDirectives,
    withModifiers,
    PropType,
} from 'vue'
```
```js
setup(props, context){}
setup(props, { attrs, slots, emit, expose }){
    // attrs是prosps的兜底
    // slots是用于接收父组件的插槽
    // emit触发事件
    // expose用于显式地限制该组件暴露出的属性
}
// attrs 和 slots 的属性都不是响应式的。如果你想要基于 attrs 或 slots 的改变来执行副作用，那么你应该在 onBeforeUpdate 生命周期钩子中编写相关逻辑。

// v-memo :期望的绑定值类型

// 采用ts专有声明，有默认值
interface Props {
  dot?: boolean;
  count?: number;
}
const props = withDefaults(defineProps<Props>(), {
  dot:false,
});

// defineProps
```


### 生命周期
```js
import {
    onBeforeMount, // 在组件挂载之前执行的函数
  onMounted,
  onBeforeUpdate, // 在组件修改之前执行的函数
  onUpdated,
  onBeforeUnmount, // 在组件卸载之前执行的函数
  onUnmounted,
  onErrorCaptured,  //注册一个钩子，在捕获了后代组件传递的错误时调用
  onRenderTracked, //开发：注册一个调试钩子，当组件渲染过程中追踪到响应式依赖时调用
  onRenderTriggered, //开发：注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用。这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。
  onActivated,
  onDeactivated,
  onServerPrefetch, //ssr
} from 'vue'
```

### 内置组件
```vue
<Transition></Transition>
<TransitionGroup></TransitionGroup>
<KeepAlive></KeepAlive>
<Teleport></Teleport>
<Suspense></Suspense>

<slot></slot>
<component :is=''></component> 
<!-- <component> 和 <slot> 具有类似组件的特性，也是模板语法的一部分。但它们并非真正的组件，同时在模板编译期间会被编译掉。因此，它们通常在模板中用小写字母书写。 -->
```

### css功能
```vue
<style scoped>
.example {
  color: red;
}
</style>
<style scoped>
:deep(.b) {
  /* ... */
}
/* 通过 v-html 创建的 DOM 内容不会被作用域样式影响，但你仍然可以使用深度选择器来设置其样式。 */
</style>
<style scoped>
:global(.red) {
  color: red;
}
</style>

//可以在css中使用变量
<template>
  <div class="text">hello</div>
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
</script>

<style>
.text {
  color: v-bind(color);
}
</style>

//module:另一种局部css写法
<template>
  <p :class="classes.red">red</p>
</template>

<style module="classes">
.red {
  color: red;
}
</style>
```