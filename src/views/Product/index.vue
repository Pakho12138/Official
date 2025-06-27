<template>
  <div>
    <!-- 产品头部 -->
    <div class="product-header">
      <div class="tab-container">
        <!-- 修改部分：绑定 active 类和点击事件 -->
        <div class="product-tab" :class="{ active: activeTab === 0 }" @click="activeTab = 0">
          我们的产品
        </div>
        <div class="product-tab" :class="{ active: activeTab === 1 }" @click="activeTab = 1">
          我们的服务
        </div>
      </div>
    </div>

    <div v-show="activeTab === 0">
      <Product />
    </div>

    <div v-show="activeTab === 1">
      <Service />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Product from "./Product.vue";
import Service from "./Service.vue";

const activeTab = ref(0);
</script>

<style lang="scss" scoped>
// 产品头部标签
.product-header {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(30px);
  margin-top: -70px;
  overflow: hidden;

  .tab-container {
    max-width: calc(var(--max-width) - 80px);
    margin: 0 auto;
    display: flex;
    padding: 0;

    .product-tab {
      cursor: pointer;
      transition: all 0.3s;
      position: relative;
      font-size: 18px;
      font-weight: 500;
      color: #333333;
      line-height: 24px;
      width: 300px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        color: var(--el-color-primary);
      }

      &.active {
        background: rgba(252, 54, 39, 0.06);
        color: var(--el-color-primary);
        font-weight: 500;

        // 使用 ::after 伪元素替代 .tab-line
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(270deg, #fe664f 0%, #fc3627 100%);
        }
      }
    }
  }
}
</style>
