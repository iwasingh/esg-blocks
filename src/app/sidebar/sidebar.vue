<template>
  <div class="sidebar">
    <div class="logo">
      <img src="../assets/logo.svg" alt="Logo" />
    </div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <!-- Add more navigation items as needed -->
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
}

.logo {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
