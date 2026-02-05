<template>
  <section class="about" id="about">
    <div class="container">
      <div class="section-title">
        <h2>关于我们</h2>
        <div class="divider"></div>
      </div>
      
      <div class="about-content">
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" alt="关于我们" />
        </div>
        <div class="about-text">
          <h3>我们的故事</h3>
          <p>
            公司成立于2010年，是一家专注于提供企业级解决方案的科技公司。我们拥有一支经验丰富、技术精湛的团队，致力于为客户提供高质量的产品和服务。
          </p>
          <p>
            多年来，我们始终坚持以客户需求为中心，不断创新和提升技术能力，已成功为众多企业提供了专业的解决方案，赢得了客户的信任和好评。
          </p>
          <div class="about-features">
            <div class="feature-item">
              <h4>专业团队</h4>
              <p>拥有行业经验丰富的专业人才</p>
            </div>
            <div class="feature-item">
              <h4>创新技术</h4>
              <p>不断探索和应用最新技术</p>
            </div>
            <div class="feature-item">
              <h4>优质服务</h4>
              <p>全程为客户提供贴心服务</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 组合式API，无需额外逻辑
</script>

<style scoped>
.about {
  padding: 100px 0;
  background-color: #f9fafb;
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
  margin: 0 auto;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
}

.about-image {
  flex: 1;
  min-width: 300px;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.about-image img:hover {
  transform: translateY(-10px);
}

.about-text {
  flex: 1;
  min-width: 300px;
}

.about-text h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.about-text p {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
}

.about-features {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
}

.feature-item {
  flex: 1;
  min-width: 150px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-item h4 {
  font-size: 18px;
  color: #1e40af;
  margin-bottom: 10px;
}

.feature-item p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about {
    padding: 60px 0;
  }
  
  .section-title h2 {
    font-size: 28px;
  }
  
  .about-content {
    flex-direction: column;
  }
  
  .about-image,
  .about-text {
    flex: 100%;
  }
  
  .about-features {
    flex-direction: column;
  }
  
  .feature-item {
    flex: 100%;
  }
}
</style>