<template>
  <div>
    <header>
      <div class="header-container">
        <router-link to="/" class="logo">
          <img src="../assets/shibanime-logo.png" alt="Logo">
        </router-link>
        <nav class="navigation">
          <ul>
            <li>
              <router-link class="nav-links" to="/most-popular">Most Popular</router-link>
            </li>
            <li>
              <router-link class="nav-links" to="/newest">Newest</router-link>
            </li>
            <li>
              <router-link class="nav-links" to="/recently-updated">Recently Updated</router-link>
            </li>
            <li>
              <router-link class="search-icon" to="/search">
                <img src="../assets/search-icon.png" alt="Search">
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>


<style scoped>
header {
  height: 80px;
  background: var(--purple-theme);
  display: flex;
  justify-content: center;
  box-shadow: 0px 20px 43px -25px rgba(0, 0, 0, 0.43);
}
.header-container {
  width: var(--total-width);
  display: flex;
  align-content: space-between;
}

.search-icon img {
  width: 20px;
}
.nav-links {
  text-decoration: none;
  margin: 10px;
  color: var(--color-text);
  font-size: 15px;
  height: 100px;
}
.nav-links:hover {
  color: white;
}
nav {
  width: 77vw;
  align-content: flex-end;
  justify-content: flex-end;
  display: flex;
}

ul {
  flex-wrap:wrap;   
  margin-top: 25px;
  display: flex;
}

.logo {
  align-content: center;
  width: 100px;
  display: flex;
}
.logo img {
  margin: 5px 0 0 2px;
  width: 100px;
}
</style>

