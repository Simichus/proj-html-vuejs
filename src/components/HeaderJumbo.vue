<template>
  <div id="header-jumbo">
      <div class="jumbo-nav py-3">
        <div class="container d-flex justify-content-between align-items-center">
            <img src="@/assets/img/avada-drivers-logo-2x-300x58.png" alt=""> 
            <div class="d-flex justify-content-between align-items-center">
            <Navbar :navbar-voices="navbarVoices"/>
            <Button text="Book Now"/>
            </div> 
        </div>
            <div id="info-boxes">
                <div class="info-box my-2 d-flex flex-column justify-content-center align-items-center">
                    <i class="fab fa-atlassian"></i>
                    <div>Demos</div>
                </div>
                <div class="info-box my-2 d-flex flex-column justify-content-center align-items-center">
                    <div class="sale fs-4"><span>$</span>39</div>
                    <div>On Sale</div>
                </div>
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
import Button from '@/components/Button.vue'

export default {
name:'HeaderJumbo',
components:{
    Navbar,
    Button,
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
        position: relative;


        #info-boxes{
            position: absolute;
            right: 1%;
            bottom: -150px;

            .info-box{
                color: $black;
                height: 75px;
                width: 75px;
                background-color: $white;
                border-radius: 10px;
                box-shadow: -5px 5px 10px rgba($color: #000000, $alpha: 0.2);

                i{
                    color: $white;
                    background-color: $black;
                    padding: 4px;
                    border-radius: 6px;
                }

                .sale{
                    color: $secondary-color;
                    font-weight: bold;

                    span{
                        font-size: 15px;
                        vertical-align: text-top;
                    }
                }
            }
        }
        
    }

    .jumbo-text{
        height: 500px;

        h1{
            font-size: 70px;
        }
    }
}

</style>