<template>
  <div class="trailer-section">
    <iframe
      :src='"https://www.youtube.com/embed/"+`${trailer}`'
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
  data: function() {
    return {
      trailer: "eBwApg_nAvY"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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