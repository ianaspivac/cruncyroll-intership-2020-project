<template>
  <div class="button-container">
    <button @click="moreAnime" class="more-button">MORE</button>
  </div>
</template>
<script>
export default {
  name: "MoreButton",
  methods:{
    moreAnime(){
       this.$store.dispatch("fetchCategory", {
      collectionName: this.topicCollectionName
    });
    }
  }
};
</script>
<style scoped>
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