<template>
  <div v-if="submited" class="search-collection">
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>