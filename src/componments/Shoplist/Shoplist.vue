<template>
    <div id="Shoplist">
        <ul class="shopContainer">
            <li v-for="(item,index) in items" :key="index">
                <div><img :src="'../../../static/Shoplistimg/' + item.src + '.jpg'" alt=""></div>
                <span>{{item.text}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import '../../../static/css/reset.css'
export default {
    data () {
        return {
            items : [
                {src: '01',text:'图书畅销'},
                {src: '02',text:'图书畅销'},
                {src: '03',text:'图书畅销'},
                {src: '04',text:'图书畅销'},
                {src: '05',text:'图书畅销'},
                {src: '06',text:'图书畅销'},
                {src: '07',text:'图书畅销'},
                {src: '08',text:'图书畅销'},
            ]
        }
    }
}
</script>
 <style>
 #Shoplist {
     margin: 0;
     padding: 0;
 }
    .shopContainer {
    margin: 20px 0;
    width: 100%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
    }
    .shopContainer li {
        padding: 10px;
    }
    .shopContainer div {
        display: flex;
        
    }
    .shopContainer img {
        width: 50px;
        height: 50px
    }
  
 </style>
 