<template>
  <div class="category-cards-collection">
    <BrowseCard
      v-for="anime in animeList"
      :key="anime.index"
      :animeTitle="anime.title"
      :animePoster="anime.image"
      :animeId="anime.id"
    ></BrowseCard>
  </div>
</template>

<script>
import BrowseCard from "./BrowseCard.vue";
export default {
  name: "CategoryCardsCollection",
  components: { BrowseCard },
  props: { topicCollectionName: String },
  created: function () {
    this.$store.dispatch("fetchCategory", {
      collectionName: this.topicCollectionName
    });
  },
  computed: {
    animeList: function () {
      switch (this.topicCollectionName) {
        case "Most Popular":
          return this.$store.state.category.mostPopularList;
        case "Newest":
          return this.$store.state.category.newestList;
        case "Recently Updated":
          return this.$store.state.category.recentlyUpdatedList;
        default:
          return this.$store.state.category.allList;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category-cards-collection {
  margin-left: auto;
  margin-right: auto;
  max-width: var(--total-width);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-content: left;
  align-items: left;
  flex-wrap: wrap;
}
</style>