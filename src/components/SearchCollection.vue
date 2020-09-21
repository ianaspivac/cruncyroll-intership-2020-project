<template>
  <div class="search-collection">
    <section>
      <div class="collection-header">
        <h2>Series</h2>
      </div>
      <div class="search-collection-container">
        <SearchCard/>
      </div>
      <div class="collection-header">
        <h2>Movies</h2>
      </div>
      <div class="search-collection-container">
        <SearchCard/>
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
  width: var(--total-width);
}
.collection-header {
  font-weight: 1000;
  padding: 0;
  margin: 10px;
  font-size: 25px;
}
</style>