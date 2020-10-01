//Collection of episode cards
<template>
  <div >
    <div class="collection-episodes-section">
      <div class="episodes-header">
        <h2>Episodes</h2>
      </div>
      <div class="episode-cards-collection">
        <ShowEpisodeCard />
      </div>
    </div>
    <button v-if="showButton" @click="moreAnime" class="more-button">
      MORE
    </button>
  </div>
</template>

<script>
import ShowEpisodeCard from "./ShowEpisodeCard.vue";
export default {
  name: "EpisodesCollection",
  components: { ShowEpisodeCard },
  methods: {
    moreAnime() {
      this.id = this.$route.params.id;
      this.$store.dispatch("fetchEpisodes", { id: this.id });
    }
  },
  computed: {
    showButton() {
      return this.$store.state.show.showButton;
    }
  }
};
</script>

<style scoped>
.collection-episodes-section {
  flex-direction: column;
  margin: 10px auto 10px auto;
  padding: 10px;
  display: flex;
  max-width: var(--total-width);
  width: 100vw;
}
.episodes-header h2 {
  margin: 10px;
  font-size: 20px;
  text-align: left;
  font-weight: 1000;
}
.episode-cards-collection {
  display: flex;
  justify-content: left;
  align-content: center;
  align-items: center;
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