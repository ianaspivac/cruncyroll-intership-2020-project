<template>
  <div>
    <HeroSection/>
    <BrowseCollection topicCollection="Most Popular"/>
    <BrowseCollection topicCollection="Newest"/>
    <BrowseCollection topicCollection="Recently Updated"/>
    <MoreAnime/>
  </div>
</template>

<script>
import MoreAnime from "./components/MoreAnime.vue";
import HeroSection from "./components/HeroSection.vue";
import BrowseCollection from "./components/BrowseCollection.vue";
export default {
  name: "HomePage",
  components: {
    HeroSection,
    BrowseCollection,
    MoreAnime
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>