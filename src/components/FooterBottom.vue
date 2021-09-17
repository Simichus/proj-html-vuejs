<template>
  <div class="footer-bottom">
      <div class="container d-flex justify-content-between align-items-center">
          <div>
            <i class="far fa-copyright"></i> Copyright 2012 - 2020 | Avada Theme by <span>Theme Fusion</span> | All Rights Reserved | Powerade by <span>WordPress</span>
          </div>
          <div>
              <i class="fab fa-facebook-f me-3"></i>
              <i class="fab fa-twitter me-3"></i>
              <i class="fab fa-youtube me-3"></i>
              <i class="fab fa-instagram"></i>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:'FooterBottom'
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

.footer-bottom{
    background-color: $black;
    padding: 100px 0;

    color: $gumbo;
    span{
        color: $light-gray;
    }

    i{
        color: $white;
    }
}
</style>