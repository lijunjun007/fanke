<template>
    <div class="container">
        <all-header></all-header>
        <!-- header -->
        <div class="header">
            <router-link to="/" ><img src="../../static/img/reg_login/logo.jpg" alt=""></router-link>
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
                        <span class="form-tops1">注册新用户</span>
                        <span>我已注册，现在就<router-link to="/login">登陆</router-link></span>
                        </div>
                    <form>
                        <div class="faImg"><input v-model="uname" type="text" placeholder="请注册您的用户名"><img :class="unameImgClass" :src="'../../static/img/reg_login'+list1" alt=""></div>
                        <div class="tips"  :class="unameClass">{{unametext}}</div>

                        <div class="faImg"><input v-model="upwd1" type="text" placeholder="请设置你的密码"><img :class="upwd1ImgClass" :src="'../../static/img/reg_login'+list2" alt=""></div>
                        <div class="tips"  :class="upwd1Class">{{upwd1text}}</div>

                        <div class="faImg"><input v-model="upwd2" type="text" placeholder="请再次确认你的密码"><img :class="upwd2ImgClass" :src="'../../static/img/reg_login'+list3" alt=""></div>
                        <div class="tips" :class="upwd2Class">{{upwd2text}}</div>

                        <div class="faImg"><input v-model="uemail" type="text" placeholder="请输入邮箱"><img :class="uemailImgClass" :src="'../../static/img/reg_login'+list4" alt=""></div>
                        <div class="tips" :class="uemailClass" >{{uemailtext}}</div>

                        <div class="faImg"><input v-model="utel" type="text" placeholder="请输入手机号"><img :class="utelImgClass" :src="'../../static/img/reg_login'+list5" alt=""></div>
                        <div class="tips" :class="utelClass" >{{uteltext}}</div>
                        <p><input type="checkbox" class="ischecked">请阅读《凡客诚品服务条款》</p>
                        <input type="button" value="注册" class="submit1">
                    </form> 
                </div>
            </div>
        </div>
        <!-- **************footer**************** -->
       <all-footer></all-footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            //双向绑定input内容
            uname:"",
            upwd1:"",
            upwd2:"",
            uemail:"",
            utel:"",
            //测试文字
            unametext:"",
            upwd1text:"",
            upwd2text:"",
            uemailtext:"",
            uteltext:"",
            //正确图片地址
            errImg:"/err.png",
            //错误图片地址
            trueImg:"/true.png",
            //input输入框验证图片地址
            list1:"/err.png",
            list2:"/err.png",
            list3:"/err.png",
            list4:"/err.png",
            list5:"/err.png",
            //input输入框验证图片class隐藏/显示
            unameImgClass:"hide",
            upwd1ImgClass:"hide",
            upwd2ImgClass:"hide",
            uemailImgClass:"hide",
            utelImgClass:"hide",
            //input输入框验证文字颜色
            unameClass:"red",
            upwd1Class:"red",
            upwd2Class:"red",
            uemailClass:"red",
            utelClass:"red",
            //颜色class
            style1:"red",
            style2:"green",

        }
    },
    methods:{
        //正则判断函数
        zzTest(reg,value,text1,text2,text3,style1,style2,imgUrl){
            // 返回的结果数组
            var arr=['testText','color']
            //验证图片的显示隐藏
            var a1="hide"
            var a2="xianshi"
            var imgUrl1="/true.png"
            var imgUrl2="/err.png"
            if(value==""){
                arr[0]=text1;
                arr[1]=style1;
                arr[2]=a2
                arr[3]=imgUrl2
                }
                else if(!(reg.test(value))){
                arr[0]=text2;
                arr[1]=style1;
                arr[2]=a2
                arr[3]=imgUrl2
                }else{
                arr[0]=text3;
                arr[1]=style2;
                arr[2]=a2
                arr[3]=imgUrl1
                }
                return arr;
        },
    },
    watch:{
            /*用户名验证 */
             uname(){
                var reg=/^[\u4e00-\u9fa5]{4,8}$/;
                var text1='用户不能为空';
                var text2="用户名为4-8位汉字";
                var text3="用户名符合要求";
                var arr=this.zzTest(reg,this.uname,text1,text2,text3,this.style1,this.style2)
                //1.设置验证文字的内容
                this.unametext=arr[0];
                // console.log(this.unametext);
                //2.设置验证文字的颜色
                this.unameClass=arr[1];
                //3.设置图片的显示隐藏
                this.unameImgClass=arr[2]
                //4.选择正确错误的图片
                this.list1=arr[3]
             },
             /*密码验证 */
             upwd1(){
                var reg=/^\w{4,8}$/;
                var text1='密码不能为空';
                var text2="密码为4-8位数字或字母";
                var text3="密码符合要求";
                var arr=this.zzTest(reg,this.upwd1,text1,text2,text3,this.style1,this.style2)
                this.upwd1text=arr[0];
                // console.log(this.upwd1text);
                this.upwd1Class=arr[1];
                this.upwd1ImgClass=arr[2]
                this.list2=arr[3]
             },
             //重复密码判断
            upwd2(){
                if(this.upwd2==this.upwd1){
                    this.upwd2text='密码验证成功';
                    this.upwd2Class='green';
                    this.upwd2ImgClass='xianshi'
                    this.list3="/true.png";

                }else{
                    this.upwd2text='密码两次输入不相同';
                    this.upwd2Class='red';
                    this.upwd2ImgClass='hide'
                    this.list3="/err.png"
                }
            },
             //邮箱判断
            uemail(){
                var reg=/^\w+@\w{2,10}\.[a-z]{2,3}(\.[a-z]{2})?$/;
                var text1='邮箱不能为空';
                var text2="请输入合法的邮箱名";
                var text3="邮箱名符合要求";
                var arr=this.zzTest(reg,this.uemail,text1,text2,text3,this.style1,this.style2,)
                this.uemailtext=arr[0];
                // console.log(this.uemailtext);
                this.uemailClass=arr[1];
                this.uemailImgClass=arr[2]
                this.list4=arr[3]
    },
            //电话号码判断
            utel(){
                var reg=/^1[3-8]\d{9}$/;
                var text1='电话号码不能为空';
                var text2="电话号码格式不正确";
                var text3="电话号码格式符合要求";
                var arr=this.zzTest(reg,this.utel,text1,text2,text3,this.style1,this.style2)
                this.uteltext=arr[0];
                // console.log(this.uteltext);
                this.utelClass=arr[1];
                this.utelImgClass=arr[2]
                console.log(this.utelImgClass)
                this.list5=arr[3]
            },
        }
        
    
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
    height:600px;
    margin-top: 50px;
    display: flex;
    border-bottom: 1px solid #000;
}
.div1,.div2{
    width: 50%;
    height:600px;
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
    height:600px;
    /* border:1px solid red; */
}
/*表单内容input */
.top1{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 3px solid red;
}
.form-tops1{
    font-size: 23px;
    font-weight: bold;
    color: #9f808f;
}
.fom form{
    width: 400px;
    height: 471px;
    margin-top: 20px;
    padding-top:30px; 
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    height:20px;
    text-align: left;
    padding-left:25px;
}
.fom form p{margin-bottom: 0px;text-align: right;padding-right:30px;color: red; }
.submit1{margin-left: 20px;margin-bottom: 15px;background:#B71B22;font-size: 14px;color: #fff;}
/**********正则判断改变的样式*********** */
.red{
    color: red;
}
.green{
    color:green;
}
/*设置图片隐藏/显示*/
.hide{
    display:none;
}
.xianshi{
    display: inline-block;
}
.faImg{
    position:relative
}
.faImg>img{
    position: absolute;
    right: 0;
    top:10px;
}

</style>