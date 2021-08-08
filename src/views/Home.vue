<template>
  <div class="home">
    <!-- <HeadLines/> -->
  </div>
  <h2>Browse Categories</h2>
    <HeadLines @category-selected="category=$event"/>
      <div class="browse-articles">
        <Categories :category="category"/>
      </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeadLines from '@/components/HeadLines.vue'
import Categories from '@/components/CategorisedArticles.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HeadLines,
    Categories
  },
  data(){
    return{
      category:null,
    }
  }
}
</script>
