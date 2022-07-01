---
category:
  - frontend
tag:
  - minPrograms
---

# uniapp

> 记录会员小程序的制作过程。

- easycom 页面路由 pages.json 文件中组件模式，可以无需注册引入，直接使用，可以理解为全局引入。

## 组件的生命周期

- 组件实例刚刚被创建好时 created 生命周期被触发。此时，组件数据 this.data 就是在 Component 构造器中定义的数据 data 。 此时还不能调用 setData 。 通常情况下，这个生命周期只应该用于给组件 this 添加一些自定义属性字段。
- 在组件完全初始化完毕、进入页面节点树后 attached 生命周期被触发。此时 this.data 已被初始化为组件的当前值。这个生命周期很有用，绝大多数初始化工作可以在这个时机进行。
- 在组件离开页面节点树后， detached 生命周期被触发。退出一个页面时，如果组件还在页面节点树中，则 detached 会被触发。

## 倒计时功能的实现

-

## 杂烩

- http://underscorejs.org/ 小程序端使用的类似 lodash 库
- [postcss-px2rem](https://juejin.cn/post/6844903828408533000) 移动端适配的方案。
