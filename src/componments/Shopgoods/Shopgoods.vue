<template>
    <div>
        <div class="mainGoods">
            <h1>——全球最大中文图书城——</h1>
            <p  style="text-align:center;">
                <span>
                    xx书城
                    <svg t="1552316576399" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2557" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><defs></defs><path d="M512 2.373117C230.785632 2.373117 2.966396 230.192352 2.966396 511.406721S230.785632 1020.440324 512 1020.440324s509.033604-227.819235 509.033604-509.033603S793.214368 2.373117 512 2.373117z m259.856315 537.511008L695.91657 617.010429c-1.186559 1.186559-3.559676 3.559676-5.932792 4.746234L457.418308 853.135574a39.393743 39.393743 0 0 1-55.76825 0l-77.126304-77.126304a39.393743 39.393743 0 0 1 0-55.76825l208.834299-208.834299L325.710313 302.572422a39.393743 39.393743 0 0 1 0-55.768251l77.126303-77.126303c15.425261-15.425261 40.34299-15.425261 55.768251 0L693.543453 404.616454c1.186559 1.186559 2.373117 1.186559 2.373117 2.373117l77.126304 77.126304c3.559676 3.559676 7.119351 8.30591 8.305909 13.052144 4.746234 14.238702 2.373117 30.850521-9.492468 42.716106z" p-id="2558" fill="#2c2c2c"></path></svg>  
                </span>
                <span>
                   电子书
                    <svg t="1552316576399" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2557" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><defs></defs><path d="M512 2.373117C230.785632 2.373117 2.966396 230.192352 2.966396 511.406721S230.785632 1020.440324 512 1020.440324s509.033604-227.819235 509.033604-509.033603S793.214368 2.373117 512 2.373117z m259.856315 537.511008L695.91657 617.010429c-1.186559 1.186559-3.559676 3.559676-5.932792 4.746234L457.418308 853.135574a39.393743 39.393743 0 0 1-55.76825 0l-77.126304-77.126304a39.393743 39.393743 0 0 1 0-55.76825l208.834299-208.834299L325.710313 302.572422a39.393743 39.393743 0 0 1 0-55.768251l77.126303-77.126303c15.425261-15.425261 40.34299-15.425261 55.768251 0L693.543453 404.616454c1.186559 1.186559 2.373117 1.186559 2.373117 2.373117l77.126304 77.126304c3.559676 3.559676 7.119351 8.30591 8.305909 13.052144 4.746234 14.238702 2.373117 30.850521-9.492468 42.716106z" p-id="2558" fill="#2c2c2c"></path></svg>  
                </span>
            </p>
            <p><img src="./image/1.jpg" style="margin: 0 auto;width:100%" alt=""></p>
            <div class="container">
            <ul class="row bookList">
                <li class="col-xs-4" v-for="(item,index) in itemArr" :key="index">
                    <h3>{{item.name}}</h3>
                    <p>每满{{item.price}}</p>
                   <a href="javascript:;"><img :src="'../../../static/shopGoodsimg/b' + item.href + '.jpg'" alt=""></a>
                </li>
                
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            itemArr: [
                {name:"文学艺术",price:"150-50",href:"1"},
                {name:"电子书",price:"150-20",href:"2"},
                {name:"精选童话",price:"100-50",href:"3"},
                {name:"亲子/家教",price:"79-30",href:"4"},
                {name:"人文社科",price:"100-50",href:"5"},
                {name:"中小学教辅",price:"150-50",href:"6"},
                {name:"科技图书",price:"150-50",href:"7"},
                {name:"经济管理",price:"150-50",href:"8"},
                {name:"考试图书",price:"150-50",href:"9"},
            ]
        }
    }
}
</script>

 <style>
    .mainGoods {

    
    }
    .mainGoods h1 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 110%;
        text-align: center;
        color: #bb1212;
        font-weight:bold;
    }
    .bookList {

    }
    .bookList li {
        border: solid 1px #dddddd;
    }
    .bookList li h3 {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 120%;
        font-weight: bold;
        text-align: center;
    }
    .bookList li p {
        color: red;
        font-size:90%;
          text-align: center;
    }
    .bookList li img {
        width: 100px;
        height: 100px;
            margin-left: -10px;
    }
 </style>
 