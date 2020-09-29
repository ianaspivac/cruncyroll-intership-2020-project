<template>
  <div>
    <CategoryHeader :nameCategory="`${categoryType}`" />
    <CategoryCardsCollection :topicCollectionName="`${categoryType}`" />
  </div>
</template>

<script>
import CategoryCardsCollection from "./components/CategoryCardsCollection.vue";
import CategoryHeader from "./components/CategoryHeader.vue";
import MoreButton from "./components/MoreButton";
export default {
  name: "CategoryPage",
  data: function () {
    return {
      categoryType: ""
    };
  },
  components: { CategoryHeader, CategoryCardsCollection, MoreButton },
  created() {
    if (this.$route.path === "/newest") {
      this.categoryType = "Newest";
    } else if (this.$route.path === "/most-popular") {
      this.categoryType = "Most Popular";
    } else if (this.$route.path === "/recently-updated") {
      this.categoryType = "Recently Updated";
    } else if (this.$route.path === "/all") {
      this.categoryType = "All Shows";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>