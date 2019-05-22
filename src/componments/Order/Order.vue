<template>
    <div>
         <Tiphead>
            <slot>
              <span>购物车</span>
            </slot>
         </Tiphead>
         <div class="order" v-for="(item,index) in goods" :key="index">
                <input type="checkbox" class="c_checkbox fl" :checked="item.checked" @click="select(item)">
                <a href="javascript:;" class="order_pic fl">
                    <img :src="'../../../static/shopGoodsimg/b' + item.img + '.jpg'" alt="">
                </a>
                <div class="book_info">
                <p class="b_name">
                    <a href="javascript:;">
                        {{item.name}}
                    </a>
                </p>
                <p class="">
                    <span class="b_price">
                        ￥{{item.price}}
                    </span>
                    <span class="b_origin_price">
                        ￥{{ori_Price(item)}}
                    </span>
                </p>
                </div>
                <div class="count clearfix">
                     <span>x{{item.num}}</span>
                     <div class="show_number">
                        <div class="show_number_icon" @click="numberCount(item,-1)">-</div>
                        <span class="number">{{item.num}}</span>
                        <div class="show_number_icon" @click="numberCount(item,1)">+</div>
                     </div>
                 </div>
                  <div class="price_count">
                    <span class="price_count_font">满减减小计:</span>
                    <span class="price_count_price">￥{{(ori_Price(item)-item.price).toFixed(2)}}</span>
                </div>
         </div>
         
         <div class="Ofooter">
                 <a href="javascript:;" class="all_pick">
                     <input type="checkbox" class="c_checkbox fl" @click="Allcheck" :checked="isAllchecked">
                     <span>全选</span>
                 </a>
                 <div class="fr">
                     <a href="javascript:;" class="submit" @click="$router.replace('/confirm')">结算</a>
                 </div>
                 <div class="fr fin_price">
                     <span>合计</span>
                     <span class="fin_price_number">￥{{priceSum}}</span>
                 </div> 
         </div>
    </div>
</template>


<script>
import '../../../static/css/reset.css'
import Tiphead from '../../pages/Tiphead/Tiphead.vue'
import {mapState,mapActions} from 'vuex'
export default {
    components : {
        Tiphead,
    },
    data  () {
        return {
           booklist : [
               {
                   img: "1",
                   id:'0',
                   name:'三体',
                   price:98.00,
                   ori_price:110.00,
                   num:1,
               },
               {
                   img: "1",
                   id:'1',
                   name:'天龙八部',
                   price:50.00,
                   ori_price:76.00,
                   num:1,
               },
               {
                   img: "1",
                   id:'2',
                   name:'神雕侠侣',
                   price:45.00,
                   ori_price:68.00,
                   num:1,
               }
           ],
           isAllchecked:false,
           priceSum : 0,
           count: 1,
        }  
    },
    computed : {
       ...mapState([
           'goods'
       ]), 
       
    },
    methods : {
        ...mapActions([
           'Initshopcar'
       ]),
        select (item) {
            var that = this;
            if(typeof item.checked == 'undefined') {
                this.$set(item,"checked",true) //局部注册
            } else {
                item.checked = !item.checked; //状态取反
            }
          
            //判断每一个CheckBox是否选中，全选中让全选按钮选中
            var checkedCode = [];
            item.forEach(items => {
                if(items.checked == true) {
                    checkedCode.push(items.checked);
                }
            })
            if(item.length == checkedCode.length) {
                that.isAllchecked = true;
            } else { // 只要有一个checkbox不选中，让全选按钮不选中
                that.isAllchecked = false;
            }
            that.totalPrice();
        },
        numberCount (product,num) {
            if(num > 0) {
                product.num ++;
            } else {
                product.num --;
                if(product.num = 0) {
                    product.num = 0;
                }
            }
            this.totalPrice();
        },
        Allcheck () {
            var that = this;
            that.isAllchecked = !that.isAllchecked;
            
            that.forEach(item => {
                if(typeof item.checked == 'undefined') {
                    this.$set(item.gooods,"checked",that.isAllchecked) //局部注册
                } else {
                    item.checked = that.isAllchecked; //状态取反
                }
            }) 
            that.totalPrice(); 
        },
        totalPrice () {
            var that = this;
            that.priceSum = 0;
            that.forEach(item => {
                if(item.checked) {
                    that.priceSum += item.price * item.num
                }
            })
        },
        ori_Price(item) {
            return (item.price/item.zhekou*10).toFixed(2);
       }
    },
    created () {
        this.Initshopcar();
    }
}
</script>

<style>
    html {
        font-size: 16px;
    }
    a:focus,a:hover {
        color: white;
        text-decoration: none;
    }
    .order {
            overflow: hidden;
            width: 100%;
            background: #ffffff;
            padding-top: 2rem;
    }
    .order .c_checkbox {
        margin: 2em 0 0 0;
    }
    .c_checkbox{
        width: 20px;
        height: 20px;
        -webkit-appearance:none;
        outline: none;
        border: 1px yellow solid;
        border-radius: 100%;
      
    }
    .c_checkbox:checked {
        background: url("./img/checkbox.png") no-repeat center;
        background-size: 1.55rem;
    }
    .book_info {
            overflow: hidden;
            position: relative;
            margin-right: 0.55rem;
    }
    .fl {
        float: left;
    }
    .order_pic {
        display: block;
        width:25vw;
        margin: 1rem 1rem 0 1rem;
            height: 18vh;
    }
    .order_pic img {
        width: 100%;
    }
    .b_name a{
        font-size: 1.2rem;
        color: #323232;
    }
    .b_price {
        font-size: 1rem;
        color: red;
    }
    .b_origin_price {
        margin-left: 1rem;
        font-size: 0.85rem;
        color: #b8b8b8;
        text-decoration: line-through;
    }
    .clearfix::after {
        content: "";
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;

    }
    .count {
        overflow: hidden;
    }
    .show_number {
            float: right;
        width: 7rem;
        border: 1px solid #dddddd;
        display: flex;
        height: 2rem;
        justify-content: space-around;
        align-items: center;
    }
    .show_number_icon {
                font-size: 1rem;
            cursor: pointer;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 2rem;
    }
   
    .number {
        border-right: 1px solid #dddddd;
        padding: 1rem;
        border-left: 1px solid #dddddd;
        }
    .price_count {
        width: 100%;
        height: 5vh;
        /* margin-top: 3vh; */
        background: #fafafa;
          padding: 1vh 2vw 0 0vw;
        text-align: right;
        margin-top: 3vh;
    }
    .price_count_font {
        margin-right: 2vw;
    }
    .price_count_price {
        color: red
    }
    .Ofooter {
        position: fixed;
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
        background: white;
        height: 8vh;
    }
    .fr {
        float: right;
    }
    a {
            color: #787878;
    text-decoration: none;
    }
    .all_pick {
        display: block;
        padding: .75rem 0 0 .75rem;
        float: left;
        color: black;
        text-decoration: none;
        outline: none;
    }
    .all_pick span {
            font-size: 1.25rem;
            line-height: 1.75rem;
            margin-left: .45rem;
                outline: none;
                color: black;
     }
     .submit {
        text-decoration: none;
        height: 8vh;
        display: block;
        color: white;
        background: #FB4741;
        border: 1px solid red;
        padding: 1rem 2rem;
        /* padding: 1rem 1.25rem 1.25rem 1.25rem; */
        line-height: 1.5rem;
     }
     .fin_price {
             margin: 1rem 2rem;
            font-size: 1rem;
     }
     .fin_price span {
         color: black
     }
     .fin_price .fin_price_number {
         color:red;
     }
</style>
