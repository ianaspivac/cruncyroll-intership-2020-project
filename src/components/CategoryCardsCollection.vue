<template>
  <div class="category-cards-collection">
    <BrowseCard
    v-for="anime in animeList" :key="anime.index"
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
    if (this.topicCollectionName === "Most Popular") {
      this.$store.dispatch("fetchMostPopular1");
    } else if (this.topicCollectionName === "Newest") {
      this.$store.dispatch("fetchNewest1");
    } else if (this.topicCollectionName === "Recently Updated") {
      this.$store.dispatch("fetchRecentlyUpdated1");
    }
  },
  computed: {
    animeList: function () {
      if (this.topicCollectionName === "Most Popular") {
        return this.$store.state.category.mostPopularList;
      } else if (this.topicCollectionName === "Newest") {
        return this.$store.state.category.newestList;
      } else {
        return this.$store.state.category.recentlyUpdatedList;
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