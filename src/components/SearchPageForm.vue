<template>
  <div class="section-search-page-form">
    <div class="search-page-continer">
      <form id="search-form" @submit.prevent="onSubmit(search)">
        <div id="search-box-container">
      <input id="search-box" v-model="search" placeholder="Search">
      </div>
      <div class=submit-button>
      <button type="submit" > 
        <img src="../assets/search-icon.png" alt="submit search"/>
        </button>
        </div>
      </form>
      </div>
   </div>
</template>

<script>
export default {
  name: "SearchPageForm",
  methods:{
onSubmit(search){
  this.$store.dispatch("fetchSearchResult",{search:this.search});
  }
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-search-page-form{
display:flex;
align-items: center;
justify-content: center;
height:50px;
width:100%;
}
.search-page-continer{
margin-top:10px;
display:flex;
align-items: center;
justify-content: center;
max-width:var(--total-width);
width:97vw;
height:100%;
background:var(--second-color);
box-shadow: 0px 5px 22px -9px rgba(0, 0, 0, 0.75);
}
#search-box{
border:none;
width:100%;
height:100%;
 
}
.submit-button button img{
width:20px;
margin:0;
padding:0;
}
#search-form{
display:flex;
padding:0;
flex-direction:row;
display:flex;
align-items: center;
justify-content: center;
width:95%;

}
.submit-button button{
  cursor:pointer;
margin-top:1px;
  height:100%;
  border:none;
  background:white;
}
.submit-button{
  padding:0;
  margin-left:3px;
  height:32px;
  width:30px;
}
#search-box-container{
  margin-left:-5px;
  height:30px;
  width:calc(var(--total-width) - 60px);
}
</style>