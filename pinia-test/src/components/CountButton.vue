<template>
  <div>
    <button @click="handleClick()">修改状态数据(1)</button>
    <button @click="handleClickPatch()">修改状态数据(2-patch)</button>
    <button @click="handleClickMethod()">修改状态数据(3-method)</button>
    <button @click="handleClickActions()">修改状态数据(4-actions)</button>
    <button @click="handleClickChangePhone()">修改电话号码</button>
    <button @click="getList()">获得数组</button>
  </div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'
const store = mainStore()

//第一种方法
const handleClick = () => {
  store.count++;
  store.helloWorld = store.helloWorld === 'jspang' ? 'Hello World' : 'jspang';
}

//第二种方式 $patch
const handleClickPatch = () => {
  store.$patch({
    count: store.count + 2,
    helloWorld: store.helloWorld === 'jspang' ? 'Hello World' : 'jspang'
  })
}

//第三种方式 $patch 传递函数
const handleClickMethod = () => {
  store.$patch((state) => {
    state.count++;
    state.helloWorld = state.helloWorld === 'jspang' ? 'Hello World' : 'jspang';
  })
}

//第四种方式 actions
const handleClickActions = () => {
  store.changeState();
}

const handleClickChangePhone = () => {
  store.phone = "15139333999";
}

const getList = () => {
  store.getList();
}
</script>
