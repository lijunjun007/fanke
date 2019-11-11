<template>
    <div>
       <!-- header头部 -->
       <div id="header">
           <!-- header头部  登录/注册--> 
           <all-header></all-header>
           <!-- 头部第二部分：搜索栏/购物车/导航栏 -->
          <all-bar></all-bar>
          </div>
   <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item trigger="click"  v-for="(item,i) of 6" :key="i">
        <img :src="'../../static/img/index/banner'+(i+1)+'.png'" alt="">
        <!-- 轮播图最后一张始终不出来:已解决 -->
      </el-carousel-item>
    </el-carousel>
<!--********* 左侧固定导航栏 锚点跳转 ********-->
<ul class="fix_nav list-unstyled" id="fix_nav">
    <li @click="jump('sytj')"><a href="javacript:;">首页推荐</a></li>
    <li @click="jump('ssjx')"><a href="javacript:;">时尚精选</a></li>
    <li @click="jump('nzcl1')"><a href="javacript:;">女装潮流</a></li>
    <li @click="jump('nzcl2')"><a href="javacript:;">男装潮流</a></li>
</ul>
<!--********* 点击按钮 滚动到页面顶部********-->
<button @click="jump('header')" class="fixedRight"><img src="../../static/img/index/gotop.png" alt=""></button>
<div class="container">
    <!-- 新特卖每日早10晚8上新 -->
<div class="tm">
    <div class="order" id="sytj">
        <span class="line"></span>
        <span class="text">
            <span>新特卖</span>每日早10晚8上新
        </span>
        <span class="line"></span>
    </div>
    <p>TODAY'S DEALS BRAND</p>
</div>
<!-- *********图片栏 楼层1 每日推荐****** -->
<div class="mk1">
        <!-- 第一张图片 -->
        <div @click="toProduct">
            <div>
                <!-- <div class="zz">年后</div> -->
                <img src="../../static/img/index/tm1.jpg" alt="">
                <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
            </div>
        </div>
        <!-- 第二张图片 -->
        <div>
            <div>
                    <img src="../../static/img/index/tm2.jpg" alt="">
                    <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                </div>
            </div>
        <!-- 第三张图片 -->
        <div>
                <div>
                        <img src="../../static/img/index/tm3.jpg" alt="">
                        <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                    </div>
                </div>
        <!-- 第四张图片 -->
        <div>
                <div>
                        <img src="../../static/img/index/tm4.jpg" alt="">
                        <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                        </div>
                </div>
</div>
<!-- *********图片栏 楼层2 时尚精选****** -->
<hr>
<p class="floor_title"><span id="ssjx">时尚精选</span>WOMEN FASHION</p>
<div class="mk1">
        <!-- 第一张图片 -->
        <div>
            <div>
                <!-- <div class="zz">年后</div> -->
                <img src="../../static/img/index/ssjx1.png" alt="" >
                <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
            </div>
        </div>
        <!-- 第二张图片 -->
        <div>
            <div>
                    <img src="../../static/img/index/ssjx2.png" alt="">
                    <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                </div>
            </div>
        <!-- 第三张图片 -->
        <div>
                <div>
                        <img src="../../static/img/index/ssjx3.png" alt="">
                        <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                    </div>
                </div>
        <!-- 第四张图片 -->
        <div>
                <div>
                        <img src="../../static/img/index/ssjx4.png" alt="">
                        <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                        </div>
                </div>
    </div>
    <!-- *********图片栏 楼层2 女装潮流****** -->






<hr><!-- *********图片栏 楼层3 女装潮流****** -->
<p class="floor_title"><span id="nzcl1">女装潮流</span>WOMEN FASHION</p>
<div class="mk1">
        <!-- 第一张图片 -->
        <div>
            <div>
                <!-- <div class="zz">年后</div> -->
                <img src="../../static/img/index/nzcl1.png" alt="" >
                <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
            </div>
        </div>
        <!-- 第二张图片 -->
        <div>
            <div>
                    <img src="../../static/img/index/nzcl2.png" alt=""  >
                    <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                </div>
            </div>
        <!-- 第三张图片 -->
        <div>
                <div>
                        <img src="../../static/img/index/nzcl3.png" alt=""  >
                        <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                    </div>
                </div>
        <!-- 第四张图片 -->
        <div>
                <div>
                        <img src="../../static/img/index/nzcl4.png" alt=""  >
                        <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                        </div>
                </div>
    </div>
     <!-- *********图片栏 楼层3 男装潮流****** -->
<hr><!-- *********图片栏 楼层4 男装潮流****** -->
<p class="floor_title"><span id="nzcl2">男装潮流</span>WOMEN FASHION</p>
<div class="mk1">
        <!-- 第一张图片 -->
        <div>
            <div>
                <!-- <div class="zz">年后</div> -->
                <img src="../../static/img/index/nanzcl1.png" alt="" >
                <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
            </div>
        </div>
        <!-- 第二张图片 -->
        <div>
            <div>
                    <img src="../../static/img/index/nanzcl2.png" alt=""  >
                    <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                </div>
            </div>
        <!-- 第三张图片 -->
        <div>
                <div>
                        <img src="../../static/img/index/nanzcl3.png" alt=""  >
                        <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                    </div>
                </div>
        <!-- 第四张图片 -->
        <div>
                <div>
                        <img src="../../static/img/index/nanzcl4.png" alt=""  >
                        <p class="mk_text">0.8折起 BUBUBOSFLFJA 女装特卖</p>
                        </div>
                </div>
    </div>
</div>
<!-- footer 顶部 -->
<all-footer></all-footer>
</div>
</template>
<script>
import commons from '../assets/commons'
export default {
    mounted(){
    // var url=location.pathname;
    // console.log(url)
    var wscroll=this.wscroll;
     window.addEventListener('scroll',wscroll)
    },
    data(){
        return{
            a:1,
        }
},
    watch:{
/* ********************************* */
       

       
    },
    methods:{
    jump(id){
       commons.jump(id);
    },
    toProduct(){
        this.$router.push("/product");
    },
    //页面滚动函数
    wscroll(){
    var fix_nav=document.getElementById("fix_nav")
    var fix_nava=fix_nav.getElementsByTagName("li")
    // console.log(fix_nava);
    //设置变量x来控制固定导航栏4个a标签谁激活
    var x=-1;
    var scrollTop=document.body.scrollTop
                    ||document.documentElement.scrollTop;
                    // console.log(scrollTop)
                    if(scrollTop<622){
                        fix_nav.style.display="none";
                    }
                    else if(scrollTop>622){
                        fix_nav.style.display="block";
                        if(scrollTop<1422){x=0;}
                        else if(scrollTop<2204){x=1}
                        else if(scrollTop<2990){x=2}
                        else{x=3}
                    }
                    for(var i=0;i<fix_nava.length;i++){
                        if(i!=x){fix_nava[i].style.background="#918888"}
                        else{fix_nava[i].style.background="red"}
                    }
        
               
    },
}
}
</script>
<style scoped>
/*通用样式清零*/
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
/*-----------------------轮播图-------------*/
.el-carousel img{
    height:400px;
}

/*-------------左侧固定导航栏 -----------------*/
ul.fix_nav{
    border: 2px solid yellow;
    position: fixed;
    top: 50%;
    margin-top: -100px;
    left: 20px;
    font:12px simHei;
    z-index: 2;
    display: none;

}
.fix_nav li {
    width:44px;
    height: 48px;
    background:#918888;
    text-align: center;
    padding: 10px 5px;
    
}
.fix_nav li+li{
    border-top: 1px solid #fff;
}
.fix_nav li a{
    color: #fff;
    text-decoration:none;
}
/*--------------回到顶部----------------- */
.fixedRight{
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 20;
}
/*-----------------------特卖---------------*/
.tm>.order{
    height: 60px;
    line-height:60px;
    text-align:center;
    margin-top:25px;
    font-size: 28px;
}
.tm>.order>.line{
    display: inline-block;
    width: 30%;
    border-top: 1px solid #ccc;
}
.tm>.order>.text{
    vertical-align:middle;
}
.order>.text span{font-weight: bold}
.tm>p{color:#DADADA;text-align: center;font-size: 12px;}
/* *********图片栏 楼层1 时尚精选****** */
.mk1{
    display: flex;
    flex-wrap: wrap;
}
.mk1>div{
    width: 50%;
}
.mk1>div>div{
    position: relative;
    /* background-color: #000; */
    overflow: hidden;
}
.mk1>div>div>img{
    width:571px;
    height:350px;
    margin-bottom:20px;
    transition: all 2s;
}
.mk1>div>div>img:hover{
    opacity: .95;
    transform: scale(1.05); /*图片放大缩小*/
}
.mk1>div>div>p{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top:-12px;
    margin-left: -117px;
    font-size: 18px;
    color: #fff;
    opacity:0;
    transition: all 1s;
}
.mk1>div>div:hover p{
    opacity: 1;   /*文字显示隐藏*/
} 
/*每楼的标题文字*/
.floor_title{
    font-size: 16px;
    color: #666;
    text-align: left;
}
.floor_title>span{
    font-size: 35px;
    color: #3e3e3e;
}

/**********footer****************/

/**bootstrap框架bug调节 */
.d-flex{
    display: flex;
}
 .margT{
     margin-top: 30px;
 }
 .container{
     width: 1200px;
     margin: 0 auto;
 }
</style>