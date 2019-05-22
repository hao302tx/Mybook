<template>
    <div>
        <router-link class="col-xs-4" v-for="(single,index) in showList(showTitle)" :key="index" :to="{path:'/category?',query:{name:single}}">{{single}}</router-link>
        <span class="col-xs-4" v-if="bookShowAll" @click.stop="showAll = !showAll">{{word}}</span>
    </div>
</template>
<script> 
import '../../../static/css/reset.css'
export default {
    data () {
        return {
            bookShow :true,
            IndexShow : 0,
            listShow : false,
            showAll : false,
        }
    },
    props : {
        showTitle:Array,
    },
    methods : {
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
            } else {
                return this.bookShow = false;
            }
        },
    },
    computed : {
         word () {
            if(this.showAll == true) {
                return '收起';
            } else {
                return '展开'
            }  
        },
    },
    
    
    
}
</script>


<style>
    
</style>
