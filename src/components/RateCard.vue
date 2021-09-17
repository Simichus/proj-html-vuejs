<template>
  <div class="rate-card d-flex justify-content-center align-items-center flex-column py-5">
    <div class="pie-wrapper style" :class="`progress-${rate.progress}`">
    <span class="label">{{rate.progress}}%</span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
    <div class="shadow"></div>
  </div>
  <h1 class="fs-5 mt-3">{{rate.rateName}}</h1>
  </div>
</template>

<script>
export default {
name:'RateCard',
props:['rate'],
methods:{
}
}
</script>

<style lang="scss" scoped>

@import '@/scss/_vars.scss';

.rate-card{
    box-shadow: -5px 5px 5px rgba($color: #000000, $alpha: 0.2),5px 5px 5px rgba($color: #000000, $alpha: 0.2);
    border-radius: 25px;
    background-color: $white;
}

h1{
    color: $gumbo;
}

// -- vars
$bg-color: $light-gray;
$default-size: 10em;
$label-font-size: $default-size / 4;
$label-font-size-redo: $default-size * 4;

// -- mixins
@mixin size($width, $height) {
  height: $height;
  width: $width;
}

@mixin draw-progress($progress, $color) {
  .pie {
    .half-circle {
      border-color: $color;
    }

    .left-side {
      transform: rotate($progress * 3.6deg);
    }

    @if $progress <= 50 {
      .right-side {
        display: none;
      }
    } @else {
      clip: rect(auto, auto, auto, auto);

      .right-side {
        transform: rotate(180deg);
      }
    }
  }
}

@mixin draw-progress--solid($progress, $color, $bg-color) {
  background: linear-gradient(to right, $color 50%, $bg-color 50%);
  
  &:before {
    @if $progress <= 50 {
      background: $bg-color;
      transform: rotate((100 - (50 - $progress)) / 100 * 360deg * -1);
    } @else {
      background: $color;
      transform: rotate((100 - $progress) / 100 * 360deg);
    }
  }
}

// -- selectors

.charts-container {
  &:after {
    clear: both;
    content: '';
    display: table;
  }
}

.pie-wrapper {
  @include size($default-size, $default-size);
  float: left;
  margin: 15px;
  position: relative;
  
  &:nth-child(3n + 1) {
    clear: both;
  }

  .pie {
    @include size(100%, 100%);
    clip: rect(0, $default-size, $default-size, $default-size / 2);
    left: 0;
    position: absolute;
    top: 0;

    .half-circle {
      @include size(100%, 100%);
      border: ($default-size / 10) solid $main-color;
      border-radius: 50%;
      clip: rect(0, $default-size / 2, $default-size, 0);
      left: 0;
      position: absolute;
      top: 0;
    }
  }

  .label {
    background: $bg-color;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: $main-color;
    cursor: default;
    display: block;
    font-size: $label-font-size;
    line-height: $label-font-size-redo * .70;
    position: absolute;
    text-align: center;

  }

  .shadow {
    @include size(100%, 100%);
    border: $default-size / 10 solid $light-gray;
    border-radius: 50%;
  }

  &.style {
    .label {
      background: none;
      color: $main-color;

    }
  }


  &.progress-95 {
    @include draw-progress(95, $secondary-color);
  }

  &.progress-100 {
    @include draw-progress(100, $secondary-color);
  }
}

.pie-wrapper--solid {
  border-radius: 50%;
  overflow: hidden;

  &:before {
    border-radius: 0 100% 100% 0 / 50%;
    content: '';
    display: block;
    height: 100%;
    margin-left: 50%;
    transform-origin: left;
  }
  
  .label {
    background: transparent;
  }

}


</style>