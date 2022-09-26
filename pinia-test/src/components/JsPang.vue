<template>
  <div>{{ store.helloWorld }}</div>
  <div>{{ store.count }}</div>
  <hr />
  <div>{{ helloWorld }}</div>
  <div>{{ count }}</div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'
import { storeToRefs } from 'pinia'
const store = mainStore()

const { helloWorld, count } = storeToRefs(store)
</script>
