<script setup>
import { onMounted, ref, computed } from "vue";

import sourcedata from "../assets/datos.json";
import TableContent from "./TableContent.vue";

const dni = ref("");
const searchResult = computed(() => {
  return dni.value
    ? jsonData.value.filter((item) => {
        const _dni = item.dni.toString();
        return _dni.includes(dni.value);
      })
    : [];
});
const jsonData = ref([]);

onMounted(() => {
  loadjson();
});

const loadjson = () => {
  jsonData.value = sourcedata;
  console.log(jsonData.value);
};
</script>

<template>
  <h1 class="font-semibold text-2xl">Formulario de búsqueda</h1>
  <div class="flex justify-start items-start w-1/4 space-x-2 my-4">
    <el-form-item label="DNI" class="w-full">
      <el-input v-model="dni" placeholder="Ingrese DNI" />
    </el-form-item>
  </div>
  <div>
    <TableContent :users="searchResult" />
  </div>
</template>
