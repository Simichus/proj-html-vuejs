<template>
  <div class="footer-top">
      <div class="container py-5">
          <div class="row gx-5 my-5">
              <div class="col-3">
                  <img src="@/assets/img/avada-drivers-logo-2x-300x58.png" alt="">
                  <div class="mt-3">Avada Driving School is the right choice for experienced drivers looking for a refreasher course, or the brand new driver wanting to pass first time.</div> 
              </div>
              <div class="col-3">
                  <ContactDetails/>
              </div>
              <div class="col-3">
                  <FooterCourses/>
              </div>
              <div class="col-3 text-center">
                  <img src="@/assets/img/labels-400x87.png" alt="" class="w-100 mb-5">
                  <Button text="Book Now"/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import ContactDetails from './ContactDetails.vue'
import FooterCourses from './FooterCourses.vue'
export default {
    name:'FooterTop',
    components:{
        ContactDetails,
        FooterCourses,
        Button
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

.footer-top{
    background-image: url('../assets/img/footer-background-color.jpg');
    min-height: 400px;
    background-size: cover;
    color: $gumbo;
}

</style>