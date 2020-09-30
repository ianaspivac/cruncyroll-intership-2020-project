//Category collection which consists of browse cards 
<template>
<div>
  <div class="category-cards-collection">
    <BrowseCard
      v-for="anime in animeList"
      :key="anime.index"
      :animeTitle="anime.title"
      :animePoster="anime.image"
      :animeId="anime.id"
    ></BrowseCard>
  </div>
  <div class="button-container">
    <button @click="moreAnime" class="more-button">MORE</button>
  </div>
  </div>
</template>

<script>
import BrowseCard from "./BrowseCard.vue";
export default {
  name: "CategoryCardsCollection",
  components: { BrowseCard },
  props: { topicCollectionName: String },
  created: function () {
    this.$store.commit("eraseOffset");
    this.$store.commit("whichCategory", {
      collectionName: this.topicCollectionName
    });
    this.$store.dispatch("fetchCategory");
  },methods:{
    moreAnime(){
       this.$store.dispatch("fetchCategory", {
      collectionName: this.topicCollectionName
    });
    }
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
.button-container {
  margin-left: auto;
  margin-right: auto;
}
.more-button {
  text-decoration: none;
  margin-left: 7px;
  cursor: pointer;
  width: 100px;
  padding: 0 20px;
  height: 30px;
  border: 1px solid black;
  border-radius: 0.4em;
  box-sizing: border-box;
  color: black;
  background: var(--transparent-text-background);
  text-align: center;
  transition: all 0.15s;
}
.more-button:hover {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.507);
}
</style>