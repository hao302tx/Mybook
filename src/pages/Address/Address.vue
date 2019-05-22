<template>
    <div>
        <Tiphead>
            <slot>
                <span>登录</span>
            </slot>
        </Tiphead>
        <section class="main-content">
            <div class="login-input">
                <span class="input-icon"></span>
                <span class="input">
                    <input type="text" placeholder="用户名/邮箱/昵称" v-model="name">
                </span>   
            </div>
             <div class="login-input password">
                <span class="input-icon"></span>
                <span class="input">
                    <input type="text" placeholder="密码" v-model="pwd" v-if="passShow">
                    <input type="password" placeholder="密码"  v-model="pwd" v-else>
                    <span :class="[passShow?'act-pass-icon':'pass-icon']" @click="Showpwd()"></span>
                </span>   
            </div>   
            <div class="sub-input">
            <input type="button" value="登录" :disabled = "!butSure" @click="getLogin()" :class="{dislogin:loginbtn}">
            <router-link class="register" to="/register">没有账号立即注册</router-link>
            </div>
        </section>
        <AlertTip :tipName = "tipName" v-show="showName" @closeTip="closeTip"></AlertTip>
    </div>
</template>


<script>
import Tiphead from '../../pages/Tiphead/Tiphead.vue'
import AlertTip from '../../pages/AlertTip/AlertTip.vue'
import '../../../static/css/reset.css'
export default {
    components : {
        Tiphead,
        AlertTip
    },
    data () {
        return {
            passShow : false,
            pwd : '',
            name : '',
            tipName: '',
            showName: false,
        }
    },
   methods : {
        Showpwd () {
            this.passShow = !this.passShow;
        },
        closeTip () {
            this.tipName = '';
            this.showName = false;
        },
        async getLogin () {
            var that = this;
            if(!that.name) {
                that.tipName = '用户名'
            } else if (!that.pwd) {
                that.tipName = '密码';
            }
        }
    },
    computed : {
        butSure () {
            return ((this.name&&this.pwd) ? true : false);
        },
        loginbtn () {
            if(this.butSure) {
                return false;
            } else {
                return true;
            }
        }
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
    .sub-input .dislogin {
        background: gray;
    }
    .register {
        float: right;
    color: gray;
    padding-top: .8rem;
    font-size: .8rem;
    }
</style>