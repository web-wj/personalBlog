# webpack 构建工具

## 如何在浏览器端实现模块化？

### 问题

- 效率问题：精细的模块划分带来了更多的 js 文件，更多的 js 文件带来了更多的请求，降低了页面访问效率。
- 兼容性问题：浏览器只支持 es6 模块化，不支持 CommonJS(第三方模块，例如：axios)   
- 工具问题：浏览器不直接支持 npm 下载的第三方包
- (非业务类)工程问题......

> 根本原因是在 node 端，可以本地读取文件，效率比浏览器远程传输文件高的多。在浏览器端开发时态(devtime)和运行态(runtime)的侧重点不同。

- 开发时态
  - 支持多模块标准 es6、CommonJS
  - 模块划分精细一点
  - 不考虑兼容性问题
- 运行时态
  - 文件少一点（合并多个相同类型文件）
  - 体积小一点（代码别换行了，名称简写）
  - 代码内容乱一点（别人看不懂代码）
  - 执行效率问题

### 解决办法

- webpack 构建工具 
- grunt gulp fis browserify ...... 

> 官网：https://www.webpackjs.com/  

基于 nodeJs ,以开发时态的一个入口文件，分析模块的依赖关系（利用模块化导入语句 ），经过一系列的过程（压缩合并），最终生成运行时态的文件。

## 编译结果分析

### 模拟编译结果

```js
// 全局变量污染
const modules = {
  "./src/a.js": function(module, exports, require) {
    // xxx;
    // module.exports = 'a'
    // exports.a = 'a'
    // require('./b'); => require('./src/b.js')
  },
  "./src/b.js": function() {
    // xxx;
  }
}

// 专门写一个函数来运行
(function (modules) {
  // 提供 require 函数, 相当于运行一个模块，并得到导出结果 moduleId 模块路径
  function require(moduleId){
    var func = modules[moduleId];
    // 构造一个 module
    var module = {
      exports: {}
    }
    // 运行模块
    fnc(module, module.exports, require);
    // 得到模块返回结果
    return module.exports;
  }
  // 执行入口模块
  require('./src/index.js');  
})({
  "./src/a.js": function(module, exports, require) {
    // xxx;
    // module.exports = 'a'
    // exports.a = 'a'
    // require('./b'); => require('./src/b.js')
  },
  "./src/b.js": function(module, exports, require) {
    // xxx;
  }
});
```

- 为什么使用 eval 函数？
  - 便于定位错误信息。

### 配置文件

- webpack.config.js
- 命令行中的` --config `来指定配置文件。
- 通过 CommonJS 模块导出一个对象。

#### 为什么这里不能使用 es6 导出配置文件呢？

- 打包的过程中，是在 node 环境下，会读取配置文件内容，会**运行**一次配置文件，相当于`const config = require('./webpack.config.js')`。我们自己的代码在打包过程中是不运行的，所以支持多模块。

- `mode: "development" mode: "production"`
