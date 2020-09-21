<template>
  <div>
    <router-link to="/show-page">
      <div class="browse-card">
        <img class="portrait" :src="`${browseCardImg}`" alt="Anime Poster">
        <span>{{browseCardTitle}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "BrowseCard",
  data: function() {
    return {
      browseCardImg:
        "https://ae01.alicdn.com/kf/H0359877de5f54acb8a405aed761f45b0k.jpg",
      browseCardTitle: "The Promised Neverland"
    };
  }
        
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portrait {
  margin-top: 5px;
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