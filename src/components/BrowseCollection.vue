 <template>
  <div class="box">
    <section class="collection-container">
      <BrowseHeaderCollection :topicCollectionName="topicCollection"/>
      <div class="cards-container">
        <BrowseCard
          :animeTitle="category.title"
          :animePoster="category.image"
          :animeId="category.id"
        />
      </div>
    </section>
  </div>
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

  created: function() {
    if (this.topicCollection === "Most Popular") {
      this.$store.dispatch("fetchMostPopular");
    } else if (this.topicCollection === "Newest") {
      this.$store.dispatch("fetchNewest");
    } else if (this.topicCollection === "Recently Updated") {
      this.$store.dispatch("fetchRecentlyUpdated");
    }
  },
  computed: {
    category() {
      if (this.topicCollection === "Most Popular") {
        return this.$store.state.home.mostPopular;
      } else if (this.topicCollection === "Newest") {
        return this.$store.state.home.newest;
      } else {
        return this.$store.state.home.recentlyUpdated;
      }
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