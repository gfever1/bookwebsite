<template>
	<el-container class="page_login">
		<el-header class="header_login">
      <img style="width:167px; height:32px; margin-left:155px; margin-top:20px;float:left;" src="https://rcode.zongheng.com/v2018/images/logo.png">
				<dl class="head_line_login" style="margin-top:30px;float:left;">
					<dt style="cursor: not-allowed">关于我们</dt>
					<dt style="cursor: not-allowed">有关服务</dt>
					<dt style="cursor: not-allowed">联系方式</dt>

				</dl>
            <el-button  @click="clickloginIcon" style=" width:120px; height:50px; border-radius: 50px;
                                margin-top: 10px;
                               font-weight:bold;
                               background-color:#569ce2;
								font-size: 16px;
								text-align: center;
								color: #ffffff;" 
             type="primary" round>登录</el-button>
		</el-header>
		
		<div id="ball1" v-bind:class="{ 'ball1': isActive }" >
		</div>
		<div class="ball2" style="margin-top: 8%;margin-left: 10%;">
		</div>
		<div class="ball3" style="margin-top: 20%;margin-left: -3%;">
		</div> 
		

		<div class="loginWindow" v-if="RegistShow" style="width: 40%;height: 420px;">

				<el-input v-model="email" id="email" placeholder="请输入你的邮箱"
                  clearable
                  maxlength="30"
                  show-word-limit
                  autocomplete="on"
				style="position: absolute;margin-top: 8%; margin-left: 27%;"></el-input>
				
				<el-input v-model="tleNum" id="phoneNum" placeholder="请输入你的手机号"
                  clearable
                  maxlength="11"
                  show-word-limit
                  autocomplete="on"
				style="position: absolute;margin-top: 20%; margin-left: 27%;"></el-input>
				
				<el-input v-model="pwd" id="pwd" placeholder="请输入你的密码" @click="reminder"
                  show-password
                  clearable
                  maxlength="15"
				style="position: absolute;margin-top: 32%; margin-left: 27%;"></el-input>
				
				<el-input v-model="Rigpwd" id="Rigpwd" placeholder="请再次确认你的密码"
                  show-password
                  clearable
                  maxlength="15"
				style="position: absolute;margin-top: 44%; margin-left: 27%;"></el-input>

				<div class="cube" style="margin-top: 8%;margin-left: 10%;">
					<p>邮箱</p>
				</div>
				<div class="cube" style="margin-top: 20%;margin-left: 10%;" >
					<p>手机号</p>
				</div>
				<div class="cube" style="margin-top: 32%;margin-left: 10%;">
					<p>密码</p>
				</div>
				<div class="cube" style="margin-top: 44%;margin-left: 10%;" >
					<p>确认密码</p>
				</div>

      <!-- 按此按钮跳转到登陆界面 -->
				<el-button type="primary" id="loginButton" @click="jumptoLogin()"
				style="margin-top: 58%;margin-left: 40%;">注册
				</el-button>
<!--嘲讽地带-->
				<div style="margin-left: 30%;color: #ff0000;font-size: larger">{{msg}}</div>
		</div>
	</el-container>
</template>
<script>

export default {
    data(){
        return {
            username:'',
            pwd:'',
			email:'',
      tleNum:'',
			Rigpwd:'',
            msg:'',//接收数据
			isActive:true,
			LoginShow:false,
			RegistShow:true
        }
    },
    methods:{
        clickloginIcon(){
          this.$router.push('/Login')
           
        },
      reminder(){
          this.msg='密码要求是长度9-15，必须含有三个大写字母，并且禁止重复'
        alert(this.msg)
      },
      //跳转代码
		jumptoLogin(){


      if(this.email&&this.pwd) {
        const that = this

        // eslint-disable-next-line no-mixed-spaces-and-tabs
        this.$axios.post("/api/register/" + this.tleNum + '/' + this.email + '/' + this.pwd, {

          tleNum: this.tleNum,
          email: this.email,
          pwd: this.pwd,

        })
            .then(function (dat) {
              console.log(dat.data)
              if (dat.data.success == true) {

                alert("Registered successfully");
                that.$router.replace("/Login");
              } else if (dat.data.success == false) {
                alert("Fail to Register");
              }
            })
            .catch(function (error) {
              alert(error.message);
              console.log(error.message);
            });
      }else {
        alert('你小子是不是有一行没填？')
        alert('没填还想注册？')
      }
				
			}
			
		}
    
}
</script>

<style>
body{
		margin:0; 
		padding:0;
		overflow: hidden hidden;
	}
	a{
			text-decoration:none;
			font-size: 14px;
			font-family: Montserrat, Montserrat-Regular;
			font-weight: 400;
			color: #ffffff;
	}
.header_login{
	width: 100%;
	margin-top: 55px;
	}
	.head_line_login{
	width: 580px;
	float: left;
	margin-top: 80px;
	margin-left: calc(100% - 1050px);
	}
	
	.head_line_login dt{
		width: auto;
		text-align: center;
		float: left;
		font-size: 17px;
		margin-left: 60px;
		color: rgba(255, 255, 255, 0.644);

	}
	
	.head_line_login dt:hover{
			font-weight: bold;

	}
	
	.page_login{
		height: 100%;
		width: 100%;
    background: linear-gradient(225deg,#6ee2f5, #6454f0) no-repeat;
		background-size: cover;
		position:absolute;
		left:0;
		top:0;
		margin:0; 
		padding:0;
	}
	.loginWindow{
		min-width: 550px;
		max-width: 600px;
		min-height: 300px;
		max-height: 700px;
		background: #ffffff;
		border-radius: 20px;
		opacity: 0.8;
		background: linear-gradient(180deg,#677ef1, #343f79);
		border-radius: 20px;
		box-shadow: 0px 10px 6px 0px ;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		right:0;
		bottom: 0;
	}
	.cube{
		width: 18%;
		height: 50px;
		background: #7e38c7;
		border-radius: 5px;
		position: absolute;
	}
	.loginWindow .cube p{
            text-align: center;
            font-size: 16px;
            text-align: center;
            color: #ffffff;
            vertical-align: center;
	}
	.loginWindow input{
			position: absolute;
			width: 62%;
			height: 48px;
			opacity: 0.4;
			background: #ffffff;
			border-radius: 5px;
			font-size: 18px;
			border:none;

	}
	input::-webkit-input-placeholder{
		font-size:18px;
		color:#ffffff;
	}
	input::-moz-placeholder{
		font-size:18px;
		color:#ffffff;
	}
	#loginButton{
            width: 20%;
            height: 50px;
            background: linear-gradient(180deg,#61a7ec, #297dcf);
            border-radius: 23px;
            box-shadow: 0px 3px 6px 0px #8d9bf7; 
            font-size: 14px;
            font-family: Open Sans, Open Sans-Regular;
            font-weight: 400;
            text-align: center;
            color: #ffffff;
			position: absolute;
	}
	.ball1{
			margin-top: 20%;
			margin-left: 60%;
			position: absolute;
			width: 700px;
			height: 700px;
			background: linear-gradient(225deg,#6119b2 1%, #b875f2 96%);
			border-radius: 50%;
	}
	.ball2{
			position: absolute;
			width: 130px;
			height: 130px;
			background: linear-gradient(225deg,#5d24e4 1%, #aa7feb 96%);
			border-radius: 50%;
	}
	.ball3{
			position: absolute;
			width: 200px;
			height: 200px;
			background: linear-gradient(225deg,#4235c5 1%, #8b8ff8 96%);
			border-radius: 50%;
	} 
</style>
