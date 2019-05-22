<template>
    <div>
        <div class="navMsite">
            <span style="float: left;margin-top: .5rem;" @click="$router.replace('/search')"><svg t="1551623767061" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2382" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M46.545455 134.981818h148.945454v69.818182H46.545455zM316.509091 134.981818H977.454545v69.818182H316.509091zM46.545455 479.418182h148.945454v69.818182H46.545455zM316.509091 479.418182H977.454545v69.818182H316.509091zM46.545455 819.2h148.945454v69.818182H46.545455zM316.509091 819.2H977.454545v69.818182H316.509091z" p-id="2383"></path></svg></span>
            <span class="MsiteSearch"><input type="text"></span>
            <span style="float:right"><svg t="1551624032080" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4068" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><defs></defs><path d="M486.4 682.666667c4.266667 0 4.266667 0 0 0H725.333333c46.933333 0 85.333333-38.4 85.333334-85.333334V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333H298.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v256c0 46.933333 38.4 85.333333 85.333334 85.333334h21.333333c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333333H298.666667c-72.533333 0-128-55.466667-128-128V341.333333c0-72.533333 55.466667-128 128-128h426.666666c72.533333 0 128 55.466667 128 128v256c0 72.533333-55.466667 128-128 128h-230.4l-166.4 81.066667c-8.533333 4.266667-21.333333 0-29.866666-8.533333-4.266667-8.533333 0-21.333333 8.533333-29.866667l170.666667-85.333333h8.533333z" p-id="4069"></path><path d="M341.333333 469.333333m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z" p-id="4070"></path><path d="M512 469.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" p-id="4071"></path><path d="M682.666667 469.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z" p-id="4072"></path></svg></span>
        </div>
        <div class="picContainer">
            <ul class="picShow">
                <li v-for="(item,index) in items" :key="index" v-show="index === mark">
                    <img :src="'../../../static/Msiteimg/' + item + '.jpg'" alt="">
                </li> 
            </ul>
            <ul class="picBtn">
                <li v-for="(item,index) in items" :key="index" :class="{'chooseLi' : index === mark}"> </li>
            </ul>
        </div>
        <div class="picContainer">
            <img class="specialPic" src="../../../static/Msiteimg/06.jpg" alt="">
        </div>
        <Shoplist></Shoplist>
        <div class="blank"></div>
        <div id="rollContainer">
            <div>
                <svg t="1552200214992" class="icon" style="margin:0 5px 0 10px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2829" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48"><defs></defs><path d="M925.98784 275.4304a29.56288 29.56288 0 0 1 29.56288-29.568 29.568 29.568 0 0 0-29.56288-29.568H364.13952v591.4112h561.84832a29.568 29.568 0 0 0 29.56288-29.56288c-16.3328 0-29.56288-13.24032-29.56288-29.568s13.23008-29.568 29.56288-29.568V659.8656a29.56288 29.56288 0 0 1 0-59.13088v-59.15648a29.56288 29.56288 0 1 1 0-59.13088V423.28576a29.55776 29.55776 0 0 1-29.55264-29.55776 29.55776 29.55776 0 0 1 29.55264-29.57824V305.00352a29.56288 29.56288 0 0 1-29.56288-29.57312z m-160.29696 310.67136h-84.66944v63.49824a21.17632 21.17632 0 0 1-42.3424 0v-63.49824h-84.66944a21.17632 21.17632 0 0 1 0-42.3424h84.66944v-42.32704h-84.66944a21.17632 21.17632 0 0 1-21.1712-21.16608 21.17632 21.17632 0 0 1 21.1712-21.16608h75.90912l-69.72928-69.6832a21.19168 21.19168 0 1 1 29.97248-29.97248l69.67808 69.72416 69.67808-69.72416a21.19168 21.19168 0 1 1 29.97248 29.97248l-69.72416 69.6832h75.904a21.1712 21.1712 0 0 1 0 42.33216H681.0112v42.33728h84.67968v-0.01024c11.68896 0 21.16096 9.48224 21.16096 21.1712s-9.472 21.1712-21.16096 21.1712zM305.00352 807.71072h-207.0016a29.568 29.568 0 0 1-29.56288-29.568v-207.0016c32.66048 0.01024 59.15648-26.44992 59.16672-59.1104 0.01024-32.6656-26.44992-59.15648-59.12064-59.17184h-0.04608V245.8624a29.568 29.568 0 0 1 29.56288-29.568h207.0016v591.41632z" fill="#d81e06" p-id="2830"></path></svg>
                <strong>促销</strong>
                <span>|</span>
                <div class="rollText">
                    <div style="width:100%;height:90px;" id="roll" :style="{'margin-top' : offHeight}">
                    <p ref="rollContain" v-for="(rolltext,index) in rolltexts" :key="index">{{rolltext}}</p>
                    </div>
                </div>
            </div>
             <div class="blank"></div>
        </div>
        <Shopgoods></Shopgoods>
        <div class="fillFooter"></div>
    </div>
</template>


<script>
import '../../../static/css/reset.css'
import Shoplist from '../Shoplist/Shoplist.vue'
import Shopgoods from '../Shopgoods/Shopgoods.vue'
export default {
    components : {
        Shoplist,
        Shopgoods,
    },
    data () {
        return {
            picShow: true,
            items:['01','02','03','04'],
            mark : 0,
            rolltexts : ['8折优惠1','30万图书，5折封顶2','精品图书，在线1.9折3'],
            off :0,
            

        }
    },
    methods : {
       autoPlay() {
           this.mark ++;
           if(this.mark == 3) {
               this.mark = 0;
           }
       },
       play() {
           setInterval(this.autoPlay,2500)
       },
       change(i) {
           this.mark = i;
       },
     
    //    autorollPlay() {
    //       if(this.offset == this.offHeight) {
    //           this.offset = 0;
    //       }
    //       $("#roll").css({
    //           "margin-top" : "- + 'this.offset' + px" 
    //       })
    //       this.offset ++;
    //    },
       rollPlay () {
           this.rolltexts.push(this.rolltexts[0]);
           
       },
      

    },
    created () {
        this.play(),
        this.rollPlay()
    },
    mounted () {
        const that = this;
        const timer = setInterval(function() {
          if(that.off == document.getElementById("roll").offsetHeight) {
                that.off = 0;
            }
            that.off ++;
        },50);
          this.$once('hook:beforeDestroy', () => {            
             clearInterval(timer);                                    
          })
    },
   

   
    computed : {
        offHeight () {
            return -this.off + 'px';
        }
    },
    watch : {
        off(value) {
            this.offHeight;
        }
    }
   

}
</script>

<style>
    .fillFooter {
        position: relative;
        width: 100%;
        height: 50px;
        bottom: 0;
       

    }
    .navMsite{
        margin: 10px;
        
    }
    .MsiteSearch{
        margin: 0 .6rem;
    }
    .MsiteSearch input {
    height: 4vh;
    width: 80%;
    border: 1px #dddddd solid;
    border-radius: 1em;
    }
    .picContainer  {
        position: relative;
        overflow: hidden;
        z-index: 1;
        width: 100%;
        height: 120px;
        border: solid #333333 1px;

    }
    .picShow {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 120px;
    }
    .picShow img {
        float: left;
         width:100%; 
         height:120px;
    }
    .picBtn {
        position: absolute;
        z-index: 2;
        left: 40%;
        bottom: -6%;
    }
    .picBtn li {
        float: left;
        width: 10px;
        height: 10px;
       
        border-radius: 100%;
        margin: 0 4px;
    }
    .chooseLi {
        background: red;
    }
    .specialPic {
        width: 100%;
        height: 120px;
    }
    .blank {
        width: 100%;
        height: 10px;
        background: #ddddddda;
        position: relative;
    
    }
    #rollContainer >div{
        display: flex;
        align-items:center;
    }
    .rollText {
        height: 18px;
        overflow: hidden;
        margin: 0 0 0 10px;
    }
</style>
