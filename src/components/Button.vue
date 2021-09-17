<template>
  <a :style="`width:${width};`" href="#" class="fs-5">{{text}}</a>
</template>

<script>
export default {
    name:'Button',
    props:['text', 'width']
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

a{  
    display: inline-block;
    color: $white;
    padding: 6px 13px;
    background-color: $secondary-color;
    border-radius: 40px;
    transition: background-color .25s;
    border: 2px solid transparent;

    &:hover{
        background-color: $white;
        border: 2px solid $secondary-color;
        color: $secondary-color;
    }
}
</style>