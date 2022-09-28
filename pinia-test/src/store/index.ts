//1. 定义状态容器和数据
//2. 修改容器中的state
//3. 仓库中的action的使用

import { defineStore } from 'pinia'
import { jspangStore } from './jspang'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      helloWorld: 'Hello World!',
      count: 0,
      phone: '15139333888'
    }
  },
  getters: {
    phoneHidden(): String {
      console.log('Getters被调用');
      return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
  actions: {
    changeState() {
      this.count++
      this.helloWorld = 'jspang'
    },
    getList() {
      console.log(jspangStore().list);
    }
  },
})
