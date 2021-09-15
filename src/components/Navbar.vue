<template>
  <nav class="d-flex align-items-center">
      <ul class="d-flex align-items-center mb-0">
          <li class="mx-3 d-flex align-items-center" v-for="(voice,index) in navbarVoices" :key="index">
              <a href="#" class="py-2 fs-5">{{voice.name}}</a>
              <span class="ms-2" v-if="voice.new">New</span>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
name:'Navbar',
props:['navbarVoices']
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

a{
    color: $white;

    &:hover{
        color: $secondary-color;
        border-bottom: 2px solid $secondary-color;
    }
}

span{
    background-color: $secondary-color;
    padding: 3px;
    border-radius: 4px;
    font-size: 12px;
}

</style>