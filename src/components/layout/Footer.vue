<template>
  <img class="bottom-img" src="/img/bg_home6.png" alt="" />

  <div class="footer-wrapper">
    <div class="info-wrapper">
      <div class="company-info">
        <div class="company-name flex-align-center">
          <!-- <img class="logo" src="/favicon.ico" /> -->
          深圳市燧光明科技有限公司
        </div>
        <div class="contact-title">联系我们</div>
        <div class="contact-info">客服电话：<span class="phone">400-081-1229</span></div>
        <div class="contact-info">邮箱：service@zzltop.com</div>
        <div class="contact-info">
          深圳总公司：深圳市南山区粤海街道高新南九道55号微软科通大厦13层
        </div>
      </div>
      <div class="qrcode-wrapper">
        <img class="img-qrcode" src="/img/pic_qrcode.png" alt="" />
        <div>中咨联技术</div>
      </div>
    </div>
    <div class="records">
      粤公网安备 （申请中）
      <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2025433425号</a> | Copyright © 2025
      All rights reserved
      <span style="margin-left: 24px">深圳市燧光明科技有限公司</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

onMounted(() => {});
</script>

<style lang="scss" scoped>
.bottom-img {
  display: block;
  height: 160px;
  width: 100%;
  min-width: var(--max-width);
  object-fit: cover;
}
.footer-wrapper {
  background: #1d222e;
  color: #fff;
  padding: 0 40px;
  .info-wrapper {
    display: flex;
    justify-content: space-between;
    width: calc(var(--max-width) - 80px);
    padding: 50px 0 40px;
    border-bottom: 1px solid #979797;
    margin: 0 auto;
    .company-info {
      font-size: 16px;
      color: #ffffff;
      line-height: 24px;
      .company-name {
        font-size: 20px;
        font-weight: 700;
        .logo {
          display: block;
          width: 42px;
          height: 42px;
          margin-right: 11.5px;
        }
      }
      .contact-title {
        font-size: 20px;
        color: #ffffff;
        margin-top: 30px;
      }
      .contact-info {
        margin-top: 18px;
        .phone {
          font-size: 20px;
          color: #ffffff;
          margin-left: 5px;
        }
      }
    }
    .qrcode-wrapper {
      text-align: center;
      margin: 23px 40px 0 0;
      .img-qrcode {
        display: block;
        width: 132px;
        height: 132px;
        margin-bottom: 20px;
      }
    }
  }
  .records {
    padding: 20px 0 40px;
    margin: 0 auto;
    width: calc(var(--max-width) - 80px);
    font-size: 14px;
    color: #ffffff;
    line-height: 24px;
    a {
      font-size: 14px;
      color: #ffffff;
      line-height: 24px;
      text-decoration-line: none;
      transition: all .3s;
      &:hover {
        color: var(--el-color-primary);
        text-decoration: underline;
      }
    }
  }
}
</style>
