<template>
    <div class="container">
        <all-header></all-header>
        <!-- header -->
        <div class="header">
            <router-link  to="/"><img src="../../static/img/reg_login/logo.jpg" alt=""></router-link>
            <span>帮助</span>
        </div>
        <!-- 注册form -->
        <div class="cont1">
            <!-- 左边图片 -->
            <div class="div1">
                <img src="../../static/img/reg_login/form-left.jpg" alt="">
            </div>
            <!-- 右边表单 -->
            <div class="div2">
                <div class="fom">
                    <div class="top1">
                        <span class="form-tops1">凡客Vancl&nbsp;登录</span>
                        <span>没有账户免费&nbsp;<router-link to="/reg">注册</router-link></span>
                        </div>
                    <form>
                        <div class="title1">用户登录</div>
                        <div class="margT"><input type="text" placeholder="请您的用户名"></div>
                        <!-- <div class="tips">用户名不能为空</div> -->
                        <div><input type="text" placeholder="请输入你的密码"></div>
                        <div class="tips">
                            <!-- 用户名不能为空 -->
                            <p><a href="javascript:;">找回密码</a></p>
                        </div>
                        <input type="button" value="注册" class="submit1">
                    </form> 
                </div>
            </div>
        </div>
       <all-footer></all-footer>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container{
    width: 1200px;
    margin:0 auto;
    /******************header**************** */
}
.header,.form-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header{border-bottom: 1px solid #000;
margin-top: 15px;
}
/**************************content******************** */
.cont1{
    width: 100%;
    height:500px;
    margin-top: 50px;
    display: flex;
    border-bottom: 1px solid #000;
}
.div1,.div2{
    width: 50%;
    height:500px;
    /* border:1px solid red; */
    position: relative;
}
.div1>img,.div2>div{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
.div2>div{
    width: 400px;
    height:500px;
    /* border:1px solid red; */
}
/*表单内容input */
.top1{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
.form-tops1{
    font-size: 23px;
    font-weight: bold;
    color: #9f808f;
}
.fom form{
    width: 400px;
    height: 360px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.fom form div.title1{
    background-color: #B71B22;
    height:46px;
    font-size:17px;
    color: #fff;
    padding:10px 165px;
    margin-top: -13px;
}
.margT{
    margin-top: 30px;
}
.fom form input{
    width: 344px;
    height:44px;
    padding: 10px 20px;

}
.fom form input.ischecked{
    width: 13px;
    height:13px;
    margin:3px;
}
.fom form div.tips{
    text-align: left;
    padding-left:25px;
    color: red;
}
.fom form p{margin-bottom: 0px;text-align: right;padding-right:30px;color: red; }
.submit1{margin-left: 20px;margin-bottom: 15px;background:#B71B22;font-size: 14px;color: #fff;}

</style>