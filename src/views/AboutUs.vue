<template>
  <div class="about-wrapper">
    <div class="introduce flex-align-end fade-in-bottom">
      <div class="introduce-wrapper">
        <div class="introduce-title">企业介绍</div>
        <div>
          深圳市燧光明科技有限公司是一家专注于将最先进的学习技术与IT技术等应用于教育培训领域的专业云服务商。整合优质的教育资源，使用世界前沿的开发技术为知识的传播和应用搭建平台，始终致力于推动教育智能化创新发展。<br />
          创新知识管理方式及呈现形式，提高学员学习兴趣及利用碎片化时间学习知识，推动组织不断发展和促进个人持续成长。基于深耕教育领域十余年的技术积淀，公司已完成从数字化课程制作专家向智慧教学生态构建者的战略升级，现聚焦"高校教学智能体"建设，打造新一代人工智能教育解决方案。
        </div>
      </div>
      <div class="introduce-stat">
        <div class="stat-item">
          <div>
            <div class="stat-num">
              <b>217</b>
              <span>所</span>
            </div>
            <div class="stat-title">累计服务高校客户</div>
          </div>
        </div>
        <div class="stat-item">
          <div>
            <div class="stat-num">
              <b>42</b>
              <span>所</span>
            </div>
            <div class="stat-title">覆盖双一流院校</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 发展历程 -->
    <div class="history-wrapper fade-in-bottom">
      <div class="history-title">发展历程</div>
      <div class="history fade-in-bottom">
        <div class="history-timeline">
          <div class="timeline-wrapper" ref="timelineWrapper">
            <div class="timeline-line"></div>
            <div class="timeline-item" v-for="(item, index) in historyList" :key="index">
              <div
                class="timeline-content"
                :class="{ top: index % 2 === 0, bottom: index % 2 !== 0 }"
              >
                <div v-for="(content, cIndex) in item.content" :key="cIndex">{{ content }}</div>
              </div>
              <img class="timeline-dot" src="/img/about/ic_dot.png" />
              <div class="timeline-year" :class="{ bottom: index % 2 === 0, top: index % 2 !== 0 }">
                {{ item.year }}
              </div>
            </div>
          </div>
          <div class="history-control">
            <div class="prev" @click="prevHistory" :class="{ disabled: isLeftEnd }">
              <el-icon><ArrowLeft /></el-icon>
            </div>
            <div class="next" @click="nextHistory" :class="{ disabled: isRightEnd }">
              <el-icon><ArrowRight /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 公司荣誉 -->
    <div class="honor fade-in-bottom">
      <div class="section-title">公司荣誉</div>
      <div class="honor-wrapper" ref="honorWrapper" @wheel.prevent="handleWheel">
        <div class="honor-item" v-for="(item, index) in honorList" :key="index">
          <img :src="item.img" alt="荣誉证书" />
          <div class="honor-title">{{ item.title }}</div>
        </div>
      </div>
    </div>

    <!-- 企业文化 -->
    <div class="culture fade-in-bottom">
      <div class="section-title">企业文化</div>
      <div class="culture-wrapper fade-in-bottom">
        <div class="culture-item">
          <div class="culture-content">
            <div class="culture-title">理念</div>
            <div class="culture-desc">为用户创造价值的过程中实现企业价值</div>
          </div>
          <img src="/img/about/bg_about_culture1.png" alt="理念" />
        </div>
        <div class="culture-item">
          <div class="culture-content">
            <div class="culture-title">使命</div>
            <div class="culture-desc">让教育帮助更多人改变命运</div>
          </div>
          <img src="/img/about/bg_about_culture2.png" alt="使命" />
        </div>
        <div class="culture-item">
          <div class="culture-content">
            <div class="culture-title">愿景</div>
            <div class="culture-desc">将IT技术等应用于教育培训领域，成为中国领先的专业云服务商</div>
          </div>
          <img src="/img/about/bg_about_culture3.png" alt="愿景" />
        </div>
        <div class="culture-item">
          <div class="culture-content">
            <div class="culture-title">价值观</div>
            <div class="culture-desc">创造、诚信、共享</div>
          </div>
          <img src="/img/about/bg_about_culture4.png" alt="价值观" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";

// 图片路径处理函数，使用Vite自动注入的环境变量获取基础路径
const getImageUrl = (path: string) => {
  return `${import.meta.env.BASE_URL}${path.startsWith("/") ? path.slice(1) : path}`;
};

// 新增防抖变量
const isScrolling = ref(false);
// 添加是否达到边界的状态
const isLeftEnd = ref(true); // 默认初始状态为最左边
const isRightEnd = ref(false);

// 发展历程数据
const historyList = ref([
  {
    year: "2013",
    content: [
      "专注线下培训服务：企业定制化内训、领导力开发项目、管理力提升项目、课程开发与讲师培养项目",
    ],
  },
  {
    year: "2014",
    content: ["学习平台开发", '自主研发"全屏通"学习平台'],
  },
  {
    year: "2015",
    content: ["成立专业MOOC和微课开发团队，开发O2O学习项目"],
  },
  {
    year: "2018",
    content: ["成立广州分公司，定位于中国领先的教育培训领域专业云服务商"],
  },
  {
    year: "2019",
    content: ["深耕行业领域", "高效运营行业资源，高校在线课程大力发展"],
  },
  {
    year: "2020",
    content: ["发力产教融合", "在成长为中国执业教育领军企业的道路上深耕"],
  },
  {
    year: "2021",
    content: ["打造全新平台", "场景化内容打通服务诉求，校企合作研发安全首护平台"],
  },
  {
    year: "2023",
    content: [
      "持续技术创新，服务行业数字化转型，持续创新科技点赋能行业数字化需求；发力应急安全行业领域；部署VR/AR/MR领域",
    ],
  },
  {
    year: "2024",
    content: ["技术创新升级", "运用虚拟仿真技术，通过AR、VR、数字人、3D助力在线课程建设"],
  },
  {
    year: "2025",
    content: [
      "自主研发AI教学中枢平台，集成智能开发开发系统、教学行为分析引擎、个性化学习推荐系统三大模块",
    ],
  },
]);

// 公司荣誉数据
const honorList = ref([
  {
    img: getImageUrl("img/cert/最佳课程制作供应商.png"),
    title: "最佳课程制作供应商",
  },
  {
    img: getImageUrl("img/cert/全国地方高校UOOC（优课）联盟优秀制作公司荣誉称号.png"),
    title: "全国地方高校UOOC（优课）联盟优秀制作公司荣誉称号",
  },
  {
    img: getImageUrl("img/cert/创新创业实践基地.png"),
    title: "创新创业实践基地",
  },
  {
    img: getImageUrl("img/cert/广播电视节目制作经营许可证.png"),
    title: "广播电视节目制作经营许可证",
  },
  {
    img: getImageUrl("img/cert/国家精品在线开放课程.jpeg"),
    title: "国家精品在线开放课程",
  },
  {
    img: getImageUrl("img/cert/深圳大学工业技术研究院产学研合作单位.png"),
    title: "深圳大学工业技术研究院产学研合作单位",
  },
  {
    img: getImageUrl("img/cert/高新技术企业.png"),
    title: "高新技术企业",
  },
  {
    img: getImageUrl("img/cert/高新技术企业 (1).png"),
    title: "高新技术企业",
  },
]);

// 鼠标滚轮事件处理
const honorWrapper = ref<HTMLElement | null>(null);

// 处理鼠标滚轮事件
const handleWheel = (e: WheelEvent) => {
  if (honorWrapper.value) {
    // 滚动速度因子
    const scrollFactor = 2;
    // 将垂直滚动转换为水平滚动
    honorWrapper.value.scrollLeft += e.deltaY * scrollFactor;
  }
};

// 时间轴控制
const timelineWrapper = ref<HTMLElement | null>(null);

// 检查滚动位置并更新按钮状态
const checkScrollPosition = () => {
  if (timelineWrapper.value) {
    // 检查是否到达左边界
    isLeftEnd.value = timelineWrapper.value.scrollLeft <= 0;

    // 检查是否到达右边界
    isRightEnd.value =
      timelineWrapper.value.scrollLeft + timelineWrapper.value.clientWidth >=
      timelineWrapper.value.scrollWidth - 5; // 添加小偏移量处理精度问题
  }
};

const prevHistory = () => {
  // 如果已经到最左边或正在滚动中，则不处理点击
  if (timelineWrapper.value && !isScrolling.value && !isLeftEnd.value) {
    isScrolling.value = true;
    const containerWidth = timelineWrapper.value.clientWidth;
    timelineWrapper.value.scrollTo({
      left: timelineWrapper.value.scrollLeft - containerWidth,
      behavior: "smooth",
    });

    // 滚动结束后重置状态，给予足够的时间完成动画
    setTimeout(() => {
      isScrolling.value = false;
      checkScrollPosition();
    }, 500);
  }
};

const nextHistory = () => {
  // 如果已经到最右边或正在滚动中，则不处理点击
  if (timelineWrapper.value && !isScrolling.value && !isRightEnd.value) {
    isScrolling.value = true;
    const containerWidth = timelineWrapper.value.clientWidth;
    timelineWrapper.value.scrollTo({
      left: timelineWrapper.value.scrollLeft + containerWidth,
      behavior: "smooth",
    });

    // 滚动结束后重置状态，给予足够的时间完成动画
    setTimeout(() => {
      isScrolling.value = false;
      checkScrollPosition();
    }, 500);
  }
};

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

  // 初始化滚动位置检查
  checkScrollPosition();

  // 添加滚动事件监听
  if (timelineWrapper.value) {
    timelineWrapper.value.addEventListener("scroll", checkScrollPosition);
  }
});
</script>

<style lang="scss" scoped>
.about-wrapper {
  .introduce {
    width: calc(var(--max-width) - 80px);
    padding: 60px 0 80px;
    margin: 0 auto;
    .introduce-wrapper {
      font-size: 20px;
      color: #333333;
      line-height: 34px;

      .introduce-title {
        font-size: 34px;
        font-weight: 500;
        color: #222222;
        line-height: 40px;
        margin-bottom: 30px;
      }
    }
  }
  .introduce-stat {
    margin-left: 60px;
    .stat-item {
      display: flex;
      align-items: center;
      padding: 0px 40px;
      width: 464px;
      height: 161px;
      &:first-of-type {
        background: url(/img/about/bg_about1.png) no-repeat center/cover;
      }
      &:last-of-type {
        background: url(/img/about/bg_about2.png) no-repeat center/cover;
        margin-top: 30px;
      }
      .stat-num {
        display: flex;
        align-items: flex-end;
        color: #fc3627;
        b {
          font-size: 54px;
          line-height: 66px;
        }
        span {
          font-size: 20px;
          line-height: 40px;
        }
      }
      .stat-title {
        font-size: 20px;
        color: #333333;
        line-height: 27px;
        margin-top: 8px;
      }
    }
  }

  // 通用标题样式
  .section-title {
    font-size: 34px;
    font-weight: 500;
    color: #222222;
    line-height: 40px;
    margin-bottom: 30px;
    text-align: center;
  }

  // 发展历程
  .history-wrapper {
    background: url(/img/about/bg_about3.png) no-repeat center/cover;
    padding: 60px 0 80px;
    .history-title {
      width: calc(var(--max-width) - 80px);
      margin: 0 auto;
      font-size: 34px;
      font-weight: 500;
      color: #222222;
      line-height: 40px;
    }
    .history {
      width: calc(var(--max-width) - 80px);
      margin: 50px auto 0;
      background: #fff;
      border-radius: 10px;

      .history-timeline {
        position: relative;
        padding: 0 70px;
        height: 464px;

        .timeline-wrapper {
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          position: relative;
          height: 100%;
          padding: 100px 20px;

          &::-webkit-scrollbar {
            display: none;
          }

          .timeline-line {
            position: fixed;
            top: 50%;
            left: 60px;
            right: 60px;
            height: 2px;
            background-color: #e0e0e0;
            z-index: 1;
            transform: translateY(-50%);
          }

          .timeline-item {
            position: relative;
            min-width: 260px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .timeline-year {
              font-size: 24px;
              font-weight: bold;
              color: #fc3627;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);

              &.top {
                top: calc(50% - 60px);
              }

              &.bottom {
                bottom: calc(50% - 60px);
              }
            }

            .timeline-dot {
              display: flex;
              width: 32px;
              height: 32px;
              z-index: 2;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              margin-top: 2px;
            }

            .timeline-content {
              background-color: #ffffff;
              font-size: 14px;
              line-height: 22px;
              color: #333;
              width: 260px;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              text-align: center;
              &::after {
                content: "";
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 3px;
                height: 30px;
                background: var(--el-color-primary);
              }

              &.top {
                bottom: calc(50% + 60px);
                &::after {
                  bottom: -10px;
                  translate: 0 100%;
                }
              }

              &.bottom {
                top: calc(50% + 60px);
                &::after {
                  top: -10px;
                  translate: 0 -100%;
                }
              }
            }
          }
        }

        .history-control {
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 50%;
          left: -22px;
          right: -22px;
          transform: translateY(-50%);
          z-index: 3;

          .prev,
          .next {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background-color: #ffffff;
            cursor: pointer;
            font-size: 16px;
            color: var(--el-color-primary);
            transition: all 0.3s;
            border: 1px solid transparent;
            box-shadow: 0px 4px 10px 0px rgba(252, 54, 39, 0.3);

            &:hover {
              border: 1px solid var(--el-color-primary);
            }

            &.disabled {
              color: #ccc;
              cursor: not-allowed;
              box-shadow: 0px 4px 10px 0px rgba(204, 204, 204, 0.6);

              &:hover {
                color: #ccc;
                border: 1px solid transparent;
              }
            }
          }
        }
      }
    }
  }

  // 公司荣誉
  .honor {
    width: calc(var(--max-width) - 80px);
    margin: 60px auto 0;
    user-select: none;

    .section-title {
      margin-bottom: 10px;
    }

    .honor-wrapper {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      overflow-x: auto;
      cursor: default;
      scroll-behavior: smooth;
      padding-top: 20px;

      &::-webkit-scrollbar {
        display: block;
        height: 3px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--el-color-primary);
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb:hover {
        cursor: pointer;
        background: var(--el-color-primary);
      }

      .honor-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        min-width: 285px;
        height: 380px;
        padding: 50px 30px;
        background: #f3f7fb;
        margin: 0 20px 20px 0;
        transition: all 0.3s;

        &:last-child {
          margin-right: 0;
        }

        img {
          display: block;
          width: 200px;
          height: 160px;
          object-fit: contain;
        }

        .honor-title {
          font-size: 20px;
          color: #333333;
          line-height: 27px;
          margin-top: 30px;
        }

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }

  // 企业文化
  .culture {
    margin-top: 80px;
    padding: 69px 0 86px;
    background: url(/img/about/bg_about4.png) no-repeat center/cover;

    .section-title {
      margin-bottom: 85px;
    }

    .culture-wrapper {
      display: grid;
      width: calc(var(--max-width) - 80px);
      margin: 0 auto;
      grid-template-columns: repeat(2, 1fr);
      gap: 68px 30px;

      .culture-item {
        display: flex;
        align-items: center;
        height: 168px;
        padding: 0 40px;
        background: linear-gradient(180deg, #ffffff 0%, #f4f7ff 46%);
        border: 2px solid #ffffff;
        border-radius: 10px;
        box-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
        transition: all 0.3s;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        img {
          width: 200px;
          height: 200px;
          object-fit: contain;
          margin: -48px 0 0 27px;
        }

        .culture-content {
          flex: 1;

          .culture-title {
            font-size: 26px;
            color: #222222;
            line-height: 28px;
            font-weight: 500;
          }

          .culture-desc {
            font-size: 16px;
            color: #333333;
            line-height: 24px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
