<template>
    <div>
        <div>
            <section class="user_comment">
                <div class="user_info">
                    <img src="./img/header_1.jpg" alt="">
                    <span class="user_info_font">
                        <i>匿名用户</i>
                        <em>已购</em>
                    </span>
                    <div class="star">
                        <span class="red"></span>
                        <span class="red"></span>
                        <span class="red"></span>
                        <span class="red"></span>
                        <span class="red"></span>
                    </div>   
                </div>
                <div>
                    <p class="comment">
                        当当网购书让我第一次体验了什么是满意的售后服务，太强大了，这套书是儿子的最爱，也是一套值得收藏的好书。第一次发过来有质量问题的书已退还，当当网重新发过来这套书儿子太喜欢了!值得点的当当网
                    </p>
                </div>
                <div class="comment_time">
                    <span class="">2019-2-13 10:13</span>   
                </div>
            </section>
        </div>
    </div>
</template>

<style>
    html {
        font-size: 16px;
    }
    .user_comment {
        overflow: hidden;
    }
    .user_info {
        overflow: hidden;
    }
    .user_info img {
        float: left;
        display: block;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
    }
    .user_info_font {
        display: block;
        padding: .5rem 0;
        font-size: .85rem; 
        color: rgb(100,100,100);
        overflow: hidden;
        padding: .5rem;
        float: left;
    }
    .user_info_font em {
        color: red;
        border: 1px solid red;
        display: block;
        float: left;
        padding-left: .1rem;
    }
    .user_info_font i {
        float: left;
    }
    .star {
            float: right;
            padding-top: .4rem;
            padding-right: .5rem;

    }
    .star span {
        background: url(./img/stars1.png) no-repeat;
        background-size: 4rem;
        display: block;
        width: 1.4rem;
        height: 1.3rem;
        float: left;
    }
    .star .red {
        background-position: right;
    }
    .star .white {
        background-position: left;
    }
    .star_num {

    }
    .comment {
            text-indent: 1.8rem;
    padding-top: 1rem;
    font-size: .8rem;
    }
    .comment_time {
        overflow: hidden;
        float: right;
    }
    .comment_time span {
            display: block;
            float: left;
            height: .8rem;
            line-height: .8rem;
            font-size: .75rem;
            color: #c8c8c8;
    }
</style>
