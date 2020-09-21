<template>
  <div class="search-card">
    <div class="left">
      <img class="portrait" :src="`${browseCardImg}`" alt="Anime Poster">
      <div>
        <button>View</button>
      </div>
    </div>
    <div class="info-anime">
      <div class="search-card-title">{{searchCardTitle}}</div>
      <div>
        <span class="rating">{{animeRating}}/10</span>
        <span class="star">
          <img src="../assets/star.png">
        </span>
      </div>
      <div class="synopsis">{{synopsis}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  data: function() {
    return {
      browseCardImg:
        "https://ae01.alicdn.com/kf/H0359877de5f54acb8a405aed761f45b0k.jpg",
      searchCardTitle: "The Promised Neverland",
      animeRating: 9,
      synopsis:
        "A group of the smartest kids at a seemingly perfect orphanage uncover its dark truth when they break a rule to never leave the orphanage grounds. Once the truth is discovered, they begin to plan an escape to save all of the children."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  width: 30%;
  align-content: center;
  justify-content: center;
  margin-right: 10px;
}
.portrait {
  margin: 20px 5px 5px 10px;
  max-height: 71%;
  height: 30vh;
}
.search-card {
  display: flex;
  max-width: 28em;
  width:95vw;
  height: 16em;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.58);
  color: rgb(0, 0, 0);
  margin: 5px;
  
}
.info-anime {
  margin-top: 10px;
  display: flex;
  align-content: left;
  justify-content:center;
  flex-direction: column;
  text-align: left;
  padding: 5px;
  max-width: 300px;
}
.rating {
  height: 30px;
  font-size: 20px;
}
.star img {
  margin: 0;
  width: 25px;
}

.search-card button {
  margin-left: 15px;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: 0.1em solid black;
  border-radius: 0.4em;
  box-sizing: border-box;
  color: black;
  background: var(--transparent-text-background);
  text-align: center;
  transition: all 0.15s;
}
.info-anime .synopsis {
  font-size: 12px;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  max-width: 280px;
  height: 117px;
}
.info-anime .search-card-title {
  font-weight: 700;
  font-size: 20px;
  height: 60px;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
}

.search-card button:hover {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.507);
}
</style>