const { Tray, Menu } = require('electron')
const { globalIcon } = require('./icon.js')

/** 应用托盘 */
module.exports = function (win) {
  const tray = new Tray(globalIcon) // 托盘图标

  tray.setToolTip('electron demo is running') // 托盘提示

  tray.setTitle('electron demo')

  // 托盘右键菜单
  tray.on('right-click', () => {
    const template = [
      {
        label: '退出',
        click: () => app.quit(),
      },
    ]
    const menuConfig = Menu.buildFromTemplate(template)
    tray.popUpContextMenu(menuConfig)
  })

  // 窗口的显示和隐藏
  tray.on('click', () => {
    if (win.isVisible()) {
      win.hide()
    } else {
      win.show()
    }
  })
}
