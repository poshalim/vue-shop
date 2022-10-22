<template>
  <my-topbar />
  <router-view />
  <my-footer />
</template>

<script>
import MyTopbar from '@/components/Topbar'
import MyFooter from '@/components/Footer'

export default {
  name: 'MyApp',
  components: {
    MyTopbar,
    MyFooter
  }
}
</script>

<style lang="scss">
*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;

  &._locked {
    overflow: hidden;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

button {
  border: none;
  background-color: transparent;
  font-family: 'Montserrat';
  font-size: 16px;
  cursor: pointer;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 100px;
}

@media(max-width: 768px) {
  .container {
    padding: 0 32px;
  }
}

@media(max-width: 425px) {
  .container {
    padding: 0 16px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.transform-enter-active,
.transform-leave-active {
  transition: transform .5s ease, opacity .5s ease;
}

.transform-enter-from,
.transform-leave-to {
  opacity: 0;
  transform: translateY(150px);
}

.swiper-button-prev::after,
.swiper-button-next::after {
  color: #525252;
}
</style>
