<template>
  <div class="course text-center px-3 pt-3">
      <img :src="course.imgPath" alt="">
      <h1 class="fs-4 my-3">{{course.title}}</h1>
      <button class="learn-more">Learn more</button>
  </div>
</template>

<script>
export default {
name:'Course',
props:['course']
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

.course{
    width: 20%;
    color: $gumbo;

    img{
        width: 80%;
    }

    .learn-more{
        background-color: transparent;
        border: 3px solid $gumbo;
        border-radius: 20px;
        color: $gumbo;
        padding: 5px 12px;
        font-weight: 500;
        transition: background-color .2s, color .2s;

        &:hover{
            color: $white;
            background-color: $gumbo;
        }
    }
}
</style>