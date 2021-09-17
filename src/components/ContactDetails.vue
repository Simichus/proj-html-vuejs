<template>
  <div>
      <h2 class="h4">Contact Details</h2>
        <ul class="p-0">
            <li class="d-flex my-4">
                <i class="fas fa-home me-2"></i>
                <div>
                    <div>12345 North Main Street,</div>
                    <div>New York, NY 55555</div>
                </div>
            </li>
            <li class="d-flex my-4 align-items-center">
                <i class="fas fa-phone me-2"></i>
                <div>1.800.555.6789</div>
            </li>
            <li class="d-flex my-4 align-items-center">
                <i class="far fa-envelope me-2"></i>
                <div>info@your-domain.com</div>
            </li>
            <li class="d-flex my-4 align-items-center">
                <i class="fas fa-link me-2"></i>
                <div>Theme-Fusion.com</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
name:'ContactDetails'
}
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';


h2{
    color: $white;
}
</style>