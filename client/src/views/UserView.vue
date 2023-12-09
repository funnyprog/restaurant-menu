<template>
  <main>
    {{ test }}
  </main>
</template>

<script setup lang="ts">
import {onMounted} from "vue";

const test: string = 'User View'

onMounted(() => {
  console.log('HELLO, I have been mounted')
})

</script>
