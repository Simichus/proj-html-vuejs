<template>
  <section class="d-flex justify-content-center align-items-center flex-column">
      <h1 class="mb-3">Testimonials</h1>
      <h2 class="mb-5">Here's what our happy drivers had to say about our services:</h2>
      <img :src="testimonials[active-1].imgPath" alt="">
      <h3 class="mt-4 mb-2">{{testimonials[active-1].name}}</h3>
      <div class="fs-5 my-2 text">{{testimonials[0].text}}</div>
      <div>
          <i v-for="testimonial in testimonials" :key="testimonial.id" class="fa-circle mx-1" :class="isActive(testimonial.id)" @click="activate(testimonial.id)"></i>
          
      </div>
  </section>
</template>

<script>
export default {
    name:'Testimonials',
    props:['testimonials'],
    data(){
        return{
            active:1,
        }
    },
    methods:{

        isActive(id){
            if (this.active === id) return 'fas';
            else return 'far';
        },
        activate(id){
            this.active = id;
        }   
    }

}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';
section{
    min-height: 800px;
    background-image: url('../assets/img/testimonial-background.jpg');
    background-size: cover;
    position: relative;
    color: $gumbo;

    h1{
        color: $main-color;
    }

    h2{
        font-size: 16px;
        font-weight: normal;
    }

    img{
        max-width: 170px;
    }
    .text{
        max-width: 40%;
    }

    i{
        cursor: pointer;
    }
}
</style>