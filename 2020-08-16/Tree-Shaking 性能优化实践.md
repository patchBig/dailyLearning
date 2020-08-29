# tree-shaking

通过 tree-shaking，将没使用的模块摇掉，这样来达到删除无用代码的目的。

tree-shaking 较早由 Rich_Harris 的 rollup 实现，后来，webpack 2 增加了 tree-shaking 的功能。其实在更早，google closure compiler 也做过类似的事情。

## DCE - Dead Code Elimination

- 代码不会被执行，不可到达
- 代码执行的结果不会被用到
- 代码只会影响死变量（只写不读）

传统的编译型语言中，都是由编译器将 Dead Code 从 AST 中删除。

在 webpack 4.44.1 版本中需要依赖 TerserPlugin 插件才能进行无用代码消除；

rollup 2.26.2 已内置了，不用 uglify 即可实现无用代码消除。

## tree-shaking 消除原理

依赖 ES6 的模块特性

ES6 module 特点：

- 只能作为模块顶层语句出现
- import 的模块名只能是字符串常量
- import binding 是 immutable 的

ES6 模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是 tree-shaking 的基础。

在 commonJS 中会动态 require 一个模块。

目前可以消除函数以及类在 webpack(4.44.1以上) prod 编译的时候。