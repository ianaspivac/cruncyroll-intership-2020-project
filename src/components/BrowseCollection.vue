 //Browse card which is presented in collections at home page
 <template>
  <section class="collection-container">
    <BrowseHeaderCollection :topicCollectionName="topicCollection" />
    <div class="cards-container">
      <BrowseCard
        v-for="anime in animeList"
        :key="anime.index"
        :animeTitle="anime.title"
        :animePoster="anime.image"
        :animeId="anime.id"
      />
    </div>
  </section>
</template>

<script>
import BrowseCard from "./BrowseCard.vue";
import BrowseHeaderCollection from "./BrowseHeaderCollection.vue";
export default {
  name: "BrowseCollection",
  components: {
    BrowseCard,
    BrowseHeaderCollection
  },
  props: { topicCollection: String },

  created: function () {
    this.$store.commit("clearList");
    if (this.topicCollection === "Most Popular") {
      this.$store.dispatch("fetchMostPopular");
    } else if (this.topicCollection === "Newest") {
      this.$store.dispatch("fetchNewest");
    } else if (this.topicCollection === "Recently Updated") {
      this.$store.dispatch("fetchRecentlyUpdated");
    }
  },
  computed: {
    animeList: function () {
      if (this.topicCollection === "Most Popular") {
        return this.$store.state.home.mostPopularList;
      } else if (this.topicCollection === "Newest") {
        return this.$store.state.home.newestList;
      } else {
        return this.$store.state.home.recentlyUpdatedList;
      }
    }
  }
};
</script>

<style scoped>
.collection-container {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  max-width: var(--total-width);
}
.cards-container {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: var(--total-width);
}
</style>