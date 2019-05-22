<template>
    <div>
        <Tiphead>
            <span>注册</span>
        </Tiphead>
        <section class="main-content">
            <div class="login-input">
                <span class="input-icon"></span>
                <span class="input">
                    <input type="text" placeholder="请输入用户名/昵称">
                </span>   
            </div>
            <div class="login-input password">
                <span class="input-icon"></span>
                <span class="input">
                    <input  type="text" placeholder="请输入密码" v-model="pwd" >
                </span>   
            </div>  
            <div class="login-input password">
                <span class="input-icon"></span>
                <span class="input">
                    <input  type="text" placeholder="请再输入一次密码"  v-model="pwd">
                </span>   
            </div>  
            <div class="login-input password">
                <span class="input">
                    <input  type="text" placeholder="请输入图形验证码"  >
                </span>   
            </div> 

            <div class="sub-input">
            <input type="button" value="注册">
            </div>
        </section>
    </div>
</template>

<script>
import Tiphead from '../../pages/Tiphead/Tiphead.vue'
export default {
    components : {
        Tiphead,
    }
}
</script>

<style>
    html {
        font-size: 16px;
    }
    .main-content {
        margin: auto 2.25rem;
        padding-top: .625rem;
    }
    .login-input {
        position: relative;
        height: 3.25rem;
        border: 1px solid #fafafa;
        border-radius: .625rem;
        background: #fdfdfd54;
    }
    .input-icon {
        float: left;
        background: url(./img/user_icon.png) center .75rem no-repeat;
        background-size: 1.25rem;
        position: absolute;
        left: 0;
        top: 0;
        width: 2.25rem;
        display: block;
        height: 100%;
    }
    .input {
        overflow: hidden;
        display: block;
        float: left;
        width: 62.3%;
        margin-left: 1.8rem;
    }
    .input input {
        height: 3.25rem;
        float: left;
        border: 1px solid #fafafa;
        background: #fdfdfd54;
        width: 100%;
        color: black;
        outline: medium;
        margin-left: 1rem;
        font-size: 1rem;
    }
    .password {
        margin-top: 1vh;
    }
    .password .input-icon {
        float: left;
        background: url(./img/pw_icon.png) center .75rem no-repeat;
        background-size: 1.25rem;
        position: absolute;
        left: 0;
        top: 0;
        width: 2.25rem;
        display: block;
        height: 100%;
    }
    .pass-icon {
        float: right;
        background: url(./img/pw_hide_icon.png) center 1.2rem no-repeat;
        background-size: 1.25rem;
        position: absolute;
        right:  0;
        top: 0;
        width: 2.25rem;
        display: block;
        height: 100%;
    }
    .act-pass-icon {
         float: right;
        background: url(./img/pw_show_icon.png) center 1.2rem no-repeat;
        background-size: 1.25rem;
        position: absolute;
        right:  0;
        top: 0;
        width: 2.25rem;
        display: block;
        height: 100%;
    }
    .sub-input {
        margin-top: 1rem;
    }
    .sub-input input{
        position: relative;
        height: 3.25rem;
        border: 1px solid #fafafa;
        border-radius: .625rem;
        background: red;
        width: 100%;
        color: wheat;
        font-size: 120%;
    }
</style>
