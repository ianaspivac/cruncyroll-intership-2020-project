 <template>
  <div class="box">
    <section class="collection-container">
      <BrowseHeaderCollection :topicCollectionName="topicCollection"/>
      <div class="cards-container">
        <BrowseCard/>
        <BrowseCard/>
        <BrowseCard/>
        <BrowseCard/>
        <BrowseCard/>
        <BrowseCard/>
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
    BrowseHeaderCollection, 
  },
  props: { topicCollection: String }
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