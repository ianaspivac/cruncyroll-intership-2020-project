<template>
  <div>
    <SearchPageForm/>
    <SearchCollection v-if="submit" />
   </div>
</template>

<script>
import SearchPageForm from "./components/SearchPageForm.vue";
import SearchCollection from "./components/SearchCollection.vue"
export default {
  name: "SearchPage",
  components:{
    SearchPageForm,SearchCollection
  },
  computed:{
submit(){
   return this.$store.state.search.submited;
}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>