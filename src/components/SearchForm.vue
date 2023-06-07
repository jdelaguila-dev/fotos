<script setup>
import { onMounted, ref } from "vue";

import sourcedata from "../assets/datos.json";

import { CreditCard } from "@element-plus/icons-vue";

const dni = ref("");
const searchResult = ref(null);
const jsonData = ref([]);

onMounted(() => {
  loadjson();
});

const loadjson = () => {
  jsonData.value = sourcedata;
  console.log(jsonData.value);
};

const searchByDNI = () => {
  const dniFound = jsonData.value.find((item) => item.dni === dni.value.trim());
  searchResult.value = dniFound ? dniFound : "No se encontraron resultados.";
};
</script>

<template>
  <h1 class="font-semibold text-2xl">Formulario de búsqueda</h1>
  <div class="flex justify-start items-start w-1/4 space-x-2 my-4">
    <el-form-item label="DNI" class="w-full">
      <el-input v-model="dni" placeholder="Ingrese DNI" />
    </el-form-item>
    <el-button type="primary" @click="searchByDNI">Buscar</el-button>
  </div>
  <div>
    <ul>
      <li>{{ searchResult }}</li>
    </ul>
  </div>
</template>
