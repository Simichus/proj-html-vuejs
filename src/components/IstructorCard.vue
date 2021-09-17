<template>
  <div class="istructor-card d-flex flex-column justify-content-center align-items-center mx-3 py-4 px-4">
      <img class="my-3" :src="istructor.imgPath" alt="">
      <h1 class="fs-3">{{istructor.name}}</h1>
      <div class="my-1">
          <i class="fab fa-facebook-f mx-1"></i>
          <i class="fab fa-twitter mx-1"></i>
          <i class="fab fa-instagram mx-1"></i>
      </div>
      <div class="mb-3">{{istructor.description}}</div>

  </div>
</template>

<script>
export default {
name:'IstructorCard',
props:['istructor']
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

.istructor-card{
    width: 25%;
    background-image: linear-gradient(to bottom, $secondary-color, $secondary-color 2%, $white 2%, $white 98%);
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba($color: $black, $alpha: 0.3), -5px 5px 10px rgba($color: $black, $alpha: 0.3);
    transition: transform .25s;

    &:hover{
        transform: scale(105%);

        img{
            box-shadow: 5px 5px 10px rgba($color: $black, $alpha: 0.3), -5px 5px 10px rgba($color: $black, $alpha: 0.3);;
        }
    }

    img{
        width: 100%;
        transition: box-shadow .5s;
    }

    h1{
        color: $main-color;
    }

    div{
        color: $gumbo;
    }
}
</style>