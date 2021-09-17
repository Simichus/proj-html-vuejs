<template>
  <div class="news-letter d-flex justify-content-center align-items-center">
      <div class="col-4 text-center">
          <h1 class="fs-3 mb-4">Sign up to our Newsletter</h1>
      <form>
          <input type="text" class="w-100 mb-5">
          <Button text="Subscribe" width="100%"/>
      </form>
          <div class="mt-3 data-info">(We do not share your data with anybody, and only use it for intended purpose)</div>
      </div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
name:'NewsLetter',
components:{
    Button
}
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

.news-letter{
    background-image: url('../assets/img/newsletter_background.jpg');
    min-height: 400px;
    background-size: cover;
}

h1{
    color: $main-color;
}

input{
    height: 2.5rem;
    text-indent: 1rem;
}

.data-info{
    font-size: 12px;
    color: $gumbo;
}
</style>