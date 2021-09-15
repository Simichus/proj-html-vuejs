<template>
  <header>
      <HeaderTop/>
      <HeaderJumbo/>
  </header>
</template>

<script>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderJumbo from "@/components/HeaderJumbo.vue";
export default {
name: 'Header',
components:{
    HeaderTop,
    HeaderJumbo
}
}
</script>

<style>

</style>