<template>
  <div class="show-episode-card">
    <img
      src="https://img.discogs.com/aIvmyjPAsJXKfCG739oBw85WuOQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-2064545-1508873646-6197.jpeg.jpg"
      alt="cast"
    >
    <div class="cast-info">{{nameCast}}</div>
  </div>
</template>

<script>
export default {
  name: "MetaCard",
  data: function() {
    return { nameCast: "Mariya Ise" };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show-episode-card
{
display:flex;
margin:10px;
box-shadow: 0px 5px 22px -9px rgba(0, 0, 0, 0.75);
width:calc(var(--total-width) / 3 - 20px);
height:150px;
}
.show-episode-card img{
margin:10px;
width:120px;
}
.cast-info{
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width:calc(var(--total-width) / 4 - 20px);
  max-height:40px;
  font-weight:1000;
  line-height: 20px;
  text-align:left;
  margin-left:15px;
  font-size:15px;
  margin:10px;

}

</style>
