<template>
  <div>
            <div class="parent1">
               <div class="child1 d-flex">
               <div class="d-flex"><input type="input" placeholder="搜休闲裤,体验与众不同"><button>搜索</button></div>
               <div><button>购物车(0)</button></div>
            </div>
           </div>
           <!-- 头部第三部分：导航栏 -->
           <div class="header_nav container d-flex flex-nowrap">
               <div class="right_logo"><router-link to="/"><img src="../../static/img/reg_login/logo.jpg" alt=""></router-link></div>
               <div class="left_nav">
                   <ul class="d-flex">
                       <li>
                            <a href="">T恤</a>
                           <ul>
                               <li><a>有领</a></li>
                               <li><a>无领</a></li>
                               <li><a>花纹</a></li>
                               <li><a>水印</a></li>
                           </ul>
                       </li>
                       <li>
                            <a href="">衬衫</a>
                           <ul>
                               <li><a>长袖</a></li>
                               <li><a>短袖</a></li>
                               <li><a>休闲</a></li>
                               <li><a>商务</a></li>
                               <li><a>嘻哈</a></li>
                           </ul>
                       </li>
                       <li>
                            <a href="">C9</a>
                           <ul>
                               <li><a>卫衣</a></li>
                               <li><a>外套</a></li>
                               <li><a>帽子</a></li>
                               <li><a>围巾</a></li>
                               <li><a>手套</a></li>
                               <li><a>袜子</a></li>
                           </ul>
                       </li>
                       <li>
                            <a href="">麻</a>
                           <ul>
                               <li><a>麻衬衫</a></li>
                               <li><a>麻短袖</a></li>
                               <li><a>麻西装</a></li>
                           </ul>
                       </li>
                       <li>
                            <a href="">鞋</a>
                           <ul>
                               <li><a>皮鞋</a></li>
                               <li><a>跑步鞋</a></li>
                               <li><a>凉鞋</a></li>
                               <li><a>溜冰鞋</a></li>
                           </ul>
                       </li>
                       <li>
                            <a href="">水柔棉</a>
                           <ul>
                               <li><a>拉链衫</a></li>
                               <li><a>长袖V领</a></li>
                               <li><a>长袖圆领</a></li>
                               <li><a>长袖水柔</a></li>
                               <li><a>水柔内衣</a></li>
                               <li><a>水柔短袖</a></li>
                           </ul>
                       </li>
                       <li>
                           <a href="">裤装</a>
                           <ul>
                               <li><a>长裤</a></li>
                               <li><a>短裤</a></li>
                               <li><a>七分裤</a></li>
                               <li><a>内裤</a></li>
                           </ul>
                       </li>
                       <li>
                            <a href="">外套</a>
                           <ul>
                               <li><a>西装</a></li>
                               <li><a>夹克</a></li>
                               <li><a>卫衣</a></li>
                               <li><a>风衣</a></li>
                               <li><a>衬衣</a></li>
                               <li><a>皮衣</a></li>
                           </ul>
                       </li>
                       <li>
                            <a href="">私人订制</a>
                           <ul>
                               <li><a>被子</a></li>
                               <li><a>枕头</a></li>
                               <li><a>睡衣</a></li>
                               <li><a>内衣</a></li>
                           </ul>
                       </li>
                   </ul>
               </div>
           </div>
       </div>
</template>
<script>
export default {
  
}
</script>
<style  scoped>
/*弹性布局 */
.d-flex{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/*header头部样式  中*/
.parent1{
    width: 100%;
    height:40px;
    margin-top: 20px;
    position: relative;
}
.child1{
    width: 333px;
    position:absolute;
    right: 5%;

}
.child1 button{
    border: none;
    padding: 5px 8px;
    font-size: 12px;
    color: #fff;
    background-color: #B81C22;
}
/*header头部nav 下*/
.header_nav>.right_logo{
    margin-right: 50px;
    margin-left: 10px;
}
.header_nav{
    display: flex;
    align-items: center;
    text-align: center;
    margin: 20px auto 0px;
}
.header_nav ul{
    list-style: none;
}

.header_nav li{
    width: 100px;
    z-index: 5;
}
.header_nav>.left_nav>ul>li>a{
    position: relative;
    display:block;
    padding-top:5px;
    padding-bottom:5px;
    width: 100px;
    border-left:1px solid #000;
    color: #C77D7F;
    text-decoration: none;

}
.header_nav>.left_nav>ul>li>ul>li{
    border: 1px dotted #999;
    color: #C77D7F;
}
.header_nav>.left_nav>ul>li>ul{
    padding-left:0px;
    display: none;
    position:absolute;
    z-index: 2;
    background-color: #fff;
}
.header_nav>.left_nav>ul>li:hover ul{
    display: block;

}
</style>