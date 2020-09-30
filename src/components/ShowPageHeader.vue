//Trailer for anime in the top of show page
<template>
  <div class="trailer-section">
    <iframe v-if='show.trailer !== ""'
      :src='"https://www.youtube.com/embed/"+ show.trailer'
      frameborder="0"
      allow="accelerometer; 
      autoplay; 
      clipboard-write;
       encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "ShowPageHeader",
  created: function () {
  },
  computed: {
    show() {
      return this.$store.state.show.showDescription;
    }
  }
};
</script>

<style scoped>
.trailer-section iframe {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 97vw;
  height: 400px;
  object-fit: cover;
  max-width: var(--total-width);
}
</style>