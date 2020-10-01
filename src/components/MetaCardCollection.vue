//Collection of anime character cards
<template>
  <div v-if="isFull">
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
    <button
      v-if="this.$store.state.show.characterButton"
      @click="moreCharacters"
      class="more-button"
    >
      MORE
    </button>
  </div>
</template>

<script>
import MetaCard from "./MetaCard.vue";
export default {
  name: "MetaCardCollection",
  components: { MetaCard },
  created() {
    this.$store.commit("clearOffset");
    this.$store.dispatch("fetchCharacter", {
      id: this.idAnime
    });
  },
  computed: {
    characters() {
      return this.$store.state.show.characters;
    },
    casts() {
      return this.$store.state.show.casts;
    },
    idAnime() {
      return this.$route.params.id;
    },
    isFull() {
      if (this.$store.state.show.characters.length !== 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    moreCharacters() {
      this.$store.dispatch("fetchCharacter", {
        id: this.idAnime
      });
    }
  }
};
</script>

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