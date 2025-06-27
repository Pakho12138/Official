<template>
  <div ref="carouselRef" class="carousel-wrapper">
    <!-- 内容部分 -->
    <div class="carousel-content">
      <!-- 左侧导航 -->
      <div class="carousel-nav">
        <div class="nav-items-container">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="nav-item"
            :class="{ active: index <= currentIndex, current: index === currentIndex }"
            @click="setActive(index)"
          >
            <div class="nav-item-dot-container">
              <div class="dot"></div>
            </div>
            <div class="item-content">
              <div class="item-title">{{ item.title }}</div>
              <!-- 添加描述，只在当前激活项显示 -->
              <div
                class="item-desc"
                :style="{ maxHeight: (index === currentIndex ? currentDescHeight : 0) + 'px' }"
              >
                {{ item.description }}
              </div>
            </div>

            <!-- 连接线 - 显示在当前及之前的点之间，且对于当前点显示进度 -->
            <div v-if="index < items.length - 1" class="connection-container">
              <!-- 已完成的线(实线) -->
              <div v-if="index < currentIndex" class="completed-line"></div>

              <!-- 进度线(当前点) -->
              <div
                v-if="index === currentIndex"
                class="progress-line"
                :style="{ height: `${progressPercent}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧内容展示 -->
      <div class="carousel-display">
        <div v-for="(item, index) in items" :key="index">
          <transition name="fade">
            <div class="carousel-image" v-if="currentIndex === index">
              <img :src="item.image" :alt="item.title" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
// 定义 ref 来引用轮播组件
const carouselRef = ref<HTMLElement | null>(null);
// 定义一个标志位，判断组件是否在视口中
const isInViewport = ref(false);
// 定义 IntersectionObserver 实例
let observer: IntersectionObserver | null = null;

// 定义轮播项接口
interface CarouselItem {
  title: string;
  description: string;
  image: string;
}

// 定义组件接收的属性
const props = defineProps({
  // 标题
  title: {
    type: String,
    default: "轻简灵活的项目协作",
  },
  // 轮播项数据
  items: {
    type: Array as () => CarouselItem[],
    default: () => [],
  },
  // 自动轮播间隔时间(毫秒)
  interval: {
    type: Number,
    default: 3000,
  },
});

// 当前激活的索引
const currentIndex = ref(0);
// 定时器
const timer = ref<number | null>(null);
// 动画进度
const progressPercent = ref(0);
// 动画帧
const animationFrame = ref<number | null>(null);

// 计算当前激活项的描述高度
const currentDescHeight = computed(() => {
  const currentItem = props.items[currentIndex.value];
  if (!currentItem) return 0;
  // 假设每行文字高度为24px，计算行数
  const lineHeight = 24;
  const lines = Math.ceil(currentItem.description.length / 23); // 假设每行约30个字符
  return lines * lineHeight;
});

// 设置激活项
const setActive = (index: number) => {
  if (currentIndex.value === index) return;

  currentIndex.value = index;
  resetProgress();
  // 重置定时器
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
  startAutoPlay();
};

// 轮播到下一项
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
  resetProgress();
};

// 重置进度
const resetProgress = () => {
  progressPercent.value = 0;
  startProgressAnimation();
};

// 开始进度动画
const startProgressAnimation = () => {
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value);
  }

  const startTime = Date.now();
  const duration = props.interval;

  const animate = () => {
    const now = Date.now();
    const elapsed = now - startTime;
    progressPercent.value = Math.min((elapsed / duration) * 100, 100);

    if (elapsed < duration) {
      animationFrame.value = requestAnimationFrame(animate);
    }
  };

  animationFrame.value = requestAnimationFrame(animate);
};

// 开始自动轮播
const startAutoPlay = () => {
  if (timer.value || !isInViewport.value) return;

  resetProgress();
  timer.value = window.setInterval(() => {
    nextSlide();
  }, props.interval);
};

// 监听轮播项变化
watch(
  () => props.items,
  () => {
    // 重置当前索引
    currentIndex.value = 0;
    resetProgress();
  },
  { deep: true }
);

// 组件挂载时设置 IntersectionObserver
onMounted(() => {
  if (props.items.length > 0 && carouselRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewport.value = entry.isIntersecting;
          if (isInViewport.value) {
            startAutoPlay();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    observer.observe(carouselRef.value);
  }
});

// 组件卸载前清除定时器、动画帧和 IntersectionObserver
onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }

  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value);
  }

  if (observer) {
    observer.disconnect();
  }
});
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  max-width: var(--max-width, 1200px);
  margin: 50px auto;
  padding: 0 20px;
}

.carousel-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
}

.carousel-nav {
  flex: 0 0 424px;

  .nav-items-container {
    position: relative;
  }

  .nav-item {
    display: flex;
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &.active {
      .dot {
        background-color: var(--el-color-primary) !important;
      }

      .item-title {
        color: var(--el-color-primary);
        font-weight: 500;
      }
    }

    &.current {
      .dot {
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          background: rgba(255, 89, 60, 0.1);
          border-radius: 50%;
        }
      }

      .item-desc {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: opacity 0.2s linear 0.3s, max-height 0.4s ease-in-out,
          transform 0.2s ease-in-out 0.2s !important;
        margin-top: 14px;
      }
    }

    // 连接线容器
    .connection-container {
      position: absolute;
      top: 24px; // 从点的中心开始
      left: 21px; // 对准点的中心
      width: 2px; // 线宽
      height: 100%; // 只覆盖到下一个点
      overflow: hidden;
      z-index: 1;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            180deg,
            rgba(252, 54, 39, 0.5) 0,
            rgba(252, 54, 39, 0.5) 4px,
            transparent 0,
            transparent 6px
          )
          repeat-y;
      }
      // 完成的线
      .completed-line {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--el-color-primary);
      }

      // 进行中的线（进度线）
      .progress-line {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0; // 初始高度为0
        background-color: var(--el-color-primary);
        transition: height 0.1s linear;
      }
    }

    .nav-item-dot-container {
      position: relative;
      margin-right: 20px;
      z-index: 2;

      .dot {
        position: relative;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: #f89791;
        margin-top: 8px;
        flex-shrink: 0;
        transition: background-color 0.3s ease;
        z-index: 2;
      }
    }

    .item-content {
      flex: 1;

      .item-title {
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        color: #222222;
        transition: color 0.3s ease;
      }

      .item-desc {
        font-size: 16px;
        line-height: 24px;
        color: #333333;
        max-height: 0;
        opacity: 0;
        transform: translateY(-1.5rem);
        transition: opacity 0.2s linear, max-height 0.4s ease-in-out,
          transform 0.2s ease-in-out 0.2s;
      }
    }
  }
}

.carousel-display {
  flex: 1;
  width: 100%;
  height: 454px;
  position: relative;
  overflow: hidden;

  .carousel-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
}

// 过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
