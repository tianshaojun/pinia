//1. 定义状态容器和数据
//2. 修改容器中的state
//3. 仓库中的action的使用

import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      helloWorld: 'Hello World!',
      count: 0,
    }
  },
  getters: {},
  actions: {},
})
