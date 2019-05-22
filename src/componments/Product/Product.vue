<template>
    <div>
        <Tiphead>
            <ul class="head">
                <li><router-link to='/product/goods'>商品</router-link></li>
                <li><router-link to='/product/comment'>评论</router-link></li>
            </ul>
        </Tiphead>
        <router-view></router-view>
    </div>
</template>

<script>
import Tiphead from '../../pages/Tiphead/Tiphead.vue'
export default {
    components : {
        Tiphead,
    },
    computed : {
      
    }
}
</script>

<style>
    .head {
        display: flex;
        justify-content: space-around;
    }
</style>
