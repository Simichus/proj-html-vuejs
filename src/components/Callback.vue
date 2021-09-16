<template>
  <div id="callback" class="d-flex flex-column justify-content-center align-items-center px-5 pb-5">
      <h1 class="my-5">First Lesson Free!</h1>
      <h2 class="h6 my-3">When you make a book booking whit us your first lesson is included free!</h2>
      <form class="d-flex flex-column justify-content-center align-items-center">
          <input type="text" name="name" id="name" placeholder="Your name*">
          <input type="mail" name="mail" id="mail" placeholder="Email*">
          <input type="number" name="phone" id="phone" placeholder="Telephone">
          <input type="text" name="location" id="location" placeholder="Location">
          <Button text="Request a Callback"/>
      </form>

  </div>
</template>

<script>
import Button from './Button.vue'
export default {
name:'Callback',
components:{
    Button
}
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

#callback{
    box-shadow: -5px 5px 10px rgb(0 0 0 / 20%);
    border-radius: 25px;
    position: relative;
    top: -100px;
    background-color: $white;

}

h1{
    color: $secondary-color;
}

h2{
    color: $gumbo;
}

form{
    width: 100%;
    input{
        width: 100%;
        height: 3rem;
        margin: 1rem 0;
        padding-left: 0.5rem;
        background-color: $light-gray;
        border-radius: 5px;
        border-color: rgba($color: $main-color, $alpha: 0.4)
    }
}

</style>