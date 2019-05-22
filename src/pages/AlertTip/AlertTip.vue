<template>
    <div>
        <div id="alertTip">
            <svg t="1543925749959" class="icon" style="" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1243" xmlns:xlink="http://www.w3.org/1999/xlink" width="48.09375" height="48"><defs></defs><path d="M983.697248 313.039349a511.938765 511.938765 0 1 0 40.257615 198.947515 507.842787 507.842787 0 0 0-40.257615-198.947515z m-161.147486 508.369413A437.684531 437.684531 0 1 1 513.069349 74.185305a437.684531 437.684531 0 0 1 309.480413 747.223457z" p-id="1244"></path><path d="M513.420433 224.56622a56.114902 56.114902 0 0 0-55.997874 59.33317l17.554193 305.501462a38.677737 38.677737 0 0 0 77.238446 0l17.554193-305.501462a56.114902 56.114902 0 0 0-56.348958-59.33317z m0 471.09601a54.886108 54.886108 0 1 0 54.827594 54.886109 55.06165 55.06165 0 0 0-54.827594-54.886109z" p-id="1245"></path></svg>
            <div class="alertTitle">{{tipName}}不正确！</div>
            <div class="confirm" @click="closeTip">确认</div>
        </div>
    </div>
</template>
<script>
import '../../../static/css/reset.css'
export default {
    props : {
        tipName : String
    },
    methods : {
        closeTip () {
            //分发自定义事件
            this.$emit('closeTip');
        }
    }
}
</script>

<style>
    #alertTip  {
        position: fixed;
        width: 200px;

        border: 1px solid #dddddd;
        background: #ffffff;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-100%);
        border-radius: 10px;
        text-align: center;
    }
    #alertTip svg {
        
       
    }
    .alertTitle {
      
       
    }
    .confirm {
        position: relative;
    
        width: 100%;
        height: 25px;
        background: green;
        color: aliceblue;
        border-bottom-right-radius:10px;
        border-bottom-left-radius:10px;
    }
</style>