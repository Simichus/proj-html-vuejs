<template>
  <main>
      <div class="container">
          <div class="row py-5">
              <div class="col-6 py-3">
                  <GetBehindTheWheel/>
              </div>
              <div class="col-6 position-relative">
                  <Callback/>
              </div>
          </div>
      </div>
      <div id="start-learning" class="py-5">
          <div class="container d-flex justify-content-between align-items-center py-5">
              <div>
                  <h2>Start Learning to Drive Today</h2>
                  <h3 class="h6">Give us a call to schedule your first driving lesson</h3>
              </div>
              <div class="h3"><i class="fas fa-phone me-4"></i>1-800-555-555</div>
          </div>
      </div>
      <Courses/>
  </main>
</template>

<script>
import GetBehindTheWheel from "@/components/GetBehindTheWheel.vue";
import Callback from "@/components/Callback.vue";
import Courses from "@/components/Courses.vue";
export default {
name: 'Main',
components:{
    GetBehindTheWheel,
    Callback,
    Courses
}
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';

#start-learning{
    background-image: url('../assets/img/horizontal-cta-background.jpg');
    background-size: cover;
    color: $white;
}
</style>