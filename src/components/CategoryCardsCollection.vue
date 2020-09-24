<template>
  <div class="category-cards-collection">
    <BrowseCard
      v-for="anime in animeList"
      :key="anime.index"
      :animeTitle="anime.title"
      :animePoster="anime.poster"
    ></BrowseCard>
  </div>
</template>

<script>
import axios from "axios";
import BrowseCard from "./BrowseCard.vue";
export default {
  name: "CategoryCardsCollection",
  components: { BrowseCard },
  props: { nameCategory: String },
  data: function() {
    return {
      animeList: []
    };
  },
  created: function() {
    if (this.nameCategory === "Most Popular") {
      const that = this;
      axios
        .get("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=popularityRank")
        .then(function(response) {
          that.data = response.data.data;

          for (var i = 0; i < 20; i++) {
            that.animeList.push({
              title: that.data[i].attributes.canonicalTitle,
              poster: that.data[i].attributes.posterImage.small,
              id: that.data[i].id
            });
          }
        });
    } else if (this.nameCategory === "Newest") {
      const that = this;
      axios
        .get("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=-createdAt")
        .then(function(response) {
          that.data = response.data.data;

          for (var i = 0; i < 20; i++) {
            that.animeList.push({
              title: that.data[i].attributes.canonicalTitle,
              poster: that.data[i].attributes.posterImage.small,
              id: that.data[i].id
            });
          }
        });
    } else if (this.nameCategory === "Recently Updated"){
      const that = this;
      axios
        .get("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=-updatedAt")
        .then(function(response) {
          that.data = response.data.data;

          for (var i = 0; i < 20; i++) {
            that.animeList.push({
              title: that.data[i].attributes.canonicalTitle,
              poster: that.data[i].attributes.posterImage.small,
              id: that.data[i].id
            });
          }
        });
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