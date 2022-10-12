const { global } = require('./icon.js')

/** 首屏窗口属性 */
module.exports = {
  // fullscreen: true,   // 全屏
  // frame: false,   	// 让桌面应用没有边框，这样菜单栏也会消失
  width: 800,
  height: 600,
  resizable: false, // 不允许用户改变窗口大小
  icon: global, // 应用运行时的标题栏图标
  webPreferences: {
    backgroundThrottling: false, // 设置应用在后台正常运行
    nodeIntegration: true, // 设置能在页面使用nodejs的API
    contextIsolation: false, // 关闭警告信息
    enableRemoteModule: true,
  },
}
