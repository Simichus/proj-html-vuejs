<template>
  <footer>
      <FooterTop/>
      <FooterBottom/>
  </footer>
</template>

<script>
import FooterTop from './FooterTop.vue'
import FooterBottom from './FooterBottom.vue'
export default {
    name:'Footer',
    components:{
        FooterTop,
        FooterBottom
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

</style>