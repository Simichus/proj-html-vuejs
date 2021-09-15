<template>
  <a href="#" class="fs-5">{{text}}</a>
</template>

<script>
export default {
    name:'Button',
    props:['text']
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

a{
    color: $white;
    padding: 7px 15px;
    background-color: $secondary-color;
    border-radius: 40px;
    transition: background-color .25s;

    &:hover{
        background-color: $secondary-color-hover;
    }
}
</style>