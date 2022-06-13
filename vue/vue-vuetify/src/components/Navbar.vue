<template lang="pug">
  v-card(height='800px')
    v-navigation-drawer(absolute='', permanent='', light='')
      template(v-slot:prepend='')
        v-list-item(two-line='')
          v-list-item-avatar
            img(src='https://randomuser.me/api/portraits/women/81.jpg')
          v-list-item-content
            v-list-item-title Jane Smith
            v-list-item-subtitle Logged In
      v-divider
      v-list(dense='')
        v-list-item(v-for='item in items', :key='item.title')
          v-list-item-icon
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
    };
  },
};
</script>
