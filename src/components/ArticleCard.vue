<template>
 {{data.title}}
 {{data.description}}
 {{data.publishedAT}}
</template>

<script>
export default {
name: 'ArticleCard',
  props: {
    data: Object,
  }
}
</script>

<style>

</style>