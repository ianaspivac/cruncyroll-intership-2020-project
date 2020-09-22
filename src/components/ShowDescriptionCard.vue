<template>
  <div>
    <div class="show-description-container">
      <div class="poster">
        <img :src="`${cardImg}`" alt="Anime Poster">
      </div>
      <div class="text-info">
        <div class="title">
          <h1>{{cardTitle}}</h1>
        </div>
        <div class="rating">
          {{animeRating}}/10
          <img src="../assets/star.png">
        </div>
        <div class="synopsis">{{synopsis}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowDescriptionCard",
  data: function() {
    return {
      cardImg:
        "https://ae01.alicdn.com/kf/H0359877de5f54acb8a405aed761f45b0k.jpg",
      cardTitle: "The Promised Neverland",
      animeRating: 9,
      synopsis:
        "A group of the smartest kids at a seemingly perfect orphanage uncover its dark truth when they break a rule to never leave the orphanage grounds. Once the truth is discovered, they begin to plan an escape to save all of the children."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show-description-container{
width:97vw;
  display:flex;
  align-items:left;
text-align:left;
margin-left:auto;
margin-right:auto;
height:300px;
max-width:var(--total-width);
margin-top:10px;
margin-bottom:10px;
 box-shadow: 0px 5px 22px -9px rgba(0, 0, 0, 0.75);
}
.text-info{
display:flex;
flex-direction: column;
align-items:left;
text-align:left;
margin:10px;
}
.text-info .title{
font-size:2em;
max-height:100px;
margin:10px;
max-width:calc(var(--total-width) - 220px);
background:var(--second-color);
padding:5px;
}
.text-info .rating, .text-info .synopsis{
font-size:17px;
margin:10px;
}
.text-info .synopsis{
  max-height:130px;
  max-width:calc(var(--total-width) - 220px);
  white-space: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
}
.poster img{
  margin:15px;
height:90%;

}
.poster{
  width:220px;
}
.text-info .rating img{
width:22px;
}
</style>