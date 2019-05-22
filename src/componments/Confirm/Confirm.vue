<template>
    <div>
        <div class="con_header">
            <svg t="1554517971481" @click="$router.back()" class="icon" style="float: left;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1988" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M741.325039 1017.62986c-6.37014 0-12.74028 0-12.74028-6.37014L295.415241 584.460342c-38.22084-44.59098-38.22084-108.292379 0-152.883359L728.584759 4.777605c6.37014-6.37014 19.11042-6.37014 25.48056 0s6.37014 19.11042 0 25.48056L320.895801 463.427683c-12.74028 12.74028-19.11042 25.48056-19.11042 44.59098 0 19.11042 6.37014 38.22084 19.11042 50.961119l426.799378 426.799378c6.37014 6.37014 6.37014 19.11042 0 25.48056 0 6.37014-6.37014 6.37014-6.37014 6.37014z" fill="white" p-id="1989"></path></svg>
            <span>确认订单</span>
        </div>
        <section class="address_select" :class="{top_show : show_address}">
            <div class="top_address_select">
                <svg t="1554517971481" @click="showAddress(-1)" class="icon" style="float: left;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1988" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M741.325039 1017.62986c-6.37014 0-12.74028 0-12.74028-6.37014L295.415241 584.460342c-38.22084-44.59098-38.22084-108.292379 0-152.883359L728.584759 4.777605c6.37014-6.37014 19.11042-6.37014 25.48056 0s6.37014 19.11042 0 25.48056L320.895801 463.427683c-12.74028 12.74028-19.11042 25.48056-19.11042 44.59098 0 19.11042 6.37014 38.22084 19.11042 50.961119l426.799378 426.799378c6.37014 6.37014 6.37014 19.11042 0 25.48056 0 6.37014-6.37014 6.37014-6.37014 6.37014z" fill="white" p-id="1989"></path></svg>
                <span>新增收货地址</span>
            </div>
            <div class="input_address_select">
                <span>收货人</span>
                <input type="text" placeholder="姓名" v-model="name">
            </div>
            <div class="input_address_select">
                <span>手机</span>
                <input type="text" placeholder="手机号" v-model="phone">
            </div>
            <div class="input_address_select">
                <span>地址</span>
                <input type="text" placeholder="地址" v-model="address">
            </div>
            <input type="button" value="确认" class="submit_address" @click="showAddress(-1)"> 
        </section>
        <section class="user_address">
            <div class="position_icon">
                <svg t="1557218329424" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2073" data-spm-anchor-id="a313x.7781069.0.i7" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs></defs><path d="M511.998465 63.513546c-200.687742 0-363.370915 150.58053-363.370915 336.354608 0 280.295847 302.806537 560.618301 363.370915 560.618301 60.567447 0 363.372961-280.322453 363.372961-560.618301C875.371426 214.094076 712.68723 63.513546 511.998465 63.513546zM511.998465 601.695858c-100.343359 0-181.697225-80.316234-181.697225-179.393763s81.353866-179.393763 181.697225-179.393763c100.345406 0 181.673689 80.316234 181.673689 179.393763S612.342848 601.695858 511.998465 601.695858z" p-id="2074" fill="#ffffff" data-spm-anchor-id="a313x.7781069.0.i4" class=""></path></svg>
            </div>
            <div @click="showAddress(1)">
                <div class="user_info">
                    <span class="user_name">{{name}}</span>
                    <span class="user_phone">{{phone}}</span>
                </div>
                <svg t="1557217803375" class="icon" style="float:right;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1986" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M246.109091 1014.690909c-13.963636-13.963636-13.963636-41.890909 0-55.854545L692.945455 512 246.109091 65.163636C232.145455 51.2 232.145455 23.272727 246.109091 9.309091c13.963636-13.963636 41.890909-13.963636 55.854545 0l479.418182 474.763636c13.963636 13.963636 13.963636 41.890909 0 55.854546L301.963636 1014.690909c-9.309091 4.654545-18.618182 9.309091-27.927272 9.309091s-23.272727-4.654545-27.927273-9.309091z" p-id="1987" fill="#8a8a8a"></path></svg>
                <div class="position_font">
                    {{address}}
                </div>
            </div> 
        </section>
        <section class="user_address">
            <div>
                <img :src="'../../../static/shopGoodsimg/b' + shopcar.img + '.jpg'" alt="" class="order_img">
                <p class="order_font">{{shopcar.name}}</p>
                <div>
                    <i>￥{{shopcar.price}}</i>
                    <i style="float:right">x1</i>
                </div>
            </div>
            <div class="order_selc">
                <section class="block">
                    <span class="order_pro">配送方式</span>
                    <span class="order_ans">普通配送</span>
                </section>
                <section class="block">
                    <span class="order_pro">支付方式</span>
                    <span class="order_ans">支持</span>
                    <p class="money_pay">
                        <img src="./img/支付宝.png" alt="">
                        <img src="./img/微信.png" alt="">
                    </p>
                </section>
            </div>
        </section>
       
        <section class="white_padding"></section>
        <footer class="order_footer">
            <div class="order_price">
                <span>合计</span>
                <em>￥{{shopcar.price}}</em>
            </div>
            <router-link to="/home" class="order_submit">提交订单</router-link>
        </footer>
    </div> 
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    components : {
        

    },
    data () {
        return {
            show_address:true,
            name : '张三',
            phone : '1388*****11',
            address : '四川大学锦江学院',
            sum : 0
        }
    },
    methods : {
        showAddress (a) {
            if(a>0) {
                this.show_address = false;
            } else {
                this.show_address = true;
            }
        },   
    },
    computed : {
        ...mapState([
            'shopcar'
        ]),
        ...mapActions([
            "priceShow"
        ]),
        Addsum () {
            this.sum + this.$store.state.shopcar.price;
        }
    }
}
</script>


<style>
    html {
        font-size: 16px;
    }
    body {
        background: #f2f2f2
    }
    .block {
        position: relative;
        padding-top: 2rem;
    }
    .top_show {
        display: none;
    }
    .address_select {
        position: fixed;
        background: white;
        width: 100%;
        height: 100%;
        z-index: 9999;
        top: 0;
        right: 0;
    }
    .top_address_select {
            width: 100%;
    /* height: 3rem; */
    height: 7vh;
    color: white;
    background: orangered;
    text-align: center;
    padding-top: 2vh;
    }
    .input_address_select {
            border-top: 1em solid #fafafa;
            background-color: #fff;
            color: #323232;
            line-height: 45px;
            font-size: 14px;
            padding: 0 5% 0 3.8%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            border-bottom: 1px solid #dddddd;
            padding-bottom: .5rem;
    }
    .input_address_select input {
        border: none 0;
        font-size: 14px;
        background-color: transparent;
        width: -webkit-fill-available;
        outline: none;
        margin-left: .5rem;
    }
    .submit_address {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 6vh;
        background: #f9524f;
        color: white;
    }
    .con_header {
        width: 100%;
        height: 7vh;
        background: orangered;
        display: flex;
        align-items: center;
        color: white;
        justify-content: left;
        font-size: 1rem;
    }
    .con_header span {
        padding-left: 1rem;
    }
    .user_address {
        overflow: hidden;
        background: white;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 1em;
    }
    .position_icon {
        width: 32px;
        height: 32px;
        background: linear-gradient(to right,yellow,orangered);
        border-radius: 16px;
        position: relative;
        float: left;
        top: .6rem;
    }
    .position_icon svg {
        position: absolute;
        left: 4px;
        top: 4px;
    }
    .user_info {

    }
    .user_name {
        padding-left: 1rem;
        color: black;
    }
    .user_phone {
        padding-left: .6rem;
        color: grey;
        font-size: .8rem;
    }
    .position_font {
        padding: .6rem 3rem;
        font-size: .8rem;
    }
    .order_img {
        width: 5rem;
        height: 5rem;
        float: left;
    }
    .order_font {
        font-size: .8rem;
        color: black;
        padding-left: 5.5rem;
        font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    }
    .order_selc {
        padding: 2rem;
    }
    .order_pro {
        color: black;
    }
    .order_ans {
        float: right;
        color: grey;
    }
    .money_pay {
        padding-top: 2rem;
        display: flex;
        justify-content: space-around;
    }
    .order_footer {
        width: 95%;
        height: 8vh;
        position: fixed;
        bottom: 0;
        display: flex;
        background: white;
        align-items: center;
        justify-content: space-between;
        border-radius: 1em;
    }
    .white_padding {
        width: 100%;
        position: relative;
        bottom: 0;
        height: 8vh;
    }
    .order_price {
        padding-left: 1rem;
    }
    .order_price em{
        color:orangered;
        font-size: 1.2rem;
    }
    .order_submit {
        display: block;
        width: 24vw;
        height: 80%;
        background: orangered;
        color: white;
        border-radius: 2em;
        text-align: center;
        line-height: 12vw;
        margin-right: 1rem;
    }
</style>
