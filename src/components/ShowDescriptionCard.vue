<template>
  <div>
    <div class="show-description-container">
      <div class="poster">
        <img :src="show.image" />
      </div>
      <div class="text-info">
        <div class="title">
          <h1>{{ show.title }}</h1>
        </div>
        <div class="rating">
          {{ show.rating }}/100
          <img src="../assets/star.png" />
        </div>
        <div class="synopsis">{{ show.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowDescriptionCard",
  created: function () {
    this.id = this.$route.params.id;
    this.$store.dispatch("fetchShowDescription", { id: this.id });
  },
  computed: {
    show() {
      return this.$store.state.show.showDescription;
    }
  },
  unmounted() {
    console.log("adios");
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
height:280px;
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
margin:5px;
}
.text-info .title{
font-size:2em;
max-height:100px;
margin:10px;
max-width:calc(var(--total-width) - 220px);
background:var(--second-color);
padding:5px;
white-space: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
 display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.text-info .rating, .text-info .synopsis{
font-size:15px;
margin-left:15px;
margin-right:15px;
}
.text-info .rating{
margin-bottom:10px;
}
.text-info .synopsis{
  max-height:190px;
  line-height:19px;
  max-width:calc(var(--total-width) - 220px);
  white-space: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
   display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;

}
.poster img{
  
margin:10px;
height:90%;
max-width:180px;
object-fit:cover;

}
.poster{
  width:190px;
}
.text-info .rating img{
width:22px;
}
</style>