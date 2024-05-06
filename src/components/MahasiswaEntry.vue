<template>
  <div>
    <h2>Entry Mahasiswa</h2>
    <v-text-field v-model="npm" label="NPM" required></v-text-field>
    <v-text-field v-model="nama" label="Nama" required></v-text-field>
    <v-text-field v-model="ipk" label="IPK" required type="number" step="0.01"></v-text-field>
    <v-btn @click="submitMahasiswa" color="primary">Submit</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Mahasiswa from '@/models/Mahasiswa'; 

@Component
export default class MahasiswaEntry extends Vue {
  npm: string = '';
  nama: string = '';
  ipk: number | null = null;

  submitMahasiswa() {
    if (this.npm && this.nama && this.ipk !== null && this.ipk >= 0 && this.ipk <= 4) {
      const mahasiswa = new Mahasiswa(this.npm, this.nama, this.ipk);
      alert(`Data Mahasiswa ${this.nama} berhasil disimpan`);
    } else {
      alert('Field belum terisi atau IPK harus di antara 0 sampai 4');
    }
  }
}
</script>
