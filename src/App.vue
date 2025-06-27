<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<style lang="scss" scoped>
.el-container {
  min-width: var(--max-width);
  .el-header {
    --el-header-height: 680px;
    --el-header-padding: 0 50px;
    border: none;
    background: url(/img/bg_home1.png) no-repeat center/cover;
  }
  .el-main {
    --el-main-padding: 0;
    background: #fff;
    overflow: initial;
  }
  .el-footer {
    --el-footer-padding: 0;
  }
}

.bg {
  display: block;
  width: 100%;
  height: 680px;
  min-width: var(--max-width);
  object-position: center;
  object-fit: cover;
}
</style>
