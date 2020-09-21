<template>
  <div class="show-episode-card">
    <img
      src="https://m.media-amazon.com/images/M/MV5BNTFkNGI0NTEtNzVmNS00MTBjLWJjZDItOWZkNjUzMjkxZWI2XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_UX477_CR0,0,477,268_AL_.jpg"
    >
    <div class="episode-info">
      <div>
        Episode {{episodeNumber}}
        <div class="episode-title">{{episodeTitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowEpisodeCard",
  data: function() {
    return {
      episodeNumber: 1,
      episodeTitle: "Title",
      episodeHeader: "Episodes"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show-episode-card
{margin:10px;
box-shadow: 0px 5px 22px -9px rgba(0, 0, 0, 0.75);
width:calc(var(--total-width) / 4 - 20px);
height:200px;
}
.show-episode-card img{
  margin-top:10px;
  margin-bottom:10px;
width:90%;
}
.episode-info,.episode.title{
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

}

</style>
