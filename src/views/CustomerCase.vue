<template>
  <div class="customer-case">
    <h2 class="title fade-in-bottom">客户案例</h2>
    <div class="desc fade-in-bottom">
      致力于多方位赋能教育管理工作，覆盖教学管理的各个领域。以整体系统的视角个性赋能平台，把握4-7流出的信息数据，将各类教学管理与机构自行平台集合，为学校打造一个高效、便捷、智能的管理体系，实现教学与行政事务的数据关联互动。为学校传承和一个全方位的、卓越的用户、智能服务的新化管理生态体系。
    </div>
    <div class="case-list fade-in-bottom">
      <div
        class="case-item"
        v-for="(item, index) in caseList"
        :key="index"
        @click="openVideo(item)"
      >
        <div class="case-img">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div class="case-info">
          <div class="case-title">{{ item.title }}</div>
          <!-- <div class="case-desc">{{ item.knowledge }}</div>
          <div class="case-type">{{ item.type }}</div> -->
          <div class="case-more">点击查看 ></div>
        </div>
      </div>
    </div>
    <div class="pagination-container">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[9, 12, 18, 24]"
        :small="false"
        :background="true"
        layout="total, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :pager-count="5"
      />
    </div>

    <!-- 使用视频模态框组件 -->
    <VideoModal v-model:show="showVideoModal" :video="currentVideo" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import VideoModal from "../components/VideoModal.vue";

interface CourseItem {
  title: string;
  knowledge: string;
  type: string;
  image: string;
  url: string;
}

// 课程案例数据
const courseData: CourseItem[] = [
  {
    title: "商务现场口译",
    knowledge: "课程标准",
    type: "精品微课（抠像）",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/1.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/1.mp4",
  },
  {
    title: "手机摄影与短视频制作",
    knowledge: "夜景拍摄准备（一）",
    type: "精品微课（抠像）",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/2.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/2.mp4",
  },
  {
    title: "运动养生功法系列",
    knowledge: "健身气功·八段锦 左右开弓似射雕",
    type: "精品微课（实拍）",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/3.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/3.mp4",
  },
  {
    title: "国家教学成果奖",
    knowledge: "城市问题导向的地理空间信息工程交叉复合型人才培养实践",
    type: "精品微课（宣传片）",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/19.png",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/19.mp4",
  },
  {
    title: "跨境电商实务",
    knowledge: "跨境电子商务的生态圈",
    type: "精品微课（抠像）",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/5.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/5.mp4",
  },
  {
    title: "建筑健康概论",
    knowledge: "风景园林与公共健康",
    type: "普通微课（抠像）",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/6.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/6.mp4",
  },
  {
    title: "社会学基础",
    knowledge: "社会角色的扮演",
    type: "PPT微课（抠像）",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/7.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/7.mp4",
  },
  {
    title: "高职生劳动教育教程",
    knowledge: "解码劳模精神：争当时代先锋",
    type: "PPT微课（抠像）",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/8.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/8.mp4",
  },
  {
    title: "国家教学成果奖",
    knowledge: '"1+3+5"双创人才培养体系的深大探索',
    type: "宣传片",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/20.png",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/20.mp4",
  },
  {
    title: "国家教学成果奖",
    knowledge: "计算思维与信息素养并重的计算机基础课程体系重构与实践",
    type: "宣传片",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/21.png",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/21.mp4",
  },
  {
    title: "影视广告设计",
    knowledge: "导语",
    type: "情景动画+图文动画",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/11.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/11.mp4",
  },
  {
    title: "国际市场营销",
    knowledge: "现代营销理论",
    type: "PPT动画",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/12.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/12.mp4",
  },
  {
    title: "纪录片策划与制作",
    knowledge: "课程宣传片",
    type: "素材剪辑",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/13.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/13.mp4",
  },
  {
    title: "教学能力大赛",
    knowledge: "销售业绩分析报告",
    type: "课堂实录",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/22.png",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/22.mp4",
  },
  {
    title: "教学能力大赛",
    knowledge: "红人营销推广",
    type: "课堂实录",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/23.png",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/23.mp4",
  },
  {
    title: "教学能力大赛",
    knowledge: "武术比赛项目全国比赛一等奖",
    type: "抠像+包装",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/25.png",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/25.mp4",
  },
  {
    title: "微言述党史，薪火永流传",
    knowledge: "宣传片",
    type: "实拍+抠像+素材剪辑",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/17.jpg",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/17.mp4",
  },
  {
    title: "教学能力大赛",
    knowledge: "职业综合英语",
    type: "课堂实录",
    image: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/24.png",
    url: "https://qa-chestsapp2024.obs.cn-east-3.myhuaweicloud.com/mooc/kechenganli2022/24.mp4",
  },
];

// 分页相关数据
const currentPage = ref(1);
const pageSize = ref(9);
const total = ref(courseData.length); // 总数据量
const caseList = ref<CourseItem[]>([]);

// 视频播放相关
const showVideoModal = ref(false);
const currentVideo = ref<CourseItem>({
  title: "",
  knowledge: "",
  type: "",
  image: "",
  url: "",
});

// 打开视频预览
const openVideo = (item: CourseItem) => {
  currentVideo.value = item;
  showVideoModal.value = true;
};

// 处理每页显示数量变化
const handleSizeChange = (val: number) => {
  pageSize.value = val;
  fetchCaseList();
};

// 处理页码变化
const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  fetchCaseList();
};

// 获取案例列表数据
const fetchCaseList = () => {
  // 根据当前页码和每页显示数量从courseData中获取对应数据
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = Math.min(startIndex + pageSize.value, courseData.length);
  caseList.value = courseData.slice(startIndex, endIndex);
};

let observer: any = null;
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
};

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "100px",
    threshold: 0,
  });
  const fadeInElements = document.querySelectorAll(".fade-in-bottom");
  fadeInElements.forEach((element) => {
    observer.observe(element);
  });

  // 初始化加载数据
  fetchCaseList();
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style lang="scss" scoped>
.customer-case {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0 70px;

  .title {
    font-size: 34px;
    font-weight: 500;
    color: #222222;
    line-height: 40px;
    text-align: center;
    margin-bottom: 30px;
  }

  .desc {
    font-size: 16px;
    color: #333333;
    line-height: 24px;
    text-align: center;
    margin-bottom: 50px;
  }

  .case-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    .case-item {
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

        .case-img img {
          transform: scale(1.05);
        }

        .case-more {
          color: #fff !important;
          padding: 6px 14px;
          background: linear-gradient(90deg, #fc3627 0%, #fe960b 100%);
          border-radius: 6px;
          box-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
        }
      }

      .case-img {
        width: 100%;
        height: 214px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s;
        }
      }

      .case-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 130px;
        padding: 0px 26px;

        .case-title {
          font-size: 24px;
          font-weight: 500;
          color: #222222;
          line-height: 28px;
          text-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
        }

        .case-desc {
          font-size: 14px;
          color: #333;
          margin-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .case-type {
          font-size: 12px;
          color: #666;
          margin-bottom: 8px;
        }

        .case-more {
          align-self: flex-start;
          font-size: 14px;
          color: #fc3627;
          line-height: 19px;
          text-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
          margin-top: 22px;
          transition: all 0.3s;
        }
      }
    }
  }

  .pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
}

// 淡入动画
.fade-in-bottom {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 768px) {
  .customer-case {
    .case-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 480px) {
  .customer-case {
    .case-list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
