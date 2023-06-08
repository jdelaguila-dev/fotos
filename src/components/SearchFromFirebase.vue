<script setup>
import { ref } from "vue";

import { useDatabaseList } from "vuefire";
import { profileRef } from "../services/firebase";

import TableContent from "./TableContent.vue";

const dni = ref("");

const profiles = useDatabaseList(profileRef);
</script>

<template>
  <div class="flex justify-start items-start w-1/4 space-x-2 my-4">
    <el-form-item label="DNI" class="w-full">
      <el-input v-model="dni" placeholder="Ingrese DNI" />
    </el-form-item>
  </div>
  <div class="pb-4">
    <TableContent :users="profiles.slice(0, 5)"  />
  </div>
</template>
