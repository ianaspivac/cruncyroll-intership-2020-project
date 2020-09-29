<template>
  <div class="more-anime">
    <div class="dark-shade">
      <div class="more-anime-text">
        <h2>Looking for more anime?</h2>
        Take a look at our full catalogue!
      </div>
      <router-link to="/all" class="link">Discover</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreAnime"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.more-anime {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: url(../assets/more-anime.jpg);
  background-size: cover;
  min-height: 400px;
  width: 100vw;
  max-width: var(--total-width);
}
.more-anime-text {
  margin-top: 200px;
  font-weight: 1000;
  color: white;
  font-size: 1.4em;
  text-shadow: 0 0 0.1em rgb(255, 255, 255);
  margin-bottom: 20px;
}
.dark-shade {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.425);
}
a {
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  width: 6em;
  height: 2em;
  font-weight: 600;
  border: 0.1em solid white;
  border-radius: 0.4em;
  box-sizing: border-box;
  color: var(--color-text);
  background: var(--transparent-text-background);
  text-align: center;
  transition: all 0.15s;
}
a:hover {
  cursor: pointer;
  background: rgba(61, 61, 61, 0.308);
  box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 1);
  color: white;
}
</style>