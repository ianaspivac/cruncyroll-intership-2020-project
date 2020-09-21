<template>
  <div>
    <SearchPageForm/>
    <SearchCollection/>
   </div>
</template>

<script>
import SearchPageForm from "./components/SearchPageForm.vue";
import SearchCollection from "./components/SearchCollection.vue"
export default {
  name: "SearchPage",
  components:{
    SearchPageForm,SearchCollection
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>