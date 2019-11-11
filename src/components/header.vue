<template>
  <!-- header头部  登录/注册--> 
           <div class="bg-header">
               <ul class="d-flex list-unstyled">
                   <li>您好，欢迎光临凡客诚品！</li>
                   <li>
                       <ul class="d-flex list-unstyled">
                           <li><router-link to="/reg">注册</router-link></li>
                           <li>丨</li>
                           <li><router-link to="/login">登录</router-link></li>
                           <li>丨</li>
                           <li><a href="">我的订单</a></li>
                       </ul>
                   </li>
                   <li><img src="../../static/img/index/header_laba.png" alt=""></li>
                   <li><a href="">网站公告</a></li>
                   <li class="wx_logo"><img src="../../static/img/index/header_weixin.png" alt="">
                    <img class="wx_erweima" src="../../static/img/index/weixinerweima.jpg" alt="">
                </li>
               </ul>
           </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.d-flex{
  display: flex;
  align-items: center;
}
/*header头部样式  上*/
div.bg-header{
    position: relative;
    height:38px;
    padding-right: 15px;
    font-size: 12px;
    line-height: 38px;
    background-color: #f7f7f7;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}
div.bg-header>ul{
    width: 431px;
    position: absolute;
    right:75px;
}
div.bg-header>ul>li{
    margin-right: 10px;
}
div.bg-header>ul a{
    text-decoration: none;
    color:#000;
}
div.bg-header>ul a:hover{
    color:#5D8BDC;
}
/*二维码图片定位和隐藏显示 */
.wx_logo{position: relative;}
.wx_logo img:hover+img{display: block}
.wx_erweima{
    position: absolute;
    display: none;
    top: 38px;
    left: 0px;
    margin-left: -146px;
    margin-top: -10px;
    z-index: 10;
}
</style>