<template>
    <div>
        <Tiphead>
            <span  style="color:green">个人</span>
        </Tiphead>
        <div class="login-link" @click="$router.replace('/login')">
            <section>登陆/注册</section>
        </div>
        <div class="user-start">
            <section>
                <em>0</em>
                <div>收藏的商品</div>
            </section>
               <section>
                <em>0</em>
                <div>关注的店铺</div>
            </section>
               <section>
                <em>0</em>
                <div>我的足迹</div>
            </section>
        </div>
        <div class="f-div">
        <section class="f-section">
            <a href="javascript:;">
                <img src="./image/wd-01.png" alt="">
                我的礼券
            </a>
        </section>
        <section class="f-section">
            <a href="javascript:;">
                <img src="./image/wd-02.png" alt="">
                积分底限
            </a>
        </section>
        <section class="f-section">
            <a href="javascript:;">
                <img src="./image/wd-03.png" alt="">
                我的电子书
            </a>
        </section>
        <section class="f-section">
            <a href="javascript:;">
                <img src="./image/wd-04.png" alt="">
                我的礼品卡
            </a>
        </section>
        <section class="f-section">
            <a href="javascript:;" >
                <img src="./image/wd-05.png" alt="">
                收货地址
            </a>
        </section>
        </div>
    </div>
</template>



<script>
import Tiphead from '../../pages/Tiphead/Tiphead.vue'
import '../../../static/css/reset.css'
export default {
    components : {
        Tiphead,
    },
    data  () {
        return {
            tiptitle : '个人'
        }  
    }
}
</script>


<style>
    html {
        font-size: 16px;
    }
    a:focus, a:hover {
        color: red;
    }
    .login-link {
        width: 100%;
        height: 20vh;
        display: flex;
        /* text-align: center; */
        align-items: center;
        justify-content: center;
        background: url(./image/user-bg.jpg) center no-repeat;
        background-size: 48rem;
    }
    .login-link section {
            color: white;
            display: block;
            border: 1px solid white;
            border-radius: 1em;
            /* width: 24vw; */
            /* height: 10vh; */
            text-align: center;
            padding: 1rem 2em;
    }
    .user-start {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 9vh;
    }
    .user-start section {
        width: 33.3333333%;
        height: 100%;
        text-align: center;
        margin-top: 2vh;
        border-bottom: 1px solid #dddddd;
    }
    .user-start section:nth-child(2) {
        position: relative;
    }
    .user-start section:nth-child(2):before,.user-start section:nth-child(2):after {
    content: "";
    position: absolute;
    top: .5rem;
    height: 4.7rem;
    width: .1rem;
    border-left: .05rem solid #d8d8d8;
    font-size: 0;
    line-height: 0;
    }
    .user-start section:nth-child(2):before {
        left: 0;
    }
    .user-start section:nth-child(2):after {
        right: 0;
    }
    .f-div {
        margin-top: 5vh;
    }
    .f-section {
        margin: 2vh 0;
    }
    .f-section a {
        position: relative;
        display: block;
        overflow: hidden;
        padding: .6rem 0;
        background:url("./image/rightarrow.png") no-repeat 96%;
        background-size: 1rem;
            text-decoration: none;
    }
    .f-section img {
        height: 2.6rem;
    }
    
</style>
