<template>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <h5 style="color:white;">Главная</h5>
  <router-view/>
</template>

<style lang="scss">
body{background-color: antiquewhite;}
// @import '~materialize-css\dist\css\materialize.min.css';
@import 'assets/index.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css';
</style>
