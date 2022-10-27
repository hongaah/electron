const { nativeImage } = require('electron')
const path = require('path')

/** 应用图标，托盘图标 */
module.exports.globalIcon = nativeImage.createFromPath(path.join(__dirname, '../assets/favicon.ico'))
