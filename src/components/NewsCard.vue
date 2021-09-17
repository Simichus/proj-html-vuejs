<template>
  <div class="px-3 d-flex flex-column justify-content-center align-items-center">
      <img :src="news.imgPath" alt="">
      <h1 class="fs-4 mt-3">{{news.title}}</h1>
      <div>
          <span class="date">{{news.date}} |</span> <span class="comments">{{news.comments}} Comments</span>
      </div>
      <div class="text">{{news.text}}</div>
  </div>
</template>

<script>
export default {
name:'NewsCard',
props:['news']
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

img{
    width: 100%;
}

h1{
    color: $secondary-color;
}

.date, .text{
    color: $gumbo;
}

.comments{
    color: $secondary-color;
}

span{
    font-size: 12px;
}
</style>