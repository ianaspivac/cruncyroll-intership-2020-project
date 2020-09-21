<template>
    <footer><div class="footer-container"><div class="links"><ul><li><router-link to="/all">All Animes</router-link></li>
    <li><router-link to="/most-popular">Most Popular</router-link></li>
    <li><router-link to="/newest">Newest</router-link></li>
    <li><router-link to="/recently-updated">Recently Updated</router-link></li>
    </ul></div>
    <div class="copyright">© Copyright 2020<br>All rights reserved.<br> Powered by Spivac Iana in the context of Cruncyroll Intership.</div></div>
    </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  margin-top:30px;
  font-weight: 700;
  display:flex;
  height: 120px;
  text-align:center;
  justify-content: center;
  align-items: center;
  flex-direction:row;
}
footer a{
  color:var(--purple-theme);
  text-decoration: none;
  font-size:0.8em;
}
footer a:hover{
  color:var(--purple-theme);
  background:var(--second-color);
}
.links{
 display:flex; 
 justify-content: center;
}
.footer-container{
  display:flex;
  width:var(--total-width);
  justify-content: space-between;
  margin-left:5px;
  color:var(--purple-theme);
  flex-direction:column;
  
}
.copyright{
  margin-top:20px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:0.6em;
}
</style>