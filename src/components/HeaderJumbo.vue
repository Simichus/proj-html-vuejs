<template>
  <div id="header-jumbo">
      <div class="jumbo-nav py-3">
        <div class="container d-flex justify-content-between align-items-center">
            <img src="@/assets/img/avada-drivers-logo-2x-300x58.png" alt="">  
            <Navbar :navbar-voices="navbarVoices"/>
        </div>
      </div>
      <div class="container jumbo-text d-flex flex-column justify-content-center">
          <h1>Drive with Avada</h1>
          <h2 class="h3">We offer the finest driving tuition money can buy</h2>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
name:'HeaderJumbo',
components:{
    Navbar
},
data(){
    return{
        navbarVoices:[
            {
                name: 'Home',
                new: false
            },
            {
                name: 'About',
                new: false
            },
            {
                name: 'Prices',
                new: false
            },
            {
                name: 'Courses',
                new: true
            },
            {
                name: 'Location',
                new: false
            },
            {
                name: 'Blog',
                new: false
            }
        ]
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

#header-jumbo{
    background-image: url('../assets/img/homepage-hero-background.jpg');
    background-size: cover;
    color: $white;

    .jumbo-nav{
        background-color: rgba($color: $main-color, $alpha: 0.6);
    }

    .jumbo-text{
        height: 500px;

        h1{
            font-size: 70px;
        }
    }
}

</style>