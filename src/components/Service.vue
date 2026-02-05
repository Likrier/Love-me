<template>
  <section class="service" id="service">
    <div class="container">
      <div class="section-title">
        <h2>我们的服务</h2>
        <div class="divider"></div>
        <p>为企业提供全方位的专业解决方案，助力业务发展</p>
      </div>
      
      <div class="service-grid">
        <div class="service-card" v-for="(item, index) in services" :key="index">
          <div class="service-icon">
            <span>{{ item.icon }}</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <a href="#" class="btn">了解详情</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 服务数据
const services = [
  {
    icon: "💼",
    title: "企业咨询",
    description: "为企业提供战略规划、运营管理等专业咨询服务，帮助企业制定发展路线"
  },
  {
    icon: "📱",
    title: "数字化转型",
    description: "助力企业实现数字化转型，提升运营效率和市场竞争力"
  },
  {
    icon: "🌐",
    title: "网站建设",
    description: "为企业打造专业的网站和应用，提升品牌形象和用户体验"
  },
  {
    icon: "📊",
    title: "数据分析",
    description: "通过大数据分析，为企业提供数据驱动的决策支持"
  },
  {
    icon: "📈",
    title: "营销策划",
    description: "为企业制定全面的营销策略，提升品牌知名度和市场份额"
  },
  {
    icon: "🔒",
    title: "网络安全",
    description: "为企业提供全方位的网络安全解决方案，保障企业信息安全"
  }
]
</script>

<style scoped>
.service {
  padding: 100px 0;
  background-color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 36px;
  color: #1e40af;
  margin-bottom: 20px;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: #1e40af;
  margin: 0 auto 20px;
}

.section-title p {
  font-size: 16px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  padding: 40px 30px;
  background-color: #f9fafb;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: #1e40af;
}

.service-icon {
  width: 80px;
  height: 80px;
  background-color: #1e40af;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 32px;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background-color: #1e3a8a;
  transform: scale(1.1);
}

.service-card h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
}

.service-card p {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 25px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #1e40af;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #1e3a8a;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .service {
    padding: 60px 0;
  }
  
  .section-title h2 {
    font-size: 28px;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    padding: 30px 20px;
  }
}
</style>