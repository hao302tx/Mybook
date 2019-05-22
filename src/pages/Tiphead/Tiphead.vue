<template>
        <header>
            <div class="container">
            <svg t="1554517971481" @click="$router.back(-1)" class="icon" style="float: left;margin-top: 0.5vh;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1988" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M741.325039 1017.62986c-6.37014 0-12.74028 0-12.74028-6.37014L295.415241 584.460342c-38.22084-44.59098-38.22084-108.292379 0-152.883359L728.584759 4.777605c6.37014-6.37014 19.11042-6.37014 25.48056 0s6.37014 19.11042 0 25.48056L320.895801 463.427683c-12.74028 12.74028-19.11042 25.48056-19.11042 44.59098 0 19.11042 6.37014 38.22084 19.11042 50.961119l426.799378 426.799378c6.37014 6.37014 6.37014 19.11042 0 25.48056 0 6.37014-6.37014 6.37014-6.37014 6.37014z" fill="" p-id="1989"></path></svg>
            <a href="javascript:;" style="float:right">
                <svg t="1554519201869" v-show="iconShow" @click="ifShow()"  class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2012" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M116.363636 442.181818a69.818182 69.818182 0 1 1 0 139.636364 69.818182 69.818182 0 0 1 0-139.636364z m395.636364 0a69.818182 69.818182 0 1 1 0 139.636364 69.818182 69.818182 0 0 1 0-139.636364z m395.636364 0a69.818182 69.818182 0 1 1 0 139.636364 69.818182 69.818182 0 0 1 0-139.636364z" fill="#797979" p-id="2013"></path></svg>
                <svg t="1554604193144" v-show="!iconShow"  @click="ifShow()"  class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2831" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="2832"></path><path d="M881.6 927.8c-11.8 0-23.6-4.5-32.7-13.5L109.7 175c-18-18-18-47.3 0-65.3s47.3-18 65.3 0L914.3 849c18 18 18 47.3 0 65.3-9 9-20.9 13.5-32.7 13.5z" fill="#D43E00" p-id="2833"></path><path d="M142.4 927.8c-11.8 0-23.6-4.5-32.7-13.5-18-18-18-47.3 0-65.3L849 109.7c18-18 47.3-18 65.3 0s18 47.3 0 65.3L175 914.3c-9 9-20.8 13.5-32.6 13.5z" fill="#D43E00" p-id="2834"></path></svg>
            </a>
            <slot></slot>
            
            </div> 
            <transition name = "picPlay">
            <nav v-show="!iconShow">
                <ul>
                    <li @click="$router.replace('/home')">
                        <a href="javascript:;" class="home">首页</a>
                    </li>
                    <li @click="$router.replace('/search')">
                        <a href="javascript:;" class="search">分类</a>
                    </li>
                    <li @click="$router.replace('/order')">
                        <a href="javascript:;" class="listcard">购物车</a>
                    </li>  
                    <li @click="$router.replace('/person')">
                      <a href="javascript:;" class="user">我的页面</a>  
                    </li>      
                </ul>
            </nav>
            </transition>
        </header>
    
</template>

<script>

export default {
  
    data () {
        return {
            iconShow : true
        }
    },
    computed : {
        Play () {
            return !this.iconShow;
        }
    },
    methods : {
        ifShow () {
            this.iconShow = !this.iconShow;
        },
        
    }
}
</script>


<style>
    .container {
        padding: 5%;
        text-align: center;
        position: relative;
        background: white;
    }
    .container span {   
        font-size: 125%;
        color: black;
    }
    nav {
        width: 100%;
        height: 3.5rem;
        text-align: center;
        background: #f2f2f2;
    }
    nav ul {
        display: block;
        list-style: none;
        overflow: hidden;
    }
    nav ul li {
        float: left;
        width: 25%;
        display: inline-block;
    }
    nav ul li a {
        background:url(./image/h-home.png) no-repeat center .3rem;
        width: 100%;
        background-size: 2.2rem;
        height: 5rem;
        display: inline-block;
        padding: 5vh 0 .1rem;
        color: black;
    }
    .title {

    }
    .picPlay-enter-active, .picPlay-leave-active {
        transition: opacity 0.6s ease-out;
    }
    .picPlay-enter, .picPlay-leave-to {
        opacity: 0;
    }
</style>
