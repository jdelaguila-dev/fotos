<script setup>
import defaultNavBar from "./components/defaultNavBar.vue";
import defaultSideBar from "./components/DefaultSideBar.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <defaultNavBar />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <defaultSideBar />
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
