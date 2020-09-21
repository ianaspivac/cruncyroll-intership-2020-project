<template>
  <div class="category-cards-collection">
    <BrowseCard/>
   </div>
</template>

<script>
import BrowseCard from "./BrowseCard.vue"
export default {
  name: "CategoryCardsCollection",
  components:{BrowseCard},
  props: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category-cards-collection{
  margin-left:auto;
  margin-right:auto;
  width:var(--total-width);
  padding:10px;
   display: flex;
  justify-content: left;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>