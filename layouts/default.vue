<template>
  <div>
    <Nav/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
import Nav from "./nav";
import Footer from './Home/footer.vue';

export default {
  components: {
    Nav,
    Footer
  }
};
</script>
<style>
</style>
