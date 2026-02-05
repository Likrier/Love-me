<template>
  <section class="banner">
    <div class="banner-container" ref="bannerContainer">
      <div class="banner-slider" ref="bannerSlider">
        <div class="banner-slide" v-for="(item, index) in slides" :key="index">
          <img :src="item.image" :alt="item.title" />
          <div class="banner-content">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <a href="#" class="btn">了解更多</a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 轮播控制按钮 -->
    <button class="prev-btn" @click="prevSlide">&lt;</button>
    <button class="next-btn" @click="nextSlide">&gt;</button>
    
    <!-- 轮播指示器 -->
    <div class="banner-indicators">
      <span 
        v-for="(item, index) in slides" 
        :key="index"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const bannerContainer = ref(null)
const bannerSlider = ref(null)
const currentSlide = ref(0)
const slideInterval = ref(null)

// 轮播数据
const slides = [
  {
    image: 'src/assets/banner.png',
    title: '专业服务，创造价值',
    description: '我们致力于为客户提供高质量的服务，帮助企业实现数字化转型'
  },
  {
    image: 'src/assets/banner1.png',
    title: '创新科技，引领未来',
    description: '依托先进技术，为企业提供创新解决方案，助力业务增长'
  },
  {
    image: 'src/assets/banner2.png',
    title: '客户至上，合作共赢',
    description: '以客户需求为中心，建立长期稳定的合作关系，实现共同发展'
  }
]

// 初始化轮播
const initSlider = () => {
  if (bannerSlider.value) {
    bannerSlider.value.style.width = `${slides.length * 100}%`
    updateSlidePosition()
  }
}

// 更新轮播位置
const updateSlidePosition = () => {
  if (bannerSlider.value) {
    bannerSlider.value.style.transform = `translateX(-${currentSlide.value * 100 / slides.length}%)`
    bannerSlider.value.style.transition = 'transform 0.5s ease'
  }
}

// 下一张
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  updateSlidePosition()
  resetInterval()
}

// 上一张
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
  updateSlidePosition()
  resetInterval()
}

// 跳转到指定幻灯片
const goToSlide = (index) => {
  currentSlide.value = index
  updateSlidePosition()
  resetInterval()
}

// 重置自动轮播计时器
const resetInterval = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
  }
  startAutoSlide()
}

// 开始自动轮播
const startAutoSlide = () => {
  slideInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

onMounted(() => {
  initSlider()
  startAutoSlide()
})

onUnmounted(() => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
  }
})
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  margin-top: 70px;
}

.banner-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.banner-slider {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.banner-slide {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.banner-content h2 {
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.banner-content p {
  font-size: 18px;
  margin-bottom: 30px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background-color: #1e40af;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #1e3a8a;
}

/* 轮播控制按钮 */
.prev-btn, .next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

.prev-btn:hover, .next-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* 轮播指示器 */
.banner-indicators {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
}

.banner-indicators span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.banner-indicators span.active {
  background-color: white;
  width: 30px;
  border-radius: 6px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner {
    height: 400px;
  }
  
  .banner-content h2 {
    font-size: 32px;
  }
  
  .banner-content p {
    font-size: 16px;
  }
  
  .prev-btn, .next-btn {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .banner {
    height: 300px;
  }
  
  .banner-content h2 {
    font-size: 24px;
  }
  
  .banner-content p {
    font-size: 14px;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>