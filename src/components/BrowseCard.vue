<template>
  <div>
    <router-link to="/show-page">
      <div class="browse-card">
        <img class="portrait" :src="`${animePoster}`" alt="Anime Poster">
        <span>{{animeTitle}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BrowseCard",
  data: function() {
    return {
      animeInfo: { browseCardImg: "", browseCardTitle: "" }
    };
  },
  props: { animeTitle: String, animePoster: String },
  created: function() {
    console.log(this.anime);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portrait {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 90%;
  height: 75%;
}
.browse-card {
  width: 9em;
  height: 15em;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.58);
  font-size: 1em;
  color: rgb(0, 0, 0);
  margin: 10px;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  font-weight: 700;
}

.browse-card:hover {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.75);
}

a {
  text-decoration: none;
}
</style>