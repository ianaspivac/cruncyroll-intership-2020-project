<template>
  <div class="collection-meta-section">
    <div class="meta-header">
      <h2>Cast</h2>
    </div>
    <div class="meta-cards-collection">
      <MetaCard
        v-for="character in characters"
        :key="character.index"
        :nameCharacter="character.name"
        :imageCharacter="character.image"
        :nameCast="character.cast"
      />
    </div>
  </div>
</template>

<script>
import MetaCard from "./MetaCard.vue";
export default {
  name: "MetaCardCollection",
  components: { MetaCard },
  created() {
    this.$store.dispatch("fetchCharacter", {
      id: this.$store.state.show.showDescription.id
    });
  },
  computed: {
    characters() {
      return this.$store.state.show.characters;
    },
    casts() {
      return this.$store.state.show.casts;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.collection-meta-section {
  flex-direction: column;
  margin: 10px auto 10px auto;
  padding: 10px;
  display: flex;
  max-width: var(--total-width);
  width: 100vw;
}
.meta-header h2 {
  margin: 10px;
  font-size: 20px;
  text-align: left;
  font-weight: 1000;
}
.meta-cards-collection {
  display: flex;
  justify-content: left;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>