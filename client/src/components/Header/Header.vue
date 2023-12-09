<template>
  <header class="header">
    <RouterLink
        class="header-link"
        active-class="header-link__active"
        v-for="link in headerLinks"
        :key="link.path"
        :to="link.path"
    >
      {{ link.title }}
    </RouterLink>
  </header>
</template>

<script setup lang="ts">
import './Header.scss'

type HeaderLinks = {
  title: string,
  path: string
}

const headerLinks: HeaderLinks[] = [
  {
    title: 'Главная',
    path: '/',
  },
  {
    title: 'Меню',
    path: '/menu',
  },
  {
    title: 'Админка',
    path: '/admin',
  }
]
</script>

<style scoped>

</style>