<template>
  <div>
    <ShowPageHeader/>
    <ShowDescriptionCard/>
    <EpisodesCollection/>
    <MetaCardCollection/>
  </div>
</template>

<script>
import ShowPageHeader from "./components/ShowPageHeader.vue";
import ShowDescriptionCard from "./components/ShowDescriptionCard.vue";
import EpisodesCollection from "./components/EpisodesCollection.vue";
import MetaCardCollection from "./components/MetaCardCollection.vue";
export default {
  name: "ShowPage",
  components: {
    ShowDescriptionCard,
    EpisodesCollection,
    MetaCardCollection,
    ShowPageHeader
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>