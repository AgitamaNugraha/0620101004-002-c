<template>
  <div>
    <v-app-bar app color="primary">
      <v-toolbar-title>Deskripsi Aplikasi</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>NPM: {{ npm }}</span>
    </v-app-bar>
    
    <v-container>
      <h1>Selamat datang di Aplikasi Sistem Penjadwalan Kuliah</h1>
      <p>Nama: {{ nama }}</p>
      <!-- Konten lain dari halaman Home -->
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Dosen from '@/models/Dosen';
import Mahasiswa from '@/models/Mahasiswa';
import Ruangan from '@/models/Ruangan'; 

@Component
export default class Home extends Vue {
  npm: string = '0620101004'; 
  nama: string = 'Agitama Nugraha'; 
}
</script>
