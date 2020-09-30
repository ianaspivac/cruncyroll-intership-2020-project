//Collection of search cards
<template>
  <div>
    <div class="search-collection">
      <section>
        <div class="collection-header">
          <h2>Series</h2>
        </div>
        <div class="search-collection-container">
          <SearchCard
            v-for="resultTv in resultTvList"
            :key="resultTv.id"
            :animeTitle="resultTv.title"
            :animeDescription="resultTv.description"
            :animeRating="resultTv.rating"
            :animeImage="resultTv.image"
            :animeId="resultTv.id"
          />
        </div>
        <div class="collection-header">
          <h2>Movies</h2>
        </div>
        <div class="search-collection-container">
          <SearchCard
            v-for="resultMovie in resultMovieList"
            :key="resultMovie.id"
            :animeTitle="resultMovie.title"
            :animeDescription="resultMovie.description"
            :animeRating="resultMovie.rating"
            :animeImage="resultMovie.image"
            :animeId="resultMovie.id"
          />
        </div>
      </section>
    </div>
    <div class="button-container">
      <button @click="moreAnime" class="more-button">MORE</button>
    </div>
  </div>
</template>

<script>
import SearchCard from "./SearchCard.vue";
export default {
  name: "SerchCollection",
  components: {
    SearchCard
  },
  data: function () {
    return { submited: true };
  },
  computed: {
    resultTvList() {
      return this.$store.state.search.searchResultListTv;
    },
    resultMovieList() {
      return this.$store.state.search.searchResultListMovie;
    }
  },
  methods: {
    moreAnime() {
      this.$store.dispatch("fetchSearchResult", {
        collectionName: this.topicCollectionName
      });
    }
  }
};
</script>

<style scoped>
.search-collection {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.search-collection-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 10px 0 10px 0;
  max-width: var(--total-width);
}
.collection-header {
  font-weight: 1000;
  padding: 0;
  margin: 10px;
  font-size: 25px;
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