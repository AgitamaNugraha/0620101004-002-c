<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Penjadwalan Kuliah</v-toolbar-title>
      <!-- Tombol untuk membuka/dan menutup navigation drawer -->
      <v-spacer></v-spacer>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app v-model="drawer" color="primary">
      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/dosen">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dosen</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/mahasiswa">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Mahasiswa</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/ruangan">
          <v-list-item-icon>
            <v-icon>mdi-door</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Ruangan</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Konten -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const drawer = ref(false);

    return {
      drawer
    };
  }
};
</script>
