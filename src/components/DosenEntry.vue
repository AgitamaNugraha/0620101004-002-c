<template>
  <div>
    <h2>Entry Dosen</h2>
    <v-text-field v-model="nidn" label="NIDN" required></v-text-field>
    <v-text-field v-model="nama" label="Nama" required></v-text-field>
    <v-btn @click="submitDosen" color="primary">Submit</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Dosen from '@/models/Dosen'; 

@Component
export default class DosenEntry extends Vue {
  nidn: string = '';
  nama: string = '';

  submitDosen() {
    if (this.nidn && this.nama) {
      const dosen = new Dosen(this.nidn, this.nama);
      alert(`Data Dosen ${this.nama} berhasil disimpan`);
    } else {
      alert('Field belum terisi');
    }
  }
}
</script>
