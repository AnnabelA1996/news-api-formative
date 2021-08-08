<template>
  <div class="all" id="browse-view-all-button">
      <div v-for="article of articles" :key="article.name" >
              <div class="browse-categories-card">
                  <a :href=article.url target="_blank">
                  <div class="image-container"><img v-bind:src="article.urlToImage"/></div>
                  <h3>{{article.title}}</h3>
                  </a>
              </div>
      </div>
  </div>
  <h2>{{category}}</h2>
</template>

<script>
export default {
    props:{
        category : String,
    },
    data(){
        return{
            articles:null,
        }
    },
    mounted(){
        this.fetchHeadlines();
    },
    watch:{
        category(){
        this.fetchHeadlines();
        }
    },
    methods:{
        async fetchHeadlines(){
            const response = await fetch(`https://newsapi.org/v2/top-headlines/?category=${this.category}&language=en&from=2021-7-25&to=2021-08-03&pageSize=15&apiKey=ae6f258d84454d539b607b748ff820bc`)
            const data = await response.json();
            this.articles = data.articles;
        },
    },

}
</script>

<style>

</style>