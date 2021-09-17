<template>
  <main>
      <div class="container">
          <div class="row py-5">
              <div class="col-6 py-3">
                  <GetBehindTheWheel/>
              </div>
              <div class="col-6 position-relative">
                  <Callback/>
              </div>
          </div>
      </div>
      <div id="start-learning" class="py-5">
          <div class="container d-flex justify-content-between align-items-center py-5">
              <div>
                  <h2>Start Learning to Drive Today</h2>
                  <h3 class="h6">Give us a call to schedule your first driving lesson</h3>
              </div>
              <div class="h3"><i class="fas fa-phone me-4"></i>1-800-555-555</div>
          </div>
      </div>
      <Courses/>
      <img src="../assets/svg/driving-triangle.svg" alt="" class="driving-triangle">
      <Rates/>
      <Istructors/>
      <Testimonials :testimonials="testimonials"/>
      <LatestNews/>
      <NewsLetter/>
  </main>
</template>

<script>
import GetBehindTheWheel from "@/components/GetBehindTheWheel.vue";
import Callback from "@/components/Callback.vue";
import Courses from "@/components/Courses.vue";
import Rates from "@/components/Rates.vue";
import Istructors from "@/components/Istructors.vue";
import Testimonials from "@/components/Testimonials.vue";
import LatestNews from "@/components/LatestNews.vue";
import NewsLetter from "@/components/NewsLetter.vue";
export default {
name: 'Main',
components:{
    GetBehindTheWheel,
    Callback,
    Courses,
    Rates,
    Istructors,
    Testimonials,
    LatestNews,
    NewsLetter
},
data(){
    return{
                testimonials:[
            {
                id:1,
                name: 'Sophia Jones',
                text:'Avada driving school really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
                imgPath: require('@/assets/img/testimonial-sophia.png')
            },
            {
                id:2,
                name: 'Grant',
                text:'Avada driving school really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
                imgPath: require('@/assets/img/testimonial-grant.png')
            },
            {
                id:3,
                name: 'Harold',
                text:'Avada driving school really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
                imgPath: require('@/assets/img/testimonial-harold.png')
            },
            {
                id:4,
                name: 'Kate',
                text:'Avada driving school really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
                imgPath: require('@/assets/img/testimonial-kate.png')
            },
            {
                id:5,
                name: 'Kelly',
                text:'Avada driving school really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
                imgPath: require('@/assets/img/testimonial-kelly.png')
            },
        ]
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

#start-learning{
    background-image: url('../assets/img/horizontal-cta-background.jpg');
    background-size: cover;
    color: $white;
}

.driving-triangle{
    width: 100%;
    height: 100px;
    opacity: 0.8;
}
</style>