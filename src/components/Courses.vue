<template>
  <div id="courses">
      <div class="container py-5 position-relative courses-list d-flex justify-content-between align-items-center">
      <CoursesCard/>
      <Course v-for="course in courses" :key="course.title" :course="course"/>
      </div>
  </div>
</template>

<script>
import CoursesCard from './CoursesCard.vue'
import Course from './Course.vue'

export default {
name:'Courses',
components:{
    CoursesCard,
    Course
},
data(){
    return{
        courses:[
            {
                imgPath: require('@/assets/img/courses-passplus-400x399.jpg'),
                title: 'Pass Plus'
            },
            {
                imgPath: require('@/assets/img/course-intensive-400x399.jpg'),
                title: 'Intensive Course'
            },
            {
                imgPath: require('@/assets/img/courses-instructor-400x400.jpg'),
                title: 'Istructors'
            },
            
        ]
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

#courses{
    background-image: url('../assets/img/promise-background.jpg');
    background-size: cover;
    background-position: center;

    .courses-list{
        top: -80px;
    }
}
</style>