<template>
  <div>
        <h2 class="h4">Courses</h2>
        <ul class="p-0">
            <li class="d-flex my-4 align-items-center">
                <i class="far fa-arrow-alt-circle-right me-4"></i>
                <div class="h5">Pass Plus</div>
            </li>
            <li class="d-flex my-4 align-items-center">
                <i class="far fa-arrow-alt-circle-right me-4"></i>
                <div class="h5">Intensive Course</div>
            </li>
            <li class="d-flex my-4 align-items-center">
                <i class="far fa-arrow-alt-circle-right me-4"></i>
                <div class="h5">Automatic</div>
            </li>
            <li class="d-flex my-4 align-items-center">
                <i class="far fa-arrow-alt-circle-right me-4"></i>
                <div class="h5">Istructor Training</div>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    name:'FooterCourses'
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

h2{
    color: $white;
}

li{
    color: $gumbo;
}

</style>