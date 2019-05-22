import Vue from 'vue'
import Guide from '../componments/Guide/Guide.vue'
import Search from '../componments/Search/Search.vue'
import Order from '../componments/Order/Order.vue'
import Person from '../componments/Person/Person.vue'
import Msite from '../componments/Msite/Msite.vue'
import VueRouter from 'vue-router'
import Login from  '../componments/Login/Login.vue'
import Register from  '../componments/Register/Register.vue'
import Category from  '../componments/Category/Category.vue'
import Product from  '../componments/Product/Product.vue'
import ProductGoods from  '../pages/ProductGoods/ProductGoods.vue'
import ProductComment from  '../pages/ProductComment/ProductComment.vue'
import Confirm from  '../componments/Confirm/Confirm.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: '图书导航',
      component: Msite,
      meta:{
        GuideShow:true
    }
  },
  {
    path: '/home',
    name: '图书导航',
    component: Msite,
    meta:{
      GuideShow:true
  }
},
    {
      path: '/search',
      name: '图书搜索',
      component:Search,
      meta: {
        GuideShow:true
      },
      
    },
    {
      path: '/order',
      name: '图书订单',
      component:Order,
      
    },
    {
      path: '/person',
      name: '个人信息',
      component:Person,
      meta: {
        GuideShow:true
      }
    },
    {
      path:'/login',
      name: '登陆/注册',
      component:Login
    },
    {
      path:'/register',
      name:'注册',
      component:Register
    },
    {
      path:'/category',
      name:'分类',
      component:Category,
      meta: {
        GuideShow:true
      },
    },
    {
      path:'/product',
      name:'商品',
      component:Product,
      meta: {
        GuideShow:false
      },
      children : [
        {
          path:'/product/goods',
          component:ProductGoods
        },
        {
          path:'/product/comment',
          component:ProductComment
        },
        {   
          path: '',
          redirect: '/product/goods',
        }
      ]
    },
    {
      path:'/confirm',
      component:Confirm,
      meta :{
        GuideShow:false
      }
    }
    
  ]
})
