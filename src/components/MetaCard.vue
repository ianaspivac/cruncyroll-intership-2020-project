//Anime character card
<template>
  <div class="show-episode-card">
    <img :src="imageCharacter" />
    <div class="cast-info">
      {{ nameCharacter }}
      <br />
      {{ nameCast }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MetaCard",
  props: { nameCharacter: String,
   imageCharacter: String, 
   nameCast: String }
};
</script>

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
height:87%;
object-fit:cover;
width:100px;
}
.cast-info{
   white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break:break-word;
  max-width:150px;
  max-height:120px;
  font-weight:1000;
  line-height: 20px;
  text-align:left;
  margin-left:15px;
  font-size:15px;
  margin:10px;

}

</style>
