electron 分为两个进程 主进程 和 渲染进程

主线程：index.js

Remote 模块: 在渲染进程里（比如 index.html 里面加载了一些 js 文件，那里面的 js 如果要使用到 BrowserWindow 这些属性的话就必须使用 remote）使用 remote 模块, 你可以调用 main 进程对象的方法
