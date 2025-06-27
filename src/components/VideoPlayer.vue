<template>
  <div class="video-modal" v-if="modelValue" @click.self="closeModal">
    <div class="video-container">
      <div class="close-btn" @click="closeModal">×</div>
      <div class="video-player">
        <video 
          ref="videoRef" 
          controls 
          :src="videoData.url"
          preload="auto"
        ></video>
      </div>
      <div class="video-info">
        <h3>{{ videoData.title }}</h3>
        <p>{{ videoData.knowledge }}</p>
        <p class="video-type">{{ videoData.type }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, onUnmounted } from 'vue';

// 定义组件属性
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  videoData: {
    type: Object,
    default: () => ({
      title: '',
      knowledge: '',
      type: '',
      url: ''
    })
  }
});

// 定义事件
const emit = defineEmits(['update:modelValue']);

// 视频元素引用
const videoRef = ref<HTMLVideoElement | null>(null);

// 关闭模态框
const closeModal = () => {
  if (videoRef.value) {
    videoRef.value.pause();
  }
  emit('update:modelValue', false);
};

// 监听模态框状态变化
watch(() => props.modelValue, (newVal) => {
  if (newVal && videoRef.value) {
    // 当模态框显示时，重新加载视频
    setTimeout(() => {
      if (videoRef.value) {
        videoRef.value.load();
      }
    }, 100);
  }
});

// 添加ESC键监听
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    closeModal();
  }
};

// 添加键盘事件监听
document.addEventListener('keydown', handleKeyDown);

// 组件卸载时移除事件监听
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<style lang="scss" scoped>
/* 视频预览模态框 */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .video-container {
    position: relative;
    width: 80%;
    max-width: 1000px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      color: #fff;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 10;
      transition: all 0.3s;
      
      &:hover {
        background: rgba(0, 0, 0, 0.8);
      }
    }
    
    .video-player {
      width: 100%;
      
      video {
        display: block;
        width: 100%;
        height: auto;
        max-height: 70vh;
        object-fit: contain;
        background-color: #000;
      }
    }
    
    .video-info {
      padding: 20px;
      
      h3 {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-bottom: 8px;
      }
      
      p {
        font-size: 14px;
        color: #666;
        margin-bottom: 5px;
        
        &.video-type {
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .video-modal {
    .video-container {
      width: 95%;
    }
  }
}
</style> 