//Headers for home page collections
<template>
  <div class="collection-header">
    <h2>{{ topicCollectionName }}</h2>
    <span class="see-more">
      <router-link tag="span" :to="linkCategory">See More ></router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "BrowseHeaderCollection",
  computed: {
    linkCategory: function () {
      switch (this.topicCollectionName) {
        case "Most Popular":
          return "/most-popular";
        case "Newest":
          return "/newest";
        default:
          return "/recently-updated";
      }
    }
  },

  props: {
    topicCollectionName: String
  }
};
</script>

<style scoped>
.collection-header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
  font-size: 1.5em;
  height: 1.7em;
  margin-bottom: 20px;
  box-shadow: 0px 5px 22px -9px rgba(0, 0, 0, 0.75);
}
.collection-header h2,
.see-more {
  margin: 10px;
}
.collection-header h2 {
  text-align: left;
  font-weight: 1000;
}

.see-more {
  cursor: pointer;
  text-align: right;
}
.see-more:hover {
  text-decoration: underline;
}
</style>