<template>
  <div class="container">
    <h1>Welcome to a Node.js app using Clerk</h1>
    <button @click="goToLogin" class="sign-in-btn">Sign In</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  function goToLogin() {
  router.push('/login')
}
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;

}

.sign-in-btn {
  background-color: #22c55e;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  transition: background-color 0.3s;
}

.sign-in-btn:hover {
  background-color: #16a34a;
}
</style>