<template>
  <div>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=0" />     
      <meta name="apple-mobile-web-app-capable" content="yes" />    
      <meta name="format-detection" content="telephone=no" />   
    </head>
    <router-view/>
    <Guide v-show="$route.meta.GuideShow"></Guide>
  </div>
</template>

<script>
import Guide from './componments/Guide/Guide.vue'
import '../static/css/reset.css'
export default {
    components : {
      Guide
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
