<template>
  <div ref="headerRef" class="header-fixed" :style="headerStyle">
    <div class="header-wrapper flex-between">
      <p class="company-name flex-align-center">
        <!-- <img class="logo" src="/favicon.ico" /> -->
        深圳市燧光明科技有限公司
      </p>
      <div class="flex">
        <el-button
          v-for="item in menu"
          :class="{ active: curPath == item.path }"
          link
          @click="gotoPage(item.path)"
          >{{ item.name }}</el-button
        >
        <el-button link @click="gotoOld">访问旧版</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { onMounted, ref, watch, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const menu = ref([
  { name: "首页", path: "/" },
  { name: "产品与服务", path: "/Product" },
  { name: "客户案例", path: "/CustomerCase" },
  { name: "关于我们", path: "/AboutUs" },
]);

const gotoPage = (path: string) => {
  // 滚动到顶部
  window.scrollTo({ top: 0 });
  router.push({ path });
};

const gotoOld = () => {
  window.open("http://www.zzltop.com/");
};

const route = useRoute();
const curPath = ref("/");

// 用于存储 header-fixed 元素的引用
const headerRef = ref<HTMLElement | null>(null);
// 动态绑定的样式
const headerStyle = ref({});

// 处理滚动事件的函数
const handleScroll = () => {
  if (headerRef.value) {
    const headerHeight = headerRef.value.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const opacity = Math.min(scrollTop / headerHeight, 1);

    headerStyle.value = {
      background: `rgba(255, 255, 255, ${0.8 * opacity})`,
      backdropFilter: `blur(${10 * opacity}px)`
    };
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // 初始化时调用一次，确保页面加载时样式正确
  handleScroll();
});

// 组件卸载时移除滚动事件监听
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

watch(route, (newVal, oldVal) => {
  curPath.value = newVal.path;
});
</script>

<style lang="scss" scoped>
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 40px;
  // 初始背景透明
  background: rgba(255,255,255,0);
  backdrop-filter: blur(0px);
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}
.header-wrapper {
  height: 80px;
  width: calc(var(--max-width) - 80px);
  margin: 0 auto;
  .company-name {
    font-size: 20px;
    font-weight: 700;
    color: #222222;
    line-height: 24px;
    .logo {
      display: block;
      width: 42px;
      height: 42px;
      margin-right: 11.5px;
    }
  }
  .el-button {
    position: relative;
    font-size: 16px;
    color: #333333;
    line-height: 24px;
    margin-left: 40px;
    &.active {
      color: #222222;
      &::after {
        content: "";
        display: block;
        width: 14px;
        height: 4px;
        background: linear-gradient(90deg, #fc3627 0%, #fe960b 100%);
        border-radius: 2px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
