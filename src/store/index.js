import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
Vue.use(Vuex);

const state = {  //设置全局访问的state对象
    shoplist: [],
    shopcar:[],
    goods:[],
}
const getters = {  //用来实时监听state对象变化，然后返回
    shopGet(state) {
        return state.shoplist;
    },
    carGet(state) {
        return state.shopcar;
    },
    money (state) {
        let money = 0;
        state.goods.forEach(item => {
            money += item.price*item.num;
        })
        return money;
    }
}
const mutations = {
    Bookinfo(state,{shoplist}) {
        state.shoplist = shoplist;
        sessionStorage.setItem("shoplist",JSON.stringify(shoplist))
    },
    shopCarinfo(state,{shopcar}) {
        state.shopcar = shopcar;
        sessionStorage.setItem("shopcar",JSON.stringify(shopcar))
    },
    Addcar (state,{goods}) {
         let isHas = state.goods.some(item => {
             if(item.id == goods.id) {  
                 return true;
             } else {
                 return false;;
             }
         })
         if(!isHas) {
            
            state.goods.push(goods)
         }
    },
    Initcar(state,{goods}) {
        state.goods = goods;
    }
}
const actions = {
    setBookinfo (context,shoplist) {
        context.commit('Bookinfo',{shoplist});
    },
    // getBookinfo (context,shopid) {
    //     context.commit
    // }
    setShopcarinfo (context,shopcar) {
        context.commit('shopCarinfo',{shopcar})
    },
    Addshopcar (context,goods) {
        
        context.commit('Addcar',{goods})
    },
    Initshopcar (context) {
        setTimeout(() => {
            let result = JSON.parse(sessionStorage.goods || []);
            context.commit('Initcar',result)
        })
    }
} 
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});
