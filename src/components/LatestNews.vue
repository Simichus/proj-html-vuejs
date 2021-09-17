<template>
  <div class="latest-news d-flex justify-content-center">
      <div class="news-container">
          <div class="container  pt-5">
              <h1 class="text-center">Latest News</h1>
              <div class="row mt-5 pb-5 gx-3">
                  <div v-for="news in totalNews" :key="news.title" class="col-6"><NewsCard :news="news"/></div>
              </div>
          </div>
    <img src="@/assets/img/latestnews-bottom-1200x105.png" alt="">
      </div>
  </div>
</template>

<script>
import NewsCard from './NewsCard.vue'

export default {
    name:'LatestNews',
    components:{
        NewsCard
    },
    data(){
        return{
            totalNews:[
                {
                title:'What Car to Start With?',
                text:'lorem ipsum dolor sit amet, cosectetur adipiscing',
                imgPath: require('@/assets/img/blog-choosecar-700x441.jpg'),
                date:'February 7th, 2019',
                comments: 0

            },
                {
                title:'Avada Driving School Expanding',
                text:'lorem ipsum dolor sit amet, cosectetur adipiscing',
                imgPath: require('@/assets/img/blogpost-10and2-700x441.jpg'),
                date:'February 7th, 2019',
                comments: 0

            },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

.latest-news{
    background-image: url('../assets/img/latestnews-background.jpg');
    background-size: cover;
}
.news-container{
    position: relative;
    top: -50px;
    width: 60%;

    div.container{
        background-image: linear-gradient(to bottom, $gumbo, $gumbo 2%, $white 2%, $white 98%);
        border-radius: 20px 20px 0 0;
    }

    h1{
        color: $main-color;
    }

    img{
        width: 100%;
    }
    
}
</style>