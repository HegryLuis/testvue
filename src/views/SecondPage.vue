<template>
  <div class="test-page">
    <h1>Welcome to the Test Page!</h1>
    <router-link to="/">Back to Main Page</router-link>
  </div>
</template>

<script>
export default {
  name: "TestPage",
};
</script>

<style scoped>
.test-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

h1 {
  font-family: Arial, sans-serif;
  color: #333;
}

a {
  margin-top: 20px;
  font-size: 16px;
  text-decoration: none;
  color: #007bff;
}
</style>
