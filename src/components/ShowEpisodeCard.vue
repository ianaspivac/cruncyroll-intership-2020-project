//Episode card for show page
<template>
  <div class="container-episode">
    <div
      v-for="episode in episodeList"
      :key="episode.id"
      class="show-episode-card"
    >
      <img :src="episode.thumbnail" />
      <div class="episode-info">
        <div>
          Episode {{ episode.number }}
          <div class="episode-title">{{ episode.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowEpisodeCard",
  props: {
    episodeThumbnail: String,
    episodeNumber: Number,
    episodeTitle: String
  },
  created: function () {
    this.id = this.$route.params.id;
    this.$store.dispatch("fetchEpisodes", { id: this.id });
  },
  computed: {
    episodeList() {
      return this.$store.state.show.episodeList;
    }
  }
};
</script>

<style scoped>
.container-episode{
  display:flex;
  flex-wrap:wrap;
  max-width:var(--total-width);
}
.show-episode-card{
  margin:10px;
  box-shadow: 0px 5px 22px -9px rgba(0, 0, 0, 0.75);
  width:calc(var(--total-width) / 4 - 20px);
  height:200px;
}
.show-episode-card img{
  margin:10px 0 10px 0;
  width:90%;
  max-height:130px;
  object-fit:cover;
}
.episode-info,.episode.title{
  white-space: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width:calc(var(--total-width) / 4 - 20px);
  max-height:40px;
  line-height:17px;
  font-weight:1000;
  text-align:left;
  margin-left:15px;
  font-size:15px;
}

</style>
