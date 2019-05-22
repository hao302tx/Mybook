<template>
    <div>
        <Tiphead>
           <slot>
               <div class="div-input">
                        <svg t="1555675821908" class="icon icon-absolute" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1334" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><defs></defs><path d="M422.1 211.2c-117.6 19-202.9 119.2-202.9 238.3 0 10.3 0.8 21.1 2.7 34 1.4 10.1 10.1 17.4 20 17.4 0.9 0 1.9-0.1 2.8-0.2 11-1.6 18.7-11.8 17.2-22.8s-2.3-20-2.3-28.4c0-99.2 71.1-182.6 169-198.4 11-1.8 18.5-12.1 16.7-23.1-1.8-11.1-12.3-18.7-23.2-16.8zM921 887L692.2 658.2c53.8-61.6 83.4-139.3 83.4-221.8 0-186.4-151.6-338-338-338s-338 151.6-338 338 151.6 338 338 338c81.8 0 159-29.1 220.3-82l228.8 228.8c4.7 4.7 10.9 7.1 17.1 7.1s12.4-2.4 17.1-7.1c9.5-9.4 9.5-24.7 0.1-34.2zM643 641.8c-54.9 54.9-127.8 85.1-205.4 85.1-160.2 0-290.4-130.3-290.4-290.4 0-160.1 130.3-290.4 290.4-290.4 160.1 0 290.4 130.3 290.4 290.4 0.1 77.5-30.2 150.4-85 205.3z" p-id="1335"></path></svg>
                        <input type="text" class="head-input" :placeholder="showSearch">
                <section></section>
               </div>
           </slot>
       </Tiphead>
       <div>
            <ul class="crumb">
                <li>全部</li>
                <li>中国当代小说</li>
                <li>外国小说</li>
                <li>科幻</li>
                <li>全部</li>
                <li>中科幻</li>
                <li>外科幻</li>
                <li>科幻</li><li>全部</li>
                <li>科幻</li>
                <li>外国小说</li>
                <li>科幻</li><li>全部</li>
                <li>中国当代小说</li>
                <li>外国小说</li>
                <li>科幻</li>
            </ul>
       </div>
       <section class="common">
           <ul >
               <li>
                   <a href="javascript:;" class="redfont">默认</a>
               </li>
               <li>
                   <a href="javascript:;">销量</a>
               </li>
               <li>
                   <a href="javascript:;">价格</a>
               </li>
               <li>
                   <a href="javascript:;">好评</a>
               </li>
               <li>
                   <a href="javascript:;">出版时间</a>
               </li>
           </ul>
       </section>
       <section class="list" v-for="(item,index) in shoplist" :key="index" @click="goto(item)">
           <div class="product">
               <a href="javascript:;" class="ablock">
                   <!-- 图片开始 -->
                   <img :src="'../../../static/shopGoodsimg/b' + item.img + '.jpg'" alt="">
                   <div class="detail">
                       <div class="table">
                           <div class="cell">
                               <p class="name">
                                   {{item.name}}
                               </p>
                               <p class="author">
                                   {{item.author}}
                               </p>
                               <div class="lab">
                                   <div class="lab_common">
                                       自营
                                   </div>
                               </div>
                               <div class="price_con">
                                   <i class="now_price">￥{{item.price}}</i>
                                   <i class="ori_price">{{oriprice(item)}}</i>
                                   <i class="discount">{{item.zhekou}}折</i>
                               </div>
                               <div class="auto_fixed">
                                   <em>100%好评</em>
                                   <em>(689999人)</em>
                               </div>
                           </div>
                       </div>
                   </div>
               </a>
           </div>
       </section>
       <section class="white_padding">
       </section>
       
    </div>
</template>


<script>
import Tiphead from '../../pages/Tiphead/Tiphead.vue'

export default {
    components: {
        Tiphead,
    },
    data () {
        return {
            shoplist : [
                {
                    name: '乌合之众',
                    author : '张三',
                    price : 28,
                    zhekou : 8.8,
                    id: 0,
                    address:'重庆出版社 2011年11月',
                    img: 11,
                    num: 1,

                },
                {
                    name: '人间失格',
                    author : '李四',
                    price : 28,
                    zhekou : 6.8,
                    id: 1,
                    address:'清华出版社 2012年11月',
                    img: 12,
                    num: 1
                },
                {
                    name: '三体：三 刘慈欣代表作，亚洲首部 "雨果奖"获得作品',
                    author : '刘慈欣',
                    price : 28,
                    zhekou : 7.8,
                    id: 2,
                    address:'锦江出版社 2013年11月',
                    img: 13,
                    num: 1
                },

            ]
        }
    },
    methods : {
        goto (item) {
            this.$store.dispatch('setBookinfo',item);
            this.$router.push('/product')
        },
        oriprice (item) {
            return (item.price/item.zhekou*10).toFixed(2);
        }
    },
    computed : {
        showSearch() {
            if(this.$route.query) {
                return this.$route.query.name;
            } else {
                return "搜索商品/店铺/种类";
            }
        }
    },
    mounted () {
        console.log(this.$route.query)
    }
}
</script>


<style>
    html {
        font-size: 16px;
    }
    .div-input {
        width: 70vw;
        border-radius: 1em;
        border: 1px solid #dddddd;
        outline: none;
        height: 4vh;
        margin-left: 6vw;
        background: #e4e4e4;
        text-align: left;
    }
    .head-input {
        color: #b6b7b9;
        outline: none;
            padding: 0px 6vw;
         background: #e4e4e4;
         border: 0px;
   }
    .icon-absolute {
     position: absolute;
    }
    .crumb {
            padding: 0 .2rem 0 .45rem;
            display: block;
            overflow: hidden;
            font-size: 1rem;
            max-height: 4.2rem;
    }
    .crumb li {
            display: block;
            float: left;
            margin: 0 .85rem .5rem 0;
            display: block;
            padding: 0 .3rem;
            line-height: 1.55rem;
            border-radius: .15rem;
            color: #555a65;
            font-weight: bold;
            font-size: .85rem;
    }
    .list {
        display: block;
        margin: 0 auto;
    }
    .product {
            background-color: white;
    padding: .25rem 0 0 .25rem;
    position: relative;
    overflow: hidden;
    }
    .ablock {
            display: block;
    overflow: hidden;
    }
    .ablock img {
        width: 5.2rem;
    height: auto;
    position: absolute;
    top: .25rem;
    left: .25rem;
    }
    .common {
        display: block;
    }
    .common ul {
        overflow: hidden;
    }
    .common ul li {
        float: left;
        width: 20%;
    }
    .common ul li a {
            display: block;
            text-align: center;
            color: #777f86;
            font-size: 1rem;
    }
    .common ul li .redfont {
        color: red;
    }
    .detail {
        margin-left: 6.2rem;
        height: 6.45rem;
        border-bottom: 1px solid #e4e4e4;
        padding: 0 .25rem .4rem .5rem;
    }
    .table {
            display: block;
    width: 100%;
    height: 100%;
    }
    .cell {
            display: block;
    vertical-align: top;
    font-size: 0;
    position: relative;
    }
    .name {
            display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    height: 2rem;
    line-height: 1rem;
    color: #444;
    font-size: .8rem;
    margin:  0 0 .1rem 0;
    }
    .author {
        display: block;
    color: #999;
    font-size: .75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    height: .7rem;
    line-height: .7rem;
    margin:  0 0 .2rem 0;
    }
    .lab {
display: block;
    overflow: hidden;
    height: .9rem;
    }
    .lab_common {
    line-height: .6rem;
    font-size: .6rem;
        float: left;
    border: 1px solid #f2303c;
    padding: 0 2px;
    padding-top: 1px;
    box-sizing: border-box;
    margin-right: 0.125rem;
    font-size: 0.416rem;
    color: #f2303c;
    border-radius: 2px;
    }
    .price_con {
            margin: .1rem 0 0 0;
    }
    .now_price {
         color: #ff463c;
    font-size: .8rem;
    line-height: .8rem;
  
    }
    .ori_price {
        color: #a1a1a1;
    font-size: .75rem;
    text-decoration: line-through;
    padding-left: .3rem;
            
    }
    .discount {
color: #a1a1a1;
    font-size: .65rem;
    padding-left: .3rem;
    padding-right: .3rem;
    }
    .auto_fixed {
            display: block;
    font-size: 0;
    width: 100%;
    overflow: hidden;
    margin-top: .1rem;
    }
    .auto_fixed em {
            color: #999;
            font-size: .55rem;
            float: left;
            line-height: .7rem;
    }
    .white_padding {
        width: 100%;
        position: relative;
        bottom: 0;
        height: 8vh;
    }
</style>
