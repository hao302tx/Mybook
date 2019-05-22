<template>
  <footer class="footer">
        <div class="footer_container" @click="goto('/home')">
            <a href="javascript:;"><img :class="{pic_on : '/home' === $route.path}" src="./image/首页.png" width="30px" height="30px" alt=""></a>
            <span class="footer_span" :class="{font_on : '/home' === $route.path}">首页</span>
        </div>
        <div class="footer_container" @click="goto('/search')">
            <a href="javascript:;"><img :class="{pic_on : '/search' === $route.path}" src="./image/分类.png" width="30px" height="30px" alt=""></a>
            <span class="footer_span" :class="{font_on : '/search' === $route.path}">分类</span>
        </div>
        <div class="footer_container" @click="goto('/order')">
            <a href="javascript:;"><img :class="{pic_on : '/order' === $route.path}" src="./image/订单.png" width="30px" height="30px" alt=""></a>
            <span class="footer_span" :class="{font_on : '/order' === $route.path}">购物车</span>
        </div>
        <div class="footer_container" @click="goto('/person')">
            <a href="javascript:;"><img :class="{pic_on : '/person' === $route.path}" src="./image/我的.png" width="30px" height="30px" alt=""></a>
            <span class="footer_span" :class="{font_on : '/person' === $route.path}">我的</span>
        </div>
        
    </footer>
</template>

 

 <script>
import '../../../static/css/reset.css'
 export default {
     methods : {
         goto (path) {
            this.$router.replace(path);
         }
     }
 }
 </script>
 
 <style>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        background: white;
    }
    .footer_container {
        /* float: left;
        width: 25%; */
        display: flex;
		flex: 1;
		text-align: center;
		flex-direction: column;
		align-items: center;
		margin: -5px;
		color: #999999;
		text-decoration: none;
		height: 8vh;
        justify-content: center;
    }
    .footer_container a {
    /* FLOAT: left;
    margin: 0 35%; */
    }
    .footer_span {
        /* margin: 0 35%; */
    }
    .pic_on {
       
    }
    .font_on {
        color: red;

    }
 </style>
 