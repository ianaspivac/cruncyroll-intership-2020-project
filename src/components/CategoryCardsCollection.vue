<template>
  <div class="category-cards-collection">
    <BrowseCard
      :animeTitle="title"
      :animePoster="image"
      :animeId="1"
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
      this.$store.dispatch("fetchMostPopular");
    } else if (this.topicCollectionName === "Newest") {
      this.$store.dispatch("fetchNewest");
    } else if (this.topicCollectionName === "Recently Updated") {
      this.$store.dispatch("fetchRecentlyUpdated");
    }
  },
  computed: {
    animeList: function () {
      if (this.topicCollectionName === "Most Popular") {
        return this.$store.state.home.mostPopularList;
      } else if (this.topicCollectionName === "Newest") {
        return this.$store.state.home.newestList;
      } else {
        return this.$store.state.home.recentlyUpdatedList;
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