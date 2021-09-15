<template>
  <div class="header-top">
      <div class="container d-flex justify-content-between align-items-center py-3">
          <h3>We have a 95% Succesful Pass rate!</h3>
          <h3>
              <i class="fas fa-phone me-2"></i>
              <span class="me-2">Give us a call to book your tuition!</span>
              <span class="phone-number">1-800-555-555</span>
          </h3>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderTop',

}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

.header-top{
    background-color: $main-color;
    color: $gumbo;

    h3{
        font-size: 12px;
        margin: 0;
    }
}
</style>