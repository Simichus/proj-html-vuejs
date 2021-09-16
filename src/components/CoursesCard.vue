<template>
  <div id="courses-card" class="px-2 py-5">
      <img src="@/assets/img/new-corner.jpg" alt="">
      <h1 class="py-4">Courses</h1>
      <p class="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim non laboriosam vitae nesciunt. Vitae, obcaecati consequuntur necessitatibus eius fugit nihil repellat ipsum sequi magni maxime ad et libero natus.</p>
      <Button text="Course information"/>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
name:'CoursesCard',
components:{
    Button
}
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

#courses-card{
    box-shadow: -5px 5px 10px rgb(0 0 0 / 20%);
    border-radius: 25px;
    width: 400px;
    position: relative;
    background-color: $white;
    text-align: center;

    img{
        position: absolute;
        transform: scale(60%);
        top: -32px;
        left: -32px;
        border-radius: 25px 0 0 0;
    }

    p{
        color: $gumbo;
    }
}
</style>