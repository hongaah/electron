const { Menu, BrowserWindow } = require('electron')

// 创建菜单模板
const template = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建窗口',
        click: () => {
          let sonWin = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
              backgroundThrottling: false, // 设置应用在后台正常运行
              nodeIntegration: true, // 设置能在页面使用nodejs的API
              contextIsolation: false, // 关闭警告信息
              enableRemoteModule: true,
            },
          })
          sonWin.loadFile('src/feature/WriteAndRead/index.html')
          // 为关闭的时候进行清空
          sonWin.on('close', () => {
            sonWin = null
          })
        },
      },
    ],
  },
  {
    label: '帮助',
    submenu: [{ label: '开始' }, { label: '发行说明' }, { label: '打开开发人员工具' }, { label: '关于' }],
  },
]

// 从模板中创建菜单
const myMenu = Menu.buildFromTemplate(template)

// 设置为应用程序菜单
Menu.setApplicationMenu(myMenu)
