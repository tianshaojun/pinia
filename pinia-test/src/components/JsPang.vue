<template>
  <div>
    <div>{{ store.helloWorld }}</div>
    <div>{{ store.count }}</div>
    <div>{{ store.phoneHidden }}</div>
    <hr />
    <div>{{ helloWorld }}</div>
    <div>{{ count }}</div>
    <div>{{ phoneHidden }}</div>
  </div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'
import { storeToRefs } from 'pinia'
const store = mainStore()

const { helloWorld, count, phoneHidden } = storeToRefs(store)
</script>
