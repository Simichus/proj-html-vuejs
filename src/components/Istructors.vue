<template>
  <div class="container istructors">
      <h1 class="mb-3">Your Istructors</h1>
      <div class="d-flex align-items-center justify-content-between mb-5">
          <div class="pe-5 me-5 paragraph fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque est dolores nobis quasi facilis earum reprehenderit dolor alias unde eius? Voluptatum iste sunt facilis dolor nemo placeat a vitae esse.</div>
          <Button text="More About Us" class="flex-shrink-0"/>
      </div>
      <div class="d-flex justify-content-center align-items-center mb-3">
          <IstructorCard v-for="istructor in istructors" :key="istructor.name" :istructor="istructor"/>
      </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import IstructorCard from './IstructorCard.vue'
export default {
name:'Istructors',
components:{
    Button,
    IstructorCard
},
data(){
    return{
        istructors:[
            {
                name:'Mike Hart',
                description:'lorem ipsum dolor sit amet, cosectetur adipiscing elit.',
                imgPath: require('@/assets/img/instructor-mikehart-600x381.jpg')
            },
            {
                name:'John Smith',
                description:'lorem ipsum dolor sit amet, cosectetur adipiscing elit.',
                imgPath: require('@/assets/img/instructor-johnsmith-600x381.jpg')
            },
            {
                name:'Angela Hart',
                description:'lorem ipsum dolor sit amet, cosectetur adipiscing elit.',
                imgPath: require('@/assets/img/instructor-angelahart-600x381.jpg')
            },
        ],

    }
}
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

.istructors{
    position: relative;
    top:100px;
    z-index: 1;
}
div.paragraph{
    color: $gumbo;
}
</style>