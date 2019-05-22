<template>
    <div>
        <section class="img_show">
            <img :src="'../../../static/shopGoodsimg/b' + shoplist.img + '.jpg'" alt="">
        </section>
        <section style="margin: 1em 1em 0 1em;">
            <article class="ar_title">
                <em>自营</em>
                <i>{{shoplist.name}}</i>
            </article>
            <div>
                <div class="ar_price">
                    <i>￥</i>
                    <i class="now_price">{{shoplist.price}}</i>
                    <i class="discount">({{shoplist.zhekou}}折)</i>
                </div>
                <div class="ori_price">
                    <span>定价</span>
                    <i>￥{{oriprice(shoplist)}}</i>
                </div>
            </div>
        </section>
        <section style="margin-top: 1rem;">
            <div class="book_info">
                <div>
                    <span>{{shoplist.name}}</span>
                    <span>{{shoplist.author}}</span>
                </div>
            </div>
             <div class="book_info">
                 <div>
                <span>出版</span>
                <span>{{shoplist.address}}</span>
                </div>
            </div>
             <div class="book_info">
                <div>
                    <span>排名</span>
                    <span>{{shoplist.id+1}}</span>
                </div>
            </div>
        </section>
        <section class="blank_padding">

        </section>
        <footer class="shop_car">
                <div class="left_shop_car">
                    <svg t="1557024773324" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2054" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><defs></defs><path d="M864.234539 486.29576l91.521277-222.162012c12.048862-30.593277-5.045397-55.576016-38.270212-55.576016L331.444886 208.557733l-4.89517-34.360208c-5.876248-28.974499-32.498204-50.540838-62.245301-50.540838L109.482156 123.656687C84.575042 123.656687 64.383234 143.718707 64.383234 168.465373s20.191808 44.808687 45.098922 44.808687l132.97897 0 85.976144 423.97279c-55.642443 16.676279-96.184463 67.946794-96.184463 128.669381 0 74.241022 60.574403 134.42606 135.297788 134.42606 74.722363 0 135.297788-60.185038 135.297788-134.42606 0-16.61905-3.179305-32.466523-8.729549-47.159186L676.698443 718.757046c-5.550244 14.692663-8.729549 30.540136-8.729549 47.159186 0 74.241022 60.574403 134.42606 135.297788 134.42606 74.722363 0 135.297788-60.185038 135.297788-134.42606 0-69.046419-52.418172-125.865134-119.858076-133.488926-5.199713-2.078659-10.848064-3.287633-16.795848-3.287633L418.80578 629.139673l-17.697214-87.267896 381.150786 0C815.322699 541.872798 852.146842 516.990212 864.234539 486.29576zM803.266683 810.72594c-24.908136 0-45.098922-20.060998-45.098922-44.808687s20.191808-44.808687 45.098922-44.808687c24.908136 0 45.098922 20.06202 45.098922 44.808687S828.174818 810.72594 803.266683 810.72594zM412.650539 765.917253c0 24.747689-20.19283 44.808687-45.098922 44.808687-24.908136 0-45.098922-20.060998-45.098922-44.808687s20.191808-44.808687 45.098922-44.808687C392.457709 721.107545 412.650539 741.169565 412.650539 765.917253z" p-id="2055"></path></svg>
                    <span>购物车</span>
                </div>
                <div class="right_shop_car">
                    <span class="right_first" @click="goto()">立即购买</span>
                    <span class="right_second" @click="CaddshopCar()">加入购物车</span>
                </div>
        </footer>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed : {
        ...mapState([
            'shoplist',
        ]),
        ...mapActions([
            'Addshopcar',
           
        ])
    },
    methods : {
        oriprice (item) {
            return (item.price/item.zhekou*10).toFixed(2);
        },
        goto() {
            this.$store.dispatch('setShopcarinfo',this.shoplist)
            this.$router.push('/confirm');
        },
        CaddshopCar () {
            console.log(this.shoplist);
           
            this.$store.dispatch('Addshopcar',this.shoplist);
            alert("加入成功");
            this.$router.push('/order');
        }
    }
}
</script>

<style>
html {
    font-size: 16px;
}
    .img_show {
        width: 100%;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #dddddd;
    }
    .img_show img {
        width: 100%;
        float: left;
    }
    .ar_title em{
            color: red;
            border: 1px solid red;
            font-size: 0.75rem;
    }
    .ar_price {
        margin: 1px 0 0 0;
        color: red;
    }
    .ar_price i {
        font-size: 0.75rem;
    }
    .ar_price .now_price {
        font-size: 1rem;
    }
    .ar_price .discount {
        font-size: 0.75rem;
        color: #969696;
    }
    .ori_price {
        color: #969696;
        font-size: .75rem;
    }
    .ori_price i {
        text-decoration: line-through;
    }
    .book_info {
            display: block;
    padding: .65rem;
    border-bottom: 1px solid #dddddd;
    }
    .blank_padding {
        position: relative;
        bottom: 0;
        width: 100%;
        height: 7vh;
    }
    .shop_car {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 7vh;
        display: flex;
        align-items: center;
        text-align: center;
        border-top: 1px solid #989898;
    }
    .left_shop_car {
        -webkit-box-flex: 5;
        -ms-flex-positive: 5;
        flex-grow: 5;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
    }
    .right_shop_car {
        flex-grow: 5;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .right_first {
                width: 50%;
                height: 7vh;
                background: rgb(177, 177, 11);
                color: white;
                font-weight: bold;
                font-size: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
    }
    .right_second {
                width: 50%;
                height: 7vh;
                background: rgb(224, 70, 70);
                color: white;
                font-weight: bold;
                font-size: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
            
    }
</style>
