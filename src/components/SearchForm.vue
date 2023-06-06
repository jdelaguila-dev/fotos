<template>
  <div>
  <!-- <input type="file" ref="fileInput" @change="handleFileInput()" />  -->
    <input type="text" v-model="dni" placeholder="Buscar por DNI" />
    <button @click="searchByDNI">Buscar</button>
    <div>
      <h2>Resultado de la búsqueda:</h2>
      <div v-if="searchResult">
        <p>{{ searchResult }}</p>
        <!-- <table>
          <tbody>
            <tr v-for="(value, key) in searchResult" :key="key">
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </table> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import sourcedata from "../assets/datos.json";
const dni = ref("");
const searchResult = ref(null);
const jsonData = ref([]);


onMounted(() => {
  loadjson();
});

const loadjson = () => {
  jsonData.value = sourcedata;
  
};

const searchByDNI = () => {
  const dniFound = jsonData.value.find((item) => item.dni === dni.value.trim());
  searchResult.value = dniFound ? dniFound : "No se encontraron resultados.";
};

const removeBrackets = (value) => {
  return value.replace(/[\[\]{\{\}]/g, "");
};

</script>
