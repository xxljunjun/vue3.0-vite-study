### 一、创建 vue3.0+vite 项目

```
$ yarn create vite-app <project-name>
$ cd <project-name>
$ yarn
$ yarn dev

```

### 二、启动项目

```
npm install
npm run dev
npm run build
```

### 三、简介

```
vite —— 一个由 vue 作者尤雨溪开发的 web 开发工具，它具有以下特点：
	快速的冷启动
	即时的模块热更新
	真正的按需编译
```

添加 vite.config.js 配置文件

### 四、添加store
```js
vue add store


import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex"; //页面上引入vuex
import { ElButton } from "element-plus";
export default defineComponent({
  name: "home",
  components: { ElButton },
  setup() {
    //获取store实例
    let store = useStore();
    //获取vuex state中的number
    console.log(store.state); //输出1
    //ref--用来标记简单类型数据
    //reactive—标记复杂类型数据(深度响应式)
    let mine = ref("xxl");
    let obj = reactive({
      name: "xxljunjun",
      age: 18,
    });
    return {
      mine,
      obj,
      store,
    };
  },
});
```
### 五、配置路由
```js
yarn add vue-router@next

import {useRouter} from 'vue-router';
export default {
  name: "App",
  setup() {
    const router = useRouter()
    function toPage(val) {
      switch (val) {
        case 1:
          router.push({path:'/studysetup'})
          break;
      }
    }
    return {
      toPage
    };
  },
};
```
### 五、scss和less的安装
```js
// # Sass
npm install -D sass-loader sass

// # Less
npm install -D less-loader less

// # Stylus
npm install -D stylus-loader stylus

// vue add style-resources-loader
```
### 六、安装elementUI
```js
vue add element-plus
//踩坑！！！文件最外面的文件名不能是中文
//根据elementUI3.0进行配置
```


