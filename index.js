const { app, BrowserWindow } = require('electron')

const initTrap = require('./src/config/trap.js')
const WindowsProperty = require('./src/config/windows.js')

require('./src/config/menu.js')

function createWindow() {
  win = new BrowserWindow(WindowsProperty)

  // 这里让主进程加载一个 index.html
  win.loadFile('./dist/index.html')
  initTrap(win)

  // 设置为最顶层
  // win.setAlwaysOnTop(true)
  // win.loadURL(`www.baidu.com`) 可以让主进程打开文件或者一个链接

  // 开发者工具
  // win.webContents.openDevTools()
}

// 部分 API 在 ready 事件触发后才能使用
// app.whenReady().then(createWindow)
app.on('ready', createWindow)

// 监听所有的窗口都关闭了
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }

  // 释放 win
  win = null
  console.log('窗口全部都关闭了')
})

app.on('activate', () => {
  // 在 macOS 上，当单击 dock 图标并且没有其他窗口打开时，通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
