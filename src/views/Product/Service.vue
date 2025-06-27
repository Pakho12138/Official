<template>
  <div class="service-container">
    <div class="fade-in-bottom">
      <div class="section-title">
        <h2>我们的服务</h2>
      </div>

      <div class="service-desc">
        致力于全方位服务教学管理工作，覆盖教学管理的整个周期，以及教务管理的各个关键环节，它集成了先进的信息技术，将各类教学管理流程进行数字化整合，为学校打造一个高效、便捷、智能的管理环境。凭借数字化手段重塑传统教学管理流程，为学校构筑起一个高效协同、便捷易用、智能精准的现代化管理生态环境。
      </div>
    </div>

    <div class="content-wrapper flex-align-center fade-in-bottom">
      <div class="content-box fade-in-bottom">
        <div class="content-title">大模型训练服务</div>
        <div class="content-text">
          算力专家与行业专家训练专属垂直领域模型，实现知识产权输出，全面提升模型专业能力。增强型的deepseekR1模型训练机制，对模型进行适度改造并制定完备训练机制。
        </div>
      </div>
    </div>

    <div class="service-section fade-in-bottom">
      <!-- 产品Tab导航 -->
      <div class="service-tabs">
        <div
          v-for="(item, index) in productItems"
          :key="index"
          class="service-tab-item"
          :class="{ active: productActiveTab === index || productTabHover === index }"
          @click="productActiveTab = index"
          @mouseenter="productTabHover = index"
          @mouseleave="productTabHover = -1"
        >
          <img
            :src="
              getImageUrl(
                productActiveTab === index || productTabHover === index
                  ? `pic_service_tab${index + 1}_active`
                  : `pic_service_tab${index + 1}`
              )
            "
            alt="产品图标"
            class="tab-icon"
          />
          <div class="service-tab-title">{{ item.title }}</div>
          <div class="service-tab-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>

    <!-- 课件特色 -->
    <div class="sepcial-wrapper fade-in-bottom">
      <div class="section-title underline">
        <h2>课件特色</h2>
      </div>

      <div class="sepcial-content fade-in-bottom">
        <div
          class="sepcial-content-item hover-without-shadow"
          v-for="(item, index) in specialItems"
          :key="index"
        >
          <div class="sepcial-content-item-title">{{ item.title }}</div>
          <div class="sepcial-content-item-text">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>

    <!-- 我们的优势 -->
    <div class="advantage-wrapper fade-in-bottom">
      <div class="section-title underline">
        <h2>我们的优势</h2>
      </div>

      <div class="advantage-content">
        <div
          class="advantage-content-item hover-without-shadow"
          v-for="(item, index) in advantageItems"
          :key="index"
        >
          <img :src="getImageUrl(`ic_service_advantage${index + 1}`)" alt="优势图标" />
          <div class="advantage-content-item-content">
            <div class="advantage-content-item-title">{{ item.title }}</div>
            <div class="advantage-content-item-text">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 产品类型 -->
    <div class="category-wrapper fade-in-bottom">
      <div class="section-title underline">
        <h2>产品类型</h2>
      </div>
      <!-- 添加项目协作轮播组件 -->
      <Carousel
        class="fade-in-bottom"
        title="轻简灵活的项目协作"
        :items="carouselData"
        :interval="3000"
      />
    </div>

    <!-- 服务流程 -->
    <div class="flow-wrapper fade-in-bottom">
      <div class="fade-in-bottom">
        <div class="section-title underline">
          <h2>服务流程</h2>
        </div>
        <div class="flow-title">设计开发</div>
        <img class="flow-img1" src="/img/service/pic_service_flow1.png" alt="设计开发" />
      </div>

      <div class="fade-in-bottom">
        <div class="section-title underline">
          <h2>服务流程</h2>
        </div>
        <div class="flow-title">资源制作</div>
        <img class="flow-img2" src="/img/service/pic_service_flow2.png" alt="设计开发" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Carousel from "@/components/Carousel.vue";

// 获取图片URL
const getImageUrl = (name: string) => {
  return `${import.meta.env.BASE_URL}img/service/${name}.png`;
};

const productActiveTab = ref(0);
const productTabHover = ref(-1);

const productItems = ref([
  {
    title: "微课制作",
    desc: "支持绿幕抠像、实景录制、PPT录制、真人出镜、课程实录……",
  },
  {
    title: "MOOC制作",
    desc: "脚本设计、人物设计、场景绘制、配音、设计demo样稿、沟通确认、设计成片……",
  },
  {
    title: "参赛类视频制作",
    desc: "微电影、宣传片、大赛服务……",
  },
]);

const specialItems = ref([
  {
    title: "以学习者为中心",
    desc: '传统的MOOC、微课制作只强调拍摄的清晰度、色彩等单纯拍摄和后期制作技术，课程设计以"教"为中心，而忽视学习者学习的兴趣和愉悦度。我们的MOOC、微课课程设计更加强调以"学"为中心，加入交互设计，增强了学习者的参与感和优化了用户的体验感。',
  },
  {
    title: "教学内容的结构化",
    desc: "由于MOOC、微课在师生的互动上，不如课堂教学，因此采取内容的结构化设计，将知识以章节点的结构呈现，学习内容一目了然，方便学习者学习和记忆。",
  },
  {
    title: "呈现方式的多样化",
    desc: "课程呈现方式除了采用Flash动画、AE等制作形式外，还提供H5交互、长图等内容呈现方式，设计卡通人物形象，轻松活波，有趣有料。",
  },
]);

const advantageItems = ref([
  {
    title: "团队成熟",
    desc: "项目团队、教学设计团队、拍摄团队、后期制作团队。",
  },
  {
    title: "项目部标准操作和执行流程",
    desc: "每个项目都有专业的项目经理进行统一对接和交付。",
  },
  {
    title: "严格的质量管控体系",
    desc: "有专门的测试团队,一审，项目经理二审,交付中心经理三审。",
  },
  {
    title: "沟通机制",
    desc: "定期汇报(周报、项目任务清单和进程表;关键里程碑汇报)。",
  },
]);

// 轮播组件数据
const carouselData = ref([
  {
    title: "视频类",
    description: "理论/实操/理论+实操",
    image: `${import.meta.env.BASE_URL}img/service/pic_service_prod_type1.png`,
  },
  {
    title: "数字化资源类",
    description: "一体化教材、课程标准、教案、教材、 PPT课件、习题、考题",
    image: `${import.meta.env.BASE_URL}img/service/pic_service_prod_type2.png`,
  },
  {
    title: "平台",
    description: "直播教学平台、精品课程展示平台",
    image: `${import.meta.env.BASE_URL}img/service/pic_service_prod_type3.png`,
  },
  {
    title: "多媒体教学资源类",
    description: "课堂模拟/二维动画三维动画/信息化图文音频",
    image: `${import.meta.env.BASE_URL}img/service/pic_service_prod_type4.png`,
  },
  {
    title: "增值服务类",
    description: "微电影/大赛服务 宣传片等",
    image: `${import.meta.env.BASE_URL}img/service/pic_service_prod_type5.png`,
  },
  {
    title: "软件类",
    description: "AR/VR/H5/小程序",
    image: `${import.meta.env.BASE_URL}img/service/pic_service_prod_type6.png`,
  },
]);

onMounted(() => {
  // 添加动画效果
  const fadeInElements = document.querySelectorAll(".fade-in-bottom");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "100px",
      threshold: 0,
    }
  );

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
});
</script>

<style lang="scss" scoped>
.service-container {
  width: 100%;
  max-width: 100%;
}

.section-title {
  text-align: center;
  margin: 60px 0 50px;
  &.underline {
    h2 {
      font-size: 30px;
      line-height: 36px;
    }
    &::after {
      content: "";
      display: block;
      width: 80px;
      height: 6px;
      background: linear-gradient(90deg, #fc3627 0%, #fe960b 100%);
      margin: 12px auto 0;
    }
  }
  h2 {
    font-size: 34px;
    font-weight: 500;
    color: #222222;
    line-height: 40px;
  }
}

.service-desc {
  max-width: calc(var(--max-width) - 80px);
  margin: 30px auto 0;
  text-align: center;
  font-size: 16px;
  color: #333333;
  line-height: 24px;
}

.content-wrapper {
  height: 530px;
  background: url("/img/service/bg_service.png") no-repeat center/cover;
  margin-top: 30px;
  .content-box {
    width: 1200px;
    margin: 0 auto;
    padding-right: 690px;
    &.content-right {
      padding-right: 0;
      padding-left: 690px;
    }
    .content-title {
      font-size: 30px;
      color: #252525;
      line-height: 36px;
      font-weight: 500;
      &::after {
        content: "";
        display: block;
        width: 120px;
        height: 6px;
        background: linear-gradient(90deg, #fc3627 0%, #ff9800 100%);
        margin-top: 14px;
      }
    }
    .content-text {
      font-size: 16px;
      color: #666666;
      line-height: 24px;
      margin-top: 20px;
    }
  }
}

.service-section {
  max-width: calc(var(--max-width) - 80px);
  margin: 0 auto 60px;

  // 产品选项卡
  .service-tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
    margin-top: 142px;

    .service-tab-item {
      cursor: pointer;
      position: relative;
      padding: 86px 60px 30px;
      text-align: center;
      transition: all 0.3s;
      &:first-child {
        border-radius: 10px 0px 0px 10px;
      }
      &:last-child {
        border-radius: 0px 10px 10px 0px;
      }

      &.active {
        background: linear-gradient(270deg, #fe664f 0%, #fc3627 100%);
        .service-tab-title,
        .service-tab-desc {
          color: #fff;
        }
      }

      .tab-icon {
        width: 130px;
        height: 130px;
        position: absolute;
        top: -62px;
        left: 50%;
        transform: translateX(-50%);
      }

      .service-tab-title {
        text-align: center;
        font-size: 26px;
        font-weight: 500;
        color: #222222;
        line-height: 30px;
        text-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
      }

      .service-tab-desc {
        font-size: 14px;
        color: #666666;
        line-height: 24px;
        letter-spacing: -0.01px;
        text-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
        margin-top: 18px;
      }
    }
  }
}

.sepcial-wrapper {
  background: #f6f9fb;
  overflow: hidden;
  .sepcial-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: calc(var(--max-width) - 80px);
    margin: 0 auto 60px;
    .sepcial-content-item {
      height: 446px;
      padding: 40px 30px;
      background: url("/img/service/bg_service_special1.png") no-repeat center / contain;
      &:nth-child(2) {
        background: url("/img/service/bg_service_special2.png") no-repeat center / contain;
      }
      &:nth-child(3) {
        background: url("/img/service/bg_service_special3.png") no-repeat center / contain;
      }
      .sepcial-content-item-title {
        font-size: 24px;
        font-weight: 500;
        color: #222222;
        line-height: 28px;
        margin-bottom: 20px;
      }
      .sepcial-content-item-text {
        font-size: 16px;
        color: #333333;
        line-height: 24px;
      }
    }
  }
}

.advantage-wrapper {
  overflow: hidden;
  .advantage-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: calc(var(--max-width) - 80px);
    margin: 0 auto 60px;
    .advantage-content-item {
      display: flex;
      align-items: center;
      background: #ffffff;
      border: 2px solid #ffffff;
      border-radius: 10px;
      padding: 34px 40px;
      img {
        display: block;
        width: 88px;
        height: 92px;
        margin-right: 40px;
      }
      .advantage-content-item-title {
        font-size: 24px;
        color: #222222;
        line-height: 28px;
        font-weight: 500;
      }
      .advantage-content-item-text {
        font-size: 16px;
        color: #333333;
        line-height: 24px;
        margin-top: 20px;
      }
    }
  }
}

.category-wrapper {
  background: #f6f9fb;
  overflow: hidden;
  .category-content {
    max-width: calc(var(--max-width) - 80px);
    margin: 0 auto;
  }
}

.flow-wrapper {
  background: url("/img/service/bg_service_flow.png") no-repeat center / cover;
  padding-bottom: 80px;
  overflow: hidden;
  .section-title {
    margin-bottom: 12px;
  }
  .flow-title {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #222222;
    line-height: 20px;
    margin-bottom: 40px;
  }
  .flow-img1 {
    display: block;
    width: 1222px;
    margin: 0 auto;
  }
  .flow-img2 {
    display: block;
    width: 1225px;
    margin: 0 auto;
  }
}
</style>
