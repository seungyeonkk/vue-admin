<template>
  <router-view/>
</template>

<script>
import '@/styles/overides.sass'
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    items: [
      { title: 'Notice', icon: 'mdi-image', to: '/notice' },
      { title: 'Grid', icon: 'mdi-view-dashboard', to: '/grid' },
      { title: 'Home', icon: 'mdi-view-dashboard', to: '/home' },
    ],
    right: null,

  })
}
</script>
