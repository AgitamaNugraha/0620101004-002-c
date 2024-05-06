<template>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="Mahasiswa List" :to="'/About'"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Mahasiswa Entry" :to="mhsEntryView"></v-list-item>
          </v-list>
        </v-navigation-drawer>

  </template>
  <script lang="ts">
export default{
    data(){
        return{
            aboutView: '/about',
            mhsEntryView: '/mahasiswa-entry'
        }
    }
}</script>
  