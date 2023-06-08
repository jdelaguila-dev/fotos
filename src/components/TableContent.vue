<script lang="ts" setup>
interface User {
  expediente: number;
  dni: string;
  nombres: string;
  apaterno: string;
  amaterno: string;
  programa: string;
  periodo: string;
  photo: string;
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (rowIndex === 1) {
    return "warning-row";
  } else if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};

const props = defineProps<{
  users: User[],
}>()


</script>

<template>
  <el-table :data="users" style="width: 100%">
    <el-table-column prop="expediente" label="Expediente" width="180" />
    <el-table-column prop="dni" label="DNI" width="180" />
    <el-table-column prop="nombres" label="Nombres" />
    <el-table-column prop="apaterno" label="A. Paterno" />
    <el-table-column prop="amaterno" label="A. Materno" />
    <el-table-column prop="programa" label="Programa" />
    <el-table-column prop="periodo" label="Periodo" />
    <el-table-column prop="photo" label="Foto"/>
  </el-table>
</template>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
