<template>
  <div class="category-header">
    <h1>{{nameCategory}}</h1>
  </div>
</template>

<script>
export default {
  name: "CategoryHeader",
  props: {
    nameCategory: String
  }
};
</script>

<style scoped>
.category-header {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--total-width);
  height: 40px;
  box-shadow: 0px 5px 22px -9px rgba(0, 0, 0, 0.75);
}
.category-header h1 {
  font-size: 20px;
  font-weight: 1000;
}
</style>