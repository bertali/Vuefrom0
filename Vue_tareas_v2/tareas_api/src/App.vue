<template>
  <div id="app">
    <h1>Tareas</h1>
    <input type="text" v-model="tareaNombre" @keyup.enter="addTarea">
    <ul>
      <li v-for="tarea of tareas" :key="tarea.id">{{tarea.nombre}}</li>
    </ul>
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script>

import axios from 'axios';

const baseURL = "http://localhost:3000/tareas"

export default {
  name: 'app',
  data() {
    return {
      tareas:[],
      tareaNombre: ''
    };
  },
  async created() {
    try {
      const res = await axios.get(baseURL);

      this.tareas = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async addTarea() {
      const res = await axios.post(baseURL, { nombre: this.tareaNombre});

      this.tareas = [...this.tareas, res.data];

      this.tareaNombre = '';
    }
  } 
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  margin:0px;
  padding: 0px;
}

li {
  list-style: none;
}


</style>
