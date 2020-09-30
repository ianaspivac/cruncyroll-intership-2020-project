//Search card with description,name,title
<template>
  <div class="search-card">
    <div class="left">
      <img class="portrait" :src="animeImage" alt="Anime Poster" />
      <div>
        <router-link :to="'/show-page/'+animeId">View</router-link>
      </div>
    </div>
    <div class="info-anime">
      <div class="search-card-title">{{ animeTitle }}</div>
      <div class="divRating">
        {{ animeRating }}/100
        <span class="star">
          <img src="../assets/star.png" />
        </span>
      </div>
      <div class="synopsis">{{ animeDescription }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  props: {
    animeTitle: String,
    animeDescription: String,
    animeImage: String,
    animeRating: String,
    animeId:String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  width: 10em;
  align-content: center;
  justify-content: center;
  margin-right: 10px;
}
.portrait {
  margin: 15px 0 10px 5px;
  height: 180px;
  object-fit: cover;
  max-width: 130px;
}
.portrait.img {
  object-fit: cover;
  max-width: 100px;
}
.search-card {
  display: flex;
  max-width: 450px;
  width: 100%;
  height: 250px;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.58);
  color: rgb(0, 0, 0);
  margin: 5px;
}
.info-anime {
  display: flex;
  align-content: left;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  max-width: 250px;
}
.divRating {
  height: 30px;
  font-size: 20px;
  margin-bottom: 10px;
}
.star img {
  margin: 0;
  width: 25px;
}

.search-card a {
  text-decoration:none;
  margin-left: 7px;
  cursor: pointer;
  width: 100px;
  padding:0 20px;
  height: 30px;
  border: 1px solid black;
  border-radius: 0.4em;
  box-sizing: border-box;
  color: black;
  background: var(--transparent-text-background);
  text-align: center;
  transition: all 0.15s;
}
.info-anime .synopsis {
  font-size: 12px;
  line-height: 13px;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  max-width: 280px;
  max-height: 90px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
.info-anime .search-card-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  height: 24px;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.search-card a:hover {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.507);
}
</style>