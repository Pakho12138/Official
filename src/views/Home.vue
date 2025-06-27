<template>
  <div class="home-wrapper">
    <div class="fade-in-bottom">
      <div class="primary-title-wrapper flex-center">
        <div class="primary-title">核心优势</div>
        <el-button class="btn-more flex-align-center" type="primary" link>
          <span>了解更多</span>
          <el-icon><ArrowRightBold /></el-icon>
        </el-button>
      </div>
      <div class="content-wrapper block1 flex-align-center">
        <div class="content-box fade-in-bottom">
          <div class="content-title">智能教育中枢体系</div>
          <div class="content-text">
            自主研发AI教学中枢平台，集成智能课程开发系统、教学行为分析引擎、个性化学习推荐系统三大模块，为高校构建“数字基座-智能应用-生态服务”三位一体的智慧教学体系。
          </div>
        </div>
      </div>
    </div>

    <div class="fade-in-bottom">
      <div class="content-wrapper block2 flex-align-center">
        <div class="content-box content-right fade-in-bottom">
          <div class="content-title">全栈式教学资源开发</div>
          <div class="content-text">
            拥有视频、动画等全媒体数字化资源开发能力，累计交付精品课程1000余门，制作时长超120万分钟，其中36门课程获评“国家精品课程”，打造了覆盖12大学科门类的数字化课程资源库。
          </div>
        </div>
      </div>
    </div>

    <div class="fade-in-bottom">
      <div class="content-wrapper block3 flex-align-center">
        <div class="content-box fade-in-bottom">
          <div class="content-title">智能教育创新实践</div>
          <div class="content-text">
            率先将生成式AI、知识图谱技术应用于教学场景，开发智能备课助手、虚拟教研员、学习画像系统等创新产品。
          </div>
        </div>
      </div>
    </div>

    <div class="fade-in-bottom" style="padding-bottom: 60px">
      <div class="primary-title-wrapper flex-center">
        <div class="primary-title">核心技术与创新亮点</div>
      </div>
      <div class="technology fade-in-bottom" style="margin-top: 20px">
        <div class="technology-row">
          <div class="technology-col">
            <img src="/img/home/bg_home_technology1.png" alt="" />
            <div class="technology-content">
              <div class="technology-title">垂直领域模型</div>
              <div class="technology-text">
                算力专家与行业专家训练专属垂直领域模型，实现知识产权输出，全面提升模型专业能力：通过监督微调（奖励机制设计）+行业专家权重特训，大幅优化了通用大模型生成内容泛化和效度问题。
              </div>
              <div class="icon-enter">
                <el-icon><ArrowRightBold /></el-icon>
              </div>
            </div>
          </div>
          <div class="technology-col">
            <img src="/img/home/bg_home_technology2.png" alt="" />
            <div class="technology-content">
              <div class="technology-title">多模态内容生成</div>
              <div class="technology-text">多模态内容生成，支持图文混编的结果输出。</div>
              <div class="icon-enter">
                <el-icon><ArrowRightBold /></el-icon>
              </div>
            </div>
          </div>
          <div class="technology-col">
            <img src="/img/home/bg_home_technology3.png" alt="" />
            <div class="technology-content">
              <div class="technology-title">增强版模型训练机制</div>
              <div class="technology-text">
                增强型的deepseekR1模型训练机制，对模型进行适度改造并制定完备训练机制。
              </div>
              <div class="icon-enter">
                <el-icon><ArrowRightBold /></el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="technology fade-in-bottom">
        <div class="technology-row">
          <div class="technology-col">
            <img src="/img/home/bg_home_technology4.png" alt="" />
            <div class="technology-content">
              <div class="technology-title">个性化动态内容</div>
              <div class="technology-text">
                内嵌能力图谱驱动机制，形成学习的拓扑网络，根据学习情况动态部署学习内容和建议。
              </div>
              <div class="icon-enter">
                <el-icon><ArrowRightBold /></el-icon>
              </div>
            </div>
          </div>
          <div class="technology-col">
            <img src="/img/home/bg_home_technology5.png" alt="" />
            <div class="technology-content">
              <div class="technology-title">完善的教辅功能</div>
              <div class="technology-text">
                完整的教学辅助功能：支持教学PPT生成、大纲教案生成、习题及考题生成、学生作业自动提交修改评阅。
              </div>
              <div class="icon-enter">
                <el-icon><ArrowRightBold /></el-icon>
              </div>
            </div>
          </div>
          <div class="technology-col">
            <img src="/img/home/bg_home_technology6.png" alt="" />
            <div class="technology-content">
              <div class="technology-title">跨平台支持</div>
              <div class="technology-text">
                与现有平台无缝对接，支持超星（istudy）、智慧职教、智慧树、雨课堂优课在线、人卫慕课、好大学在线、学银在线、爱课程等MOOC及SPOC课程平台。
              </div>
              <div class="icon-enter">
                <el-icon><ArrowRightBold /></el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="customer fade-in-bottom">
      <div class="primary-title-wrapper flex-center">
        <div class="primary-title">合作客户</div>
      </div>
      <img class="customer-img fade-in-bottom" src="/img/home/pic_customer.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

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
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style lang="scss" scoped>
.home-wrapper {
  overflow: hidden;
  .primary-title-wrapper {
    flex-direction: column;
    padding: 60px 30px 30px;
    .primary-title {
      font-size: 34px;
      font-weight: 500;
      color: #222222;
      line-height: 53px;
    }
  }
  .content-wrapper {
    height: 680px;
    &.block1 {
      background: url("/img/home/bg_home2.png") no-repeat center/cover;
    }
    &.block2 {
      background: url("/img/home/bg_home3.png") no-repeat center/cover;
    }
    &.block3 {
      background: url("/img/home/bg_home4.png") no-repeat center/cover;
    }
  }
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

  .technology {
    width: 1200px;
    margin: 30px auto 0;
    .technology-row {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      &:hover .technology-col:first-of-type {
        flex: 1;
        .technology-content .technology-text {
          display: -webkit-box;
        }
        .icon-enter {
          display: block;
        }
      }
      .technology-col {
        flex: 1;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 10px;
        height: 500px;
        box-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
        transition: all 0.3s;
        overflow: hidden;
        &:first-of-type {
          flex: 0 0 510px;
          .technology-content .technology-text {
            display: block;
          }
          .icon-enter {
            display: none;
          }
        }
        &:hover {
          flex: 0 0 510px !important;
          .technology-text {
            display: block !important;
          }
          .icon-enter {
            display: none !important;
          }
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .technology-content {
          flex: 1;
          margin-top: -200px;
          padding: 30px 26px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.86), #ffffff);
          border-radius: 10px;
          backdrop-filter: blur(16px);
          max-height: 200px;
          .technology-title {
            font-size: 24px;
            color: #222222;
            line-height: 28px;
            font-weight: 500;
            text-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
          }
          .technology-text {
            font-size: 16px;
            color: #666666;
            line-height: 24px;
            text-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
            margin-top: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .icon-enter {
            font-size: 20px;
            margin-top: 22px;
            color: var(--el-color-primary);
          }
        }
      }
    }
  }

  .customer {
    height: 530px;
    background: url(/img/home/bg_home5.png) no-repeat center/cover;
    .customer-img {
      display: block;
      width: 1240px;
      height: 340px;
      margin: 0 auto;
    }
  }
}

.btn-more {
  font-size: 14px;
  color: #fc3627;
  margin-top: 10px;
  .el-icon {
    font-size: 12px;
    margin-left: 4px;
  }
}
</style>
