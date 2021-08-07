<template>
  <div id="app">
    {{ res }}
  </div>
</template>

<script>
export default {
  name: 'HeadLines',
  data () {
    return {
      res: ""
    }

  },
  mounted () {
      this.axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ae6f258d84454d539b607b748ff820bc')
      .then(response => { this.res = response })
  },
  methods () {

  }

}
</script>

<style>

</style>