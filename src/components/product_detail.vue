<template>
    <div>
        <all-header></all-header>
        <all-bar></all-bar>
    <!-- 内容部分，一直到footer -->
    <div class="section">
    <!-- **************导航栏 *************-->
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>女装</el-breadcrumb-item>
                <el-breadcrumb-item>大衣</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="title d-flex">
            <span>牛津纺&nbsp;手工面料&nbsp;圆领&nbsp;女</span>
            <div class="list">
                <el-breadcrumb separator="|">
                        <el-breadcrumb-item><a href="javascript:;" @click="jump('list2')">购买指南</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a @click="jump('list3')" href="javascript:;">模特搭配</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a @click="jump('list4')" href="javascript:;">版本工艺</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a @click="jump('list5')" href="javascript:;">设计细节</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="javascript:;">讨论</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="javascript:;">提问</a></el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
        </div>
        <hr>
        <!-- 商品详情栏：左：图片， 右：详情介绍 -->
        <div class="detail">
            <div class="img-content">
                <!-- 图片容器 -->
                <div class="supermask">
                    <!-- md 图片 -->
                    <div class="imgmd" :style="{'background-image':`url('../../static/img/product/md/md${i}.jpg')`}">
                        <!-- <img :src="'../../static/img/product/md/md'+i+'.jpg'" alt=""> -->
                            <div :style="stylemask" class="minidiv" :class="show?'d-show':'d-none'"></div>
                            <div class="lilili" @mouseenter="changeshow" @mouseleave="changeshow" @mousemove="mousemoved" >
                            </div>
                    </div>
                    <!-- lg大图片 -->
                    <div class="lgdiv" :class="show?'d-show':'d-none'" :style="{'background-image':`url('../../static/img/product/lg/lg${i}.jpg')`,'background-position':`${-400/226*parseInt(stylemask.left)}px ${-400/226*parseInt(stylemask.top)}px`}" >
                    </div>
                    <!-- sm小图片 -->
                    <div class="imgSm d-flex">
                        <img @click="move(1)" style="z-index:10;" src="../../static/img/product/previous.png" alt="">
                        <div class="contul">
                            <ul class="d-flex" :style="{marginLeft:70*moved+'px',}">
                                <li v-for="item in 7" :key="item" @mouseenter="change(item)"><img :src="'../../static/img/product/sm/sm'+item+'.jpg'" alt=""></li>
                            </ul>
                        </div>
                        <img @click="move(-1)" style="z-index:10;" src="../../static/img/product/next.png" alt="">
                    </div>
                </div>
            </div>
            <!-- 商品详情数据 -->
            <div class="show_detail">
                <div class="list1">售价：<span class="price">¥3699.00</span></div>
                <div class="list2">*退货补运费 *30天无忧退货 *48小时快速退款</div>
                <div class="list3">客服：联系客服<img src="../../static/img/product/kefuf.gif" alt=""></div>
                <div class="list4">颜色：<a href="">深蓝色</a><a href="">酒红色</a><a href="">墨绿色</a><a href="">咖啡色</a><a href="">粉色</a><a href="">淡黄色</a></div>
                <div class="list5">尺码：<a href="">XL</a><a href="">XXL</a><a href="">XXXL</a></div>
                <div class="list6">数量：<button>-</button><input type="text" value="1"><button>+</button></div>
                <div class="list7"><a href="">立即购买</a><a href=""><img src="../../static/img/product/gouwuche.png" alt="">加入购物车</a><a href=""><img src="../../static/img/product/shoucang.png" alt=""><br>收藏</a></div>
                <div class="list8"><img src="../../static/img/product/youhuitips.png" alt=""></div>
            </div>
        </div>

        <!-- 图片流水部分 -->
        <p class="streamtitle">为你推荐<span class="text1">大家都在看</span></p>
            <div class="stream">
                <ul class="d-flex" :style="{'marginLeft':t+'px'}" @mouseenter="switched()" @mouseleave="switched()">
                    <li><img src="../../static/img/product/lunbo1.png" alt="">
                    <p>凡客&nbsp;羊绒大衣&nbsp;女款&nbsp;冬季特惠</p>
                    </li>
                    <li><img src="../../static/img/product/lunbo2.png" alt="">
                    <p>凡客&nbsp;羊绒大衣&nbsp;女款&nbsp;冬季特惠</p>
                    </li>
                    <li><img src="../../static/img/product/lunbo3.png" alt="">
                    <p>凡客&nbsp;羊绒大衣&nbsp;女款&nbsp;冬季特惠</p>
                    </li>
                    <li><img src="../../static/img/product/lunbo4.png" alt="">
                    <p>凡客&nbsp;羊绒大衣&nbsp;女款&nbsp;冬季特惠</p>
                    </li>
                    <li><img src="../../static/img/product/lunbo1.png" alt="">
                    <p>凡客&nbsp;羊绒大衣&nbsp;女款&nbsp;冬季特惠</p>
                    </li>
                    <li><img src="../../static/img/product/lunbo2.png" alt="">
                    <p>凡客&nbsp;羊绒大衣&nbsp;女款&nbsp;冬季特惠</p>
                    </li>
                    <li><img src="../../static/img/product/lunbo3.png" alt="">
                    <p>凡客&nbsp;羊绒大衣&nbsp;女款&nbsp;冬季特惠</p>
                    </li>
                    <li><img src="../../static/img/product/lunbo4.png" alt="">
                    <p>凡客&nbsp;羊绒大衣&nbsp;女款&nbsp;冬季特惠</p>
                    </li>
                </ul>
            </div>
            <!-- 后面内容直接用图片代替，布局定位不在做，麻烦无技术 -->
            <img id="list2" src="../../static/img/product/img1.jpg" alt="">
            <img src="../../static/img/product/img2.jpg" alt="">
            <img src="../../static/img/product/img3.jpg" alt="">
            <img src="../../static/img/product/img4.jpg" alt="">
            <img src="../../static/img/product/img5.jpg" alt="">
            <img src="../../static/img/product/img6.jpg" alt="">
            <img id="list3" src="../../static/img/product/img7.jpg" alt="">
            <img src="../../static/img/product/img8.jpg" alt="">
            <img src="../../static/img/product/img9.jpg" alt="">
            <img src="../../static/img/product/img10.jpg" alt="">
            <img src="../../static/img/product/img11.jpg" alt="">
            <img src="../../static/img/product/img12.jpg" alt="">
            <img id="list4" src="../../static/img/product/img13.jpg" alt="">
            <img src="../../static/img/product/img14.jpg" alt="">
            <img src="../../static/img/product/img15.jpg" alt="">
            <img src="../../static/img/product/img16.jpg" alt="">
            <img id="list5" src="../../static/img/product/img17.jpg" alt="">
            <img src="../../static/img/product/img18.jpg" alt="">
            <img src="../../static/img/product/img19.jpg" alt="">
            <img src="../../static/img/product/img20.jpg" alt="">
            <img src="../../static/img/product/img21.jpg" alt="">
            <img src="../../static/img/product/img22.jpg" alt="">
            <img src="../../static/img/product/img23.png" alt="">
</div>
        <all-footer></all-footer>
</div>
</template>
<script>
import  commons from '../assets/commons'
export default {
    mounted(){
        this.moved=0;
        this.timer();
    },
    watch:{
        bool(){
            if(!this.bool){clearInterval(this.tt)}
            if(this.bool){this.timer();}
        }
    },
    data(){
        return{
        moved:0,
        i:1,
        show:false,
        stylemask:
        {
            top:0,
            left:0,
        },
        t:0,
        tt:0,
        bool:1,
        }
    },
    methods:{
        move(i){
            if((!(this.moved==0&&i==1))&&(!(this.moved==(4-7)&&i==-1))){
            this.moved+=i; 
            }
        },
        change(i){
            this.i=i;
        },
        changeshow(){
            this.show=!this.show;
        },
        mousemoved(e){
            var top=e.offsetY-88;
            var left=e.offsetX-88;
            if(left<0){left=0;}
            else if(left>226){left=226;}
            if(top<0){top=0;}
            else if(top>226){top=226;}
            // console.log(top, left)
            this.stylemask.top=top+"px";
            this.stylemask.left=left+'px';
            // console.log(e.offsetX,e.offsetY)
        },
        jump(i){
            commons.jump(i);
        },
        switched(){
            this.bool=!this.bool
        },
        timer(){
            var ul=document.querySelector(".stream>ul");
            this.tt=setInterval(() => {
            if(this.t<-1000){this.t=0}
            this.t-=1;
        }, 20);
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
/* p{margin-bottom: 0;} */
.d-flex{display: flex;}
ul{
    list-style: none;
}
.d-none{
    display:none;
}
.d-show{
    display: block;
}
/***************主体内容部分************* */
.section{
    width: 1200px;
    margin:40px auto 0;
}
/*导航栏 */
.bread{
    font-size: 14px;
    color: #666;
}
.title{
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    font-family: 'Microsoft YaHei';
    font-weight: bold;
    margin-bottom: 5px;
}
.title>span{
    font-size: 20px;
}
/* 商品详情栏：左：图片， 右：详情介绍  */
.detail{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    height: 550px;
}
.detail>div{
    width: 500px;
}
.show_detail{
    font-size: 14px;
    text-align: left;
}
.show_detail div{
    margin-bottom: 10px;
}
/***************左边放大镜********** */
.supermask{
    position: relative;
}
.supermask>.lgdiv{
    position: absolute;
    top: 0px;
    left: 450px;
    width: 402px;
    height:402px;
    overflow: hidden;
}
.supermask>.lgdiv,.supermask>.imgmd{
    border: 1px solid #ddd;
}


.imgmd{
    position: relative;
    width: 402px;
    height:402px;
}
/*图片上面的div */
.imgmd .minidiv{
    position: absolute;
    width: 176px;
    height:176px;
    background-color: yellow;
    opacity: 0.2;
}
.imgmd .lilili{
    width:400px;
    height:400px;
    position: absolute;
    top: 0;
    left:0; 
}
/*************** */
.imgSm{
    margin-top: 15px;
    width: 328px;
}
.imgSm>div.contul{
    width: 280px;
    overflow: hidden;
}
.imgSm>div.contul>ul{
    overflow: hidden;
}

/*************右边商品详情介绍************ */
.price{
    font-size: 34px;
    color:#ed192b;
}
.list4 a{
    display:inline-block;
    margin:0 3px 3px 0;
    padding:8px 10px;
    border:1px solid #000;
}
.list5 a{
    display:inline-block; 
    margin:0 6px 3px 0;
    padding:7px 9px;
    border:1px solid #000;
}
.list6 input,.list6 button{
    height: 36px;
    width:36px;
    margin-right: 3px;
}
.list6 input{
    text-align: center;
}
.list6 button{
    background-color: #ddd;
}
.list7{
    margin-top: 20px;
    display: flex;
    align-items: center;
}
.list7 a{
    /* width: 162px;
    height:42px; */
    display: inline-block;
    margin-right:10px;
    padding: 5px 20px;
    border:1px solid #ddd;
    font-size: 20px;
    background-color: #ed192b;
}
.list7 a:first-child{
    color:#f00;
    background-color: #eee;
}
.list7 a:nth-child(2){
    color:#fff;
    padding: 5px 10px;
    background-color: #ed192b;
}
.list7 a:nth-child(3){
    color:#fff;
    height:42px;
    width: 40px;
    padding:5px 0 0 0;
    margin: 0px;
    text-align: center;
    font-size: 12px;
    background-color: #ed192b;
}
/*流水图片部分 */
.streamtitle{
    font-size: 24px;
    color:#333;
    text-align:left;
}
.streamtitle .text1{
    margin-left: 10px;
    font-size: 14px;
    color:#f0f0f0;
    background-color: #333;
}
.stream{
    height:255px;
    border: 1px #aaa solid;
    overflow: hidden;
}
.stream>ul{
    margin-left: 12px;
}
.stream>ul>li{
    margin:15px 10px 0 0;
    font-size: 14px;
    font-weight: bold;
}
</style>