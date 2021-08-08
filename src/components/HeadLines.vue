<template>
<div>
  <select @change="$emit('categorySelected',selectedCategory)" v-model="selectedCategory">
    <option v-for="category of categories" :key="category" :value="category">
      {{category}}
    </option>
  </select>
</div><!-- </vue-next-select> -->
    <!-- <ul id="headlines">
      <li v-for="headline in headlines" :key="headline.publishedAt">
         <ArticleCard :data="headline"/>
      </li>
    </ul> -->
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'

export default {
  name: 'HeadLines',
  components: {
    ArticleCard
  },
  data () {
    return {
      res: "",
      headlines: [],
      selectedCategory: null,
      categories:["business", "entertainment", "general", "health", "science", "sports", "technology"]
    }
  },

  emits:["categorySelected"]

}
</script>

<style>

</style>