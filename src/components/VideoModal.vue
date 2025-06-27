<template>
  <div class="video-modal" v-if="show" @click.self="closeModal">
    <div class="video-wrapper">
      <!-- 关闭按钮 -->
      <div class="close-btn" @click="closeModal">×</div>
      
      <!-- 固定尺寸的播放器容器 -->
      <div class="player-container">
        <video
          ref="videoRef"
          controls
          autoplay
          :src="video.url"
          preload="auto"
          class="video-player"
          @ended="videoEnded"
          @play="handleVideoPlay"
          @pause="handleVideoPause"
        ></video>
        
        <!-- 视频中央播放按钮 -->
        <div class="play-btn" v-if="!isPlaying" @click="playVideo">
          <svg viewBox="0 0 24 24" width="60" height="60">
            <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.5)" />
            <path d="M10 8l6 4-6 4V8z" fill="#fff" />
          </svg>
        </div>
      </div>
      
      <!-- 视频信息 -->
      <div class="video-info">
        <h3>{{ video.title }}</h3>
        <p>{{ video.knowledge }}</p>
        <p class="type">{{ video.type }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  video: {
    type: Object,
    default: () => ({
      title: '',
      knowledge: '',
      type: '',
      url: '',
      image: ''
    })
  }
});

const emit = defineEmits(['update:show']);

const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);

// 关闭模态框
const closeModal = () => {
  if (videoRef.value) {
    videoRef.value.pause();
    isPlaying.value = false;
  }
  emit('update:show', false);
};

// 播放视频
const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play().then(() => {
      isPlaying.value = true;
    }).catch(err => {
      console.error('播放失败:', err);
    });
  }
};

// 视频播放结束
const videoEnded = () => {
  isPlaying.value = false;
};

// 处理视频播放事件
const handleVideoPlay = () => {
  isPlaying.value = true;
};

// 处理视频暂停事件
const handleVideoPause = () => {
  isPlaying.value = false;
};

// 添加ESC键监听
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.show) {
    closeModal();
  }
};

// 监听模态框显示状态
watch(() => props.show, (newVal) => {
  if (newVal && videoRef.value) {
    // 当模态框显示时，确保视频加载
    videoRef.value.load();
  }
});

onMounted(() => {
  // 添加键盘事件监听
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  // 移除键盘事件监听
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<style lang="scss" scoped>
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  
  .video-wrapper {
    position: relative;
    width: 80%;
    max-width: 1000px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    
    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 36px;
      height: 36px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      z-index: 10;
      transition: all 0.3s;
      
      &:hover {
        background: rgba(0, 0, 0, 0.8);
        transform: scale(1.1);
      }
    }
    
    .player-container {
      position: relative;
      width: 100%;
      // 固定的16:9比例容器
      padding-top: 56.25%;
      background-color: #000;
      
      .video-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain; // 保持视频比例，确保完整显示
      }
      
      .play-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
      }
    }
    
    .video-info {
      padding: 20px;
      
      h3 {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-bottom: 10px;
      }
      
      p {
        font-size: 14px;
        color: #666;
        margin-bottom: 5px;
        
        &.type {
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
}

// 响应式调整
@media screen and (max-width: 768px) {
  .video-modal {
    .video-wrapper {
      width: 95%;
    }
  }
}
</style>
