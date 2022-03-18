/*
 * @Author: your name
 * @Date: 2022-03-08 18:33:58
 * @LastEditTime: 2022-03-18 11:20:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue-app/vite.config.js
 */
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

import path from 'path'

// https://vitejs.dev/config/
export default {
  resolve: {
    // 使用 alias 配置可以将文件打包的识别路径用别名进行替换，避免在文件引入别的组件的时候使用很长的相对路径
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'] // 自动导入vue和vue-router相关函数
    })
  ]
}
