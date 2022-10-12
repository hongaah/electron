// 导入 node 的模块
const fs = require('fs')
const path = require('path')
const { log } = console

// 获取到文件展示的 dom
const showContent = document.getElementById('show_file_content')

// 需要写入的内容
const content = 'ahha!'

// 读取文件
function readFile() {
  log('读取文件')
  fs.readFile(path.join(__dirname, '/simple.txt'), (err, data) => {
    if (err) {
      throw new Error(err, '读取文件失败')
    }
    showContent.innerText = data
  })
}

// 写入文件
function writeFile() {
  fs.writeFile(path.join(__dirname, '/simple.txt'), content, 'utf8', (err, data) => {
    if (err) {
      return new Error(err, '读取文件失败')
    }
    log('写入文件成功')
  })
}
