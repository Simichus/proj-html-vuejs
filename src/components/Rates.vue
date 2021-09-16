<template>
  <div class="rates">
      <div class="container">
          <div class="row">
              <div v-for="rate in rates" :key="rate.rateName" class="col-4"><RateCard :rate="rate"/></div>
              
          </div>

      </div>
  </div>
</template>

<script>
import RateCard from './RateCard.vue'
export default {
name:'Rates',
components:{
    RateCard
},
data(){
    return{
        rates:[
            {
            progress:95,
            rateName:'Pass Rate'
            },
            {
            progress:100,
            rateName:'Referral Rate'
            },
            {
            progress:0,
            rateName:'Accident Rate'
            },
        ]
    }
}
}
</script>

<style lang="scss" scoped>
.rates{
    position: relative;
    top: -100px;
}
</style>