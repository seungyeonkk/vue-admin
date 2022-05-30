<template>
  <v-navigation-drawer
    v-bind="$attrs"
    app
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'DefaultDrawer',
  data: () => ({
    drawer: false,
    items: [
      { title: '공지사항', icon: 'mdi-image', to: '/notice' },
      { title: 'Home', icon: 'mdi-image', to: '/home' },
      { title: 'Grid', icon: 'mdi-view-dashboard', to: '/grid' },
      { title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in' },
      { title: 'SignUp', icon: 'mdi-logout', to: '/authentication/sign-up' },
      { title: 'ProductList', icon: 'mdi-view-dashboard', to: '/page/product-list' },
    ],
  })
}
</script>
<style>

</style>
