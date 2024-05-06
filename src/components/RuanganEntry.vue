<template>
  <div>
    <h2>Entry Ruangan</h2>
    <v-text-field v-model="kode" label="Kode" required></v-text-field>
    <v-text-field v-model="nama" label="Nama Ruangan" required></v-text-field>
    <v-btn @click="submitRuangan" color="primary">Submit</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Ruangan from '@/models/Ruangan'; // Change import path

@Component
export default class RuanganEntry extends Vue {
  kode: string = '';
  nama: string = '';

  submitRuangan() {
    if (this.kode && this.nama) {
      const ruangan = new Ruangan(this.kode, this.nama);
      alert(`Data Ruangan ${this.nama} berhasil disimpan`);
    } else {
      alert('Field belum terisi');
    }
  }
}
</script>
