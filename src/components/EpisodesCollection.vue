<template>
  <div class="collection-episodes-section">
    <div class="episodes-header">
      <h2>Episodes</h2>
    </div>
    <div class="episode-cards-collection">
      <ShowEpisodeCard/>
      <ShowEpisodeCard/>
    </div>
  </div>
</template>

<script>
import ShowEpisodeCard from "./ShowEpisodeCard.vue";
export default {
  name: "EpisodesCollection",
  components: { ShowEpisodeCard }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  font-weight:1000;
}
.episode-cards-collection {
  display: flex;
  justify-content: left;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>