<template>
  <div class="product-container">
    <div class="fade-in-bottom">
      <div class="section-title">
        <h2>我们的产品</h2>
      </div>

      <div class="product-desc">
        致力于全方位服务教学管理工作，覆盖教学管理的整个周期，以及教务管理的各个关键环节，它集成了先进的信息技术，将各类教学管理流程进行数字化整合，为学校打造一个高效、便捷、智能的管理环境。凭借数字化手段重塑传统教学管理流程，为学校构筑起一个高效协同、便捷易用、智能精准的现代化管理生态环境。
      </div>
    </div>

    <div class="product-section fade-in-bottom">
      <!-- 产品Tab导航 -->
      <div class="product-tabs">
        <div
          v-for="(item, index) in productItems"
          :key="index"
          class="product-tab-item"
          :class="{ active: productActiveTab === index || productTabHover === index }"
          @click="productActiveTab = index"
          @mouseenter="productTabHover = index"
          @mouseleave="productTabHover = -1"
        >
          <img
            :src="
              getImageUrl(
                productActiveTab === index || productTabHover === index
                  ? `pic_product_tab${index + 1}_active`
                  : `pic_product_tab${index + 1}`
              )
            "
            alt="产品图标"
            class="tab-icon"
          />
          <div class="product-tab-title">{{ item.title }}</div>
          <div class="product-tab-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>

    <div v-show="productActiveTab === 0">
      <div class="build-section-wrapper fade-in-bottom">
        <div class="build-section fade-in-bottom">
          <div class="build-section-left hover-without-shadow">
            <div class="build-section-left-text">
              自主研发AI教学中枢平台，集成智能课程开发系统、教学行为分析引擎、个性化学习推荐系统三大模块，为高校构建“数字基座-智能应用-生态服务”三位一体的智慧教学体系。依托智慧教学体系，深度融合自然语言处理（NLP）、能力图谱等前沿科技，为高校师生提供全流程、个性化教学服务。
            </div>
          </div>
          <div class="build-section-right">
            <div class="build-section-item flex hover-without-shadow">
              <div>
                <div class="build-section-item-title">多模态内容生成</div>
                <div class="build-section-item-desc">
                  多模态内容生成，利用自然语言处理技术精准向量化转换，确保知识实时、准确，支持图文混编的结果输出。
                </div>
              </div>
              <img
                src="/img/product/ic_product_build1.png"
                alt="多模态内容生成"
                style="margin-left: 109px"
              />
            </div>
            <div class="flex" style="gap: 30px">
              <div class="build-section-item hover-without-shadow">
                <div class="build-section-item-title">个性化动态内容</div>
                <div class="build-section-item-desc">
                  内嵌能力图谱驱动机制，形成学习的拓扑网络，根据学习情况动态部署学习内容和建议。
                </div>
                <img src="/img/product/ic_product_build2.png" alt="个性化动态内容" />
              </div>
              <div class="build-section-item hover-without-shadow">
                <div class="build-section-item-title">教学管理一体化</div>
                <div class="build-section-item-desc">
                  完整的教学辅助功能，支持教学PPT生成、大纲教案生成、习题及考题生成、学生作业自动提交修改评阅。
                </div>
                <img src="/img/product/ic_product_build3.png" alt="教学管理一体化" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="productActiveTab === 1">
      <div class="softhard-ware-wrapper fade-in-bottom">
        <div class="softhard-ware">
          <div class="softhard-ware-item fade-in-bottom hover-shadow">
            <div class="softhard-ware-item-left">
              <div class="softhard-ware-item-title">
                <div>软件实训平台</div>
              </div>
              <div class="softhard-ware-item-content">
                软件实训平台架构，根据开发过程中极易遇到的错误，提供相应的实验性代码，代码中有相应的错误做法，以课程为依归，让学生自己去完善代码逻辑，实现对课程和用法的深度理解
              </div>
            </div>
            <div class="softhard-ware-item-right">
              <img src="/img/product/pic_product_softhardware1.png" alt="软件实训平台" />
            </div>
          </div>

          <div class="softhard-ware-item reverse fade-in-bottom hover-shadow">
            <div class="softhard-ware-item-left">
              <div class="softhard-ware-item-title">
                <div>硬件实训平台</div>
              </div>
              <div class="softhard-ware-item-content">
                硬件实训平台架构，根据目前市场上使用最多的物联网芯片搭建功能各异的硬件平台实验箱，供学生在上面控制相应的设备，比如继电器、齿轮组、数显设备等。
              </div>
            </div>
            <div class="softhard-ware-item-right">
              <img src="/img/product/pic_product_softhardware2.png" alt="硬件实训平台" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="productActiveTab === 2">
      <!-- 学习平台模块 -->
      <div class="platform-section-wrapper fade-in-bottom">
        <div class="section-title underline">
          <h2>学习平台</h2>
        </div>
        <div class="platform-section fade-in-bottom">
          <div class="platform-item hover-shadow">
            <div class="platform-content">
              <h3>教学平台</h3>
              <p>
                包括测评系统、教学管理系统、项目实训系统、教学工具，每个系统下又有各自的功能及相应的菜单选项。
              </p>
            </div>
          </div>
          <div class="platform-item hover-shadow">
            <div class="platform-content">
              <h3>自学平台</h3>
              <p>
                包括创建社群分组、游戏化地图、积分体系、提问、课程打赏、在线直播、排名机制等菜单选项。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 测评系统模块 -->
      <div class="fade-in-bottom">
        <div class="section-title underline">
          <h2>测评系统</h2>
        </div>
        <div class="system-section fade-in-bottom">
          <div class="system-item" v-for="(item, index) in systemItems" :key="index">
            <img class="system-icon" :src="getImageUrl(item.img)" alt="系统图标" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 游戏功能模块 -->
      <div class="function-wrapper fade-in-bottom">
        <div class="section-title underline">
          <h2>游戏功能</h2>
        </div>
        <div class="function-section fade-in-bottom">
          <div
            v-for="(item, index) in functionItems"
            :key="index"
            class="function-item"
            :class="{ hovered: hoveredIndex === index }"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = -1"
          >
            <div class="function-content">
              <img class="function-icon" :src="getImageUrl(item.img)" alt="功能图标" />
              <div class="function-content-wrapper">
                <h3>{{ item.title }}</h3>
                <p :class="{ 'single-ellipsis': hoveredIndex !== index }">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// 获取图片URL
const getImageUrl = (name: string) => {
  return `${import.meta.env.BASE_URL}img/product/${name}.png`;
};

// 添加响应式变量来跟踪当前激活的产品标签
const productActiveTab = ref(0);
const productTabHover = ref(-1);

// 产品数据
const productItems = [
  {
    title: "教学智能体建设",
    desc: "增强型的deepseekR1模型训练机制，对模型进行适度改造并制定完备训练机制。增强型的deepseekR1模型训练机制，对模型进行适度改造并制定完备训练机制。增强型的deepseekR1模型训练机制，对模型进行适度改造并制定完备训练机制。",
  },
  {
    title: "软硬件实训平台",
    desc: "智能硬件是以平台性底层软硬件为基础，以智能传感互联、人机交互、新型显示及大数据处理等新一代信息技术为特征，以新设计、新材料、新工艺硬件为载体的新型智能终端产品及服务。",
  },
  {
    title: "游戏虚拟仿真教学平台",
    desc: "教学平台包括：测评系统、教学管理系统、项目实训系统、教学工具，每个系统下又有各自的功能及相应的菜单选项。自学平台包括：创建社群分组、游戏化地图、积分体系、提问、课程打赏、在线直播、排名机制等菜单选项。",
  },
];

// 测评系统数据
const systemItems = [
  {
    img: "ic_product_system1",
    title: "试卷管理",
    desc: "教师可设置试题类型比例、难度系数等多种组卷方式，随时随地生成试卷。",
  },
  {
    img: "ic_product_system2",
    title: "发起考试",
    desc: "一键创建的考试任务可设定指定班级和考试时间。",
  },
  { img: "ic_product_system3", title: "在线考试", desc: "学生可进入实时考试可实时提交考试结果。" },
  {
    img: "ic_product_system4",
    title: "阅卷评分",
    desc: "教师可进行客观题与主观题评分并记录学生的评分结果。",
  },
  {
    img: "ic_product_system5",
    title: "考试分析",
    desc: "教师可进行全班学生考试结果分析及错题分析并可导出统计报告。",
  },
];

// 游戏功能数据
const functionItems = [
  {
    img: "ic_product_function1",
    title: "首页",
    desc: "显示推荐课程轮播,公告信息,精品课程列表显示,线下活动列表显示,文字列表显示,专题显示,当前学习课程快捷入口,系列课程显示,免费好课显示。",
  },
  {
    img: "ic_product_function2",
    title: "选课中心",
    desc: "学生可以根据教学内容结构自选课程内容,个性化组装课程路径,对已学会的知识点还可替换课程库中的内容再次学习,还包括课程的一级二级分类,推荐课程。",
  },
  { img: "ic_product_function3", title: "消息中心", desc: "显示系统消息,好友消息,通知。" },
  {
    img: "ic_product_function4",
    title: "我的课程",
    desc: "显示正在学习课程列表,学习进度,课程基本信息。",
  },
  {
    img: "ic_product_function5",
    title: "我的学分",
    desc: "显示已获得学分,各个学分获得的具体信息,课程名称、获得时间、获得多少学分等。",
  },
  {
    img: "ic_product_function6",
    title: "创建社群",
    desc: "创建社群,发布话题、问题、讨论、文章等内容,学生评价点赞分享。",
  },
  {
    img: "ic_product_function7",
    title: "分组",
    desc: "随机、指定分组,进行学习对抗,完成游戏任务,排名竞赛。",
  },
  {
    img: "ic_product_function8",
    title: "游戏化地图",
    desc: "学生可通过学习地图的呈现方式促进教学任务的学习,让学生主动参与到游戏中,带给学生不同与真实环境中的体验,把游戏的体验融入到学习过程中,提高学生的学习积极性、趣味性。",
  },
];

const hoveredIndex = ref(-1);

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
.product-container {
  width: 100%;
  max-width: 100%;
}

// 产品标题样式
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

// 产品描述
.product-desc {
  max-width: calc(var(--max-width) - 80px);
  margin: 30px auto 0;
  text-align: center;
  font-size: 16px;
  color: #333333;
  line-height: 24px;
}

// 我们的产品模块
.product-section {
  max-width: calc(var(--max-width) - 80px);
  margin: 0 auto 60px;

  // 产品选项卡
  .product-tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
    margin-top: 142px;

    .product-tab-item {
      cursor: pointer;
      position: relative;
      padding: 86px 22px 30px;
      transition: all 0.3s;
      &:first-child {
        border-radius: 10px 0px 0px 10px;
      }
      &:last-child {
        border-radius: 0px 10px 10px 0px;
      }

      &.active {
        background: linear-gradient(270deg, #fe664f 0%, #fc3627 100%);
        .product-tab-title,
        .product-tab-desc {
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

      .product-tab-title {
        text-align: center;
        font-size: 26px;
        font-weight: 500;
        color: #222222;
        line-height: 30px;
        text-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
      }

      .product-tab-desc {
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

// 教学智能体建设模块
.build-section-wrapper {
  background: #f6f9fb;
  padding: 60px 0 80px;
  .build-section {
    max-width: calc(var(--max-width) - 80px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background: #f6f9fb;
    gap: 30px;
    .build-section-left {
      width: 420px;
      height: 542px;
      padding: 50px 40px;
      background: url("/img/product/bg_product_build.png") no-repeat center / contain;
      .build-section-left-text {
        font-size: 16px;
        color: #333333;
        line-height: 30px;
        &::before {
          content: "";
          display: block;
          width: 21px;
          height: 6px;
          background: linear-gradient(90deg, #fc3627 0%, #fe960b 100%);
          margin-bottom: 16px;
        }
      }
    }
    .build-section-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .build-section-item {
        flex: 1;
        background: #ffffff;
        border: 2px solid #ffffff;
        border-radius: 10px;
        padding: 20px 40px 30px;
        .build-section-item-title {
          font-size: 24px;
          color: #222222;
          line-height: 28px;
          font-weight: 500;
          margin-top: 20px;
        }
        .build-section-item-desc {
          font-size: 16px;
          color: #333333;
          line-height: 24px;
          margin-top: 20px;
        }
        img {
          display: block;
          width: 90px;
          height: 90px;
          margin-top: 34px;
          margin-left: auto;
        }
      }
    }
  }
}

.softhard-ware-wrapper {
  background: #f6f9fb;
  padding: 60px 0 80px;
  .softhard-ware {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: calc(var(--max-width) - 80px);
    margin: 0 auto;
    .softhard-ware-item {
      display: flex;
      align-items: center;
      background: #ffffff;
      border-radius: 10px;
      min-height: 236px;
      &.reverse {
        flex-direction: row-reverse;
      }
      .softhard-ware-item-left {
        flex: 1;
        padding: 40px 35px 40px 40px;
        .softhard-ware-item-title {
          font-size: 24px;
          color: #222222;
          line-height: 28px;
          font-weight: 500;
        }
        .softhard-ware-item-content {
          font-size: 16px;
          color: #666666;
          line-height: 24px;
          margin-top: 20px;
        }
      }
      .softhard-ware-item-right {
        img {
          display: block;
          width: 455px;
          height: 100%;
        }
      }
    }
  }
}

// 学习平台模块
.platform-section-wrapper {
  background: linear-gradient(270deg, #f1f5f9 0%, #f6f9fb 100%);
  overflow: hidden;
  .platform-section {
    max-width: calc(var(--max-width) - 80px);
    margin: 0 auto 60px;
    display: flex;
    justify-content: space-between;
    gap: 30px;

    .platform-item {
      flex: 1;
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      padding: 0 200px 0 30px;
      height: 210px;
      background: url("/img/product/bg_product_platform1.png") no-repeat center / cover;
      &:nth-child(2) {
        background: url("/img/product/bg_product_platform2.png") no-repeat center / cover;
      }

      .platform-content {
        position: relative;
        z-index: 2;
        color: #fff;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
          font-size: 24px;
          color: #222222;
          line-height: 28px;
          margin-bottom: 20px;
          font-weight: 500;
        }

        p {
          font-size: 16px;
          color: #333333;
          line-height: 24px;
        }
      }
    }
  }
}

// 测评系统模块
.system-section {
  max-width: calc(var(--max-width) - 80px);
  margin: 0 auto 60px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;

  .system-item {
    text-align: center;
    padding: 40px 22px;
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 4px 20px 0px rgba(192, 192, 199, 0.4);
    }

    .system-icon {
      display: block;
      width: 88px;
      height: 92px;
      margin: 0 auto;
    }

    h3 {
      font-size: 24px;
      font-weight: 500;
      color: #222222;
      line-height: 28px;
      margin-top: 28px;
    }

    p {
      font-size: 16px;
      color: #333333;
      line-height: 24px;
      margin-top: 20px;
    }
  }
}

// 游戏功能模块
.function-wrapper {
  background: #f6f9fb;
  overflow: hidden;
  .function-section {
    max-width: calc(var(--max-width) - 80px);
    margin: 0 auto 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    .function-item {
      background-color: #fff;
      border-radius: 8px;
      overflow: hidden;
      height: 260px;
      position: relative;
      transition: all 0.3s;

      &.hovered {
        .function-content-wrapper {
          position: absolute;
          height: 260px !important;
          top: 0 !important;
          left: 0;
          bottom: 0;
          right: 0;
          padding: 34px 22px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
        }

        .function-content {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
        }

        p {
          opacity: 1;
          max-height: 200px;
          margin-top: 10px;
        }
      }

      .function-content {
        padding: 40px 22px;
        height: 100%;
        transition: all 0.3s;

        .function-icon {
          display: block;
          width: 80px;
          height: 80px;
          margin: 0 auto 28px;
        }

        .function-content-wrapper {
          height: 72px;
          top: 148px;
          transition: height, top 0.5s;
          overflow: hidden;
          h3 {
            font-size: 24px;
            text-align: center;
            color: #222222;
            line-height: 28px;
            font-weight: 500;
          }

          p {
            font-size: 16px;
            color: #333333;
            line-height: 24px;
            margin-top: 20px;
            transition: all 0.3s;
          }
        }
      }
    }
  }
}
</style>
