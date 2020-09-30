//General browse card for anime with a poster and title
<template>
  <router-link :to="'/show-page/' + animeId">
    <div class="browse-card">
      <img class="portrait" :src="`${animePoster}`" />
      <div>{{ animeTitle }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BrowseCard",
  props: { animeTitle: String, animePoster: String, animeId: String }
};
</script>


<style scoped>
.portrait {
  margin-top: 5px;
  width: 90%;
  height: 75%;
}
.browse-card {
  margin: 0;
  width: 139px;
  height: 220px;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.58);
  font-size: 17px;
  color: rgb(0, 0, 0);
  margin: 10px;
  font-weight: 700;
}

.browse-card:hover {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.75);
}
.browse-card div {
  margin: 5px;
  margin-top: 10px;
  overflow: hidden;
  overflow-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 20px;
  max-height: 40px;
}
a {
  text-decoration: none;
}
</style>