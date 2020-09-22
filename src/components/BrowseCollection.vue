 <template>
  <div class="box">
    <section class="collection-container">
      <BrowseHeaderCollection :topicCollectionName="topicCollection"/>
      <div class="cards-container">
        <BrowseCard :animeTitle="`${animeList[0].title}`" :animePoster="`${animeList[0].poster}`"/>
        <BrowseCard :animeTitle="`${animeList[0].title}`" :animePoster="`${animeList[0].poster}`"/>
        <BrowseCard :animeTitle="`${animeList[0].title}`" :animePoster="`${animeList[0].poster}`"/>
        <BrowseCard :animeTitle="`${animeList[0].title}`" :animePoster="`${animeList[0].poster}`"/>
        <BrowseCard :animeTitle="`${animeList[0].title}`" :animePoster="`${animeList[0].poster}`"/>
        <BrowseCard :animeTitle="`${animeList[0].title}`" :animePoster="`${animeList[0].poster}`"/>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import BrowseCard from "./BrowseCard.vue";
import BrowseHeaderCollection from "./BrowseHeaderCollection.vue";
export default {
  name: "BrowseCollection",
  components: {
    BrowseCard,
    BrowseHeaderCollection
  },
  props: { topicCollection: String },
  data: function() {
    return {
      animeList: [{ title: "", poster: "", id: "" }]
    };
  },
  created: function() {
    if (this.topicCollection === "Most Popular") {
      const that = this;
      axios
        .get("https://kitsu.io/api/edge/anime?sort=popularityRank")
        .then(function(response) {
          that.data = response.data.data;
          that.animeList[0].title = that.data[0].attributes.canonicalTitle;
          that.animeList[0].poster = that.data[0].attributes.posterImage.small;

          for (let i = 0; i < 6; i++) {}
        });
    }
else if (this.topicCollection === "Newest") {
      const that = this;
      axios
        .get("https://kitsu.io/api/edge/anime?sort=-createdAt")
        .then(function(response) {
          that.data = response.data.data;
          that.animeList[0].title = that.data[0].attributes.canonicalTitle;
          that.animeList[0].poster = that.data[0].attributes.posterImage.small;
          for (let i = 0; i < 6; i++) {}
        });
    }
    else {
      const that = this;
      axios
        .get("https://kitsu.io/api/edge/anime?sort=-updatedAt")
        .then(function(response) {
          that.data = response.data.data;
          that.animeList[0].title = that.data[0].attributes.canonicalTitle;
          that.animeList[0].poster = that.data[0].attributes.posterImage.small;
          for (let i = 0; i < 6; i++) {}
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.collection-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: var(--total-width);
}
.cards-container {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>