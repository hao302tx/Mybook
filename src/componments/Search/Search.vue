<template>
    <div>
       <Tiphead>
           <slot>
               <div class="div-input">
                        <svg t="1555675821908" class="icon icon-absolute" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1334" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><defs></defs><path d="M422.1 211.2c-117.6 19-202.9 119.2-202.9 238.3 0 10.3 0.8 21.1 2.7 34 1.4 10.1 10.1 17.4 20 17.4 0.9 0 1.9-0.1 2.8-0.2 11-1.6 18.7-11.8 17.2-22.8s-2.3-20-2.3-28.4c0-99.2 71.1-182.6 169-198.4 11-1.8 18.5-12.1 16.7-23.1-1.8-11.1-12.3-18.7-23.2-16.8zM921 887L692.2 658.2c53.8-61.6 83.4-139.3 83.4-221.8 0-186.4-151.6-338-338-338s-338 151.6-338 338 151.6 338 338 338c81.8 0 159-29.1 220.3-82l228.8 228.8c4.7 4.7 10.9 7.1 17.1 7.1s12.4-2.4 17.1-7.1c9.5-9.4 9.5-24.7 0.1-34.2zM643 641.8c-54.9 54.9-127.8 85.1-205.4 85.1-160.2 0-290.4-130.3-290.4-290.4 0-160.1 130.3-290.4 290.4-290.4 160.1 0 290.4 130.3 290.4 290.4 0.1 77.5-30.2 150.4-85 205.3z" p-id="1335"></path></svg>
                        <input type="text" class="head-input" placeholder="搜索商品/店铺/种类">
                        <span style="   position: absolute;color: grey; top: 1.1rem;right: 4rem;" >搜索</span>
                <section></section>
               </div>
           </slot>
       </Tiphead>
       <div class="clearFloat">
            <ul class="ul-contain">
                <li class="option-contain"  v-for="(item,index) in bookArr" :key="index" @click="giveIndex(index)" :class="[(IndexShow == index) ? 'activeOption' : '']" >
                    <section class="left-contain">{{item.listname}}</section> 
                </li>
            </ul> 
            <div class="Bborder b-head">
            <div class="clearFloat">
            <section class="head-sec" style="border-right :solid #eff4fa 7px">
                <h3>进入当当书城</h3>
                <svg t="1552316576399" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2557" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M512 2.373117C230.785632 2.373117 2.966396 230.192352 2.966396 511.406721S230.785632 1020.440324 512 1020.440324s509.033604-227.819235 509.033604-509.033603S793.214368 2.373117 512 2.373117z m259.856315 537.511008L695.91657 617.010429c-1.186559 1.186559-3.559676 3.559676-5.932792 4.746234L457.418308 853.135574a39.393743 39.393743 0 0 1-55.76825 0l-77.126304-77.126304a39.393743 39.393743 0 0 1 0-55.76825l208.834299-208.834299L325.710313 302.572422a39.393743 39.393743 0 0 1 0-55.768251l77.126303-77.126303c15.425261-15.425261 40.34299-15.425261 55.768251 0L693.543453 404.616454c1.186559 1.186559 2.373117 1.186559 2.373117 2.373117l77.126304 77.126304c3.559676 3.559676 7.119351 8.30591 8.305909 13.052144 4.746234 14.238702 2.373117 30.850521-9.492468 42.716106z" p-id="2558" fill="#2c2c2c"></path></svg>
                <span>低价低至1.9折</span>
            </section>
            <section class="head-sec">      
                <h3>进入童书馆</h3>
                <svg t="1552316576399" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2557" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M512 2.373117C230.785632 2.373117 2.966396 230.192352 2.966396 511.406721S230.785632 1020.440324 512 1020.440324s509.033604-227.819235 509.033604-509.033603S793.214368 2.373117 512 2.373117z m259.856315 537.511008L695.91657 617.010429c-1.186559 1.186559-3.559676 3.559676-5.932792 4.746234L457.418308 853.135574a39.393743 39.393743 0 0 1-55.76825 0l-77.126304-77.126304a39.393743 39.393743 0 0 1 0-55.76825l208.834299-208.834299L325.710313 302.572422a39.393743 39.393743 0 0 1 0-55.768251l77.126303-77.126303c15.425261-15.425261 40.34299-15.425261 55.768251 0L693.543453 404.616454c1.186559 1.186559 2.373117 1.186559 2.373117 2.373117l77.126304 77.126304c3.559676 3.559676 7.119351 8.30591 8.305909 13.052144 4.746234 14.238702 2.373117 30.850521-9.492468 42.716106z" p-id="2558" fill="#2c2c2c"></path></svg>      
                <span>精选儿童读物</span>
            </section>  
            </div>
             <ul>
                <li v-for="item in bookArr" :key="item.Id" v-show="firstShow(item.Id)">
                    <ul class="book-content">
                        <li class="container" v-for="arr in item.tags" :key="arr.Id">
                            <h5>榜单
                            <span class="book-logo">
                            <span class="book-font">畅销榜</span>
                            <svg t="1553064531269" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2543" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><defs></defs><path d="M246.109091 1014.690909c-13.963636-13.963636-13.963636-41.890909 0-55.854545L692.945455 512 246.109091 65.163636C232.145455 51.2 232.145455 23.272727 246.109091 9.309091c13.963636-13.963636 41.890909-13.963636 55.854545 0l479.418182 474.763636c13.963636 13.963636 13.963636 41.890909 0 55.854546L301.963636 1014.690909c-9.309091 4.654545-18.618182 9.309091-27.927272 9.309091s-23.272727-4.654545-27.927273-9.309091z" p-id="2544"></path></svg>
                            </span>
                            </h5>
                            <div class="row href-content" >
                                <Book :showTitle = "arr.list"></Book>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
       </div>

    </div>
</template>

<script>
import '../../../static/css/reset.css'
import Book from '../../pages/Book/Book.vue'
import Tiphead from '../../pages/Tiphead/Tiphead.vue'
export default {
    data () {
        return {
            bookShow :true,
            IndexShow : 0,
            listShow : false,
            showAll : false,
            showTitle: "",
            bookArr : [
                {
                    listname:'图书',
                    Id:0,
                    tags : [
                        {
                            name:'小说',
                            Id:0,
                            list:["社会","情感","世界名著","历史","侦探","儿童","文学","奇幻","学术"]
                        },
                        {
                            name:'童书',
                            Id:1,
                            list:["社会","情感","世界名著","历史","侦探","儿童","文学","奇幻","学术"]
                        }
                    ]
                },
                {
                    listname:'电子书',
                     Id:1,
                    tags : [
                        {
                            name:'电子书榜单',
                            Id:0,
                            list:["畅销榜","新书榜"]
                        }
                    ]
                }
            ],
        }
    },
    components : {
        Book,
        Tiphead
    },
   methods : {
      giveIndex (index) {
          this.IndexShow = index;
      },
      firstShow (id) {
            if(this.IndexShow == id) {
                return true;
            } else {
                return false;
            }
        },
        showList (arr) {
            let pushArr = [];
            let bookS = arr
            if(this.bookShow) {
                if(!this.showAll) {
                for(let i = 0 ; i < 5; i++) {
                    pushArr.push(arr[i])
                }
                return pushArr
            } else {
                pushArr = arr;
                return arr;
            }
        } else {
            return arr;
        }
        },
        bookShowAll (arr) {
            if(arr.length >= 6) {
                this.bookShow = true;
            }
        },
    },
    computed : {
        
    }
   
   
}
</script>

<style>
    html{
        font-size: 16px;
    }
    .clearFloat {
        overflow: hidden;
    }
   .S-head {
       position: fixed;
       width: 100%;
       height: 30px;
       
       background: white;
   }
   .S-head input {
       width: 90%;
    border-radius: 1em;
    border: 1px solid #dddddd;
    margin-top: 5px;
   }
   .S-head svg {
       margin: -7px -1px;
   }
   .replace-head {
       position: relative;
       width: 100%;
       height: 30px;
   }
   
   .ul-contain {
        width: 25%;
        height: 100vh;
        float: left;
           border-right: solid  #eff4fa 7px;
      
    }
    .option-contain {
        height: 50px;
        color: black;
    }
    .left-contain {
     padding: 10px;
     text-align: center;
     font-family: cursive;
     font-size: 110%;
     
    }
    .right-book {
    width: 75%;
    height: 100vh;
    float: right;
    }
    .container .book-font{
        font-weight: 100;
        font-size: 90%;
    }
    .Bborder {
        border-top: solid  #eff4fa 7px;
        
    }
    .b-head {
        float: left;
        width: 75%;
        height: 100%;
       
    }
    .head-sec {
        width: 50%;
        height: 100%;
        float: left;
        border-bottom: 7px solid rgb(239, 244, 250);
        padding: 0 0 1vh 0;
        
    }
    .head-sec h3 {
        font-size: 130%;
        font-weight: bold;
        color: black;
        margin-left: 15px
    }
    .head-sec span {
        margin-left: 15px;
       
    color: rgba(36, 92, 92, 0.432);
        font-size: 90%;
    }
    .head-sec svg {
        float: right;
    }
    .book-content h5{
        margin: 15px;
        font-weight: bold;
        font-size: 110%;
        text-align: left;
    }
    .book-logo {
        float: right;
    }
     .href-content {
         border-bottom: solid rgb(221, 219, 219) 7px;
         padding: 10px;
         font-size: 100%;
         font-family: cursive;
     }
    .href-content span{
        padding: 5px;
        text-align: center;
        border: dashed 1px #dddddd;
    }
    .activeOption {
        background: rgb(239, 244, 250);
        color: red;
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
            color: black;
    padding: 0px 6vw;
    background: #e4e4e4;
    border: 0px;
    outline: none;
   }
    .icon-absolute {
     position: absolute;
    }
    
</style>

