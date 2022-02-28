<template>
	<el-container class="page_login">
		<el-header class="header_login">
			<img style="width:167px; height:32px; margin-left:155px; margin-top:20px;float:left;" src="https://rcode.zongheng.com/v2018/images/logo.png">
				<dl class="head_line_login" style="margin-top:30px;float:left;">
          <dt onclick="location.href='javascript:alert(\'骗你的，没这功能\')'" style="cursor: grab">关于我们</dt>
          <dt onclick="location.href='javascript:alert(\'不信你就再试试右边那个\')'" style="cursor: help">有关服务</dt>
          <dt onclick="location.href='javascript:alert(\'真没有，不骗你\')'" style="cursor: wait">联系方式</dt>

				</dl>
      <el-button  @click="clickSignUpIcon" style=" width:120px; height:50px; border-radius: 50px;
                                margin-top: 10px;
                               font-weight:bold;
                               background-color:#569ce2;
								font-size: 16px;
								text-align: center;
								color: #ffffff;"
                  type="primary" round>注册</el-button>
		</el-header>
		
		<div id="ball1" v-bind:class="{ 'ball1': isActive }" >
		</div>
		<div class="ball2" style="margin-top: 8%;margin-left: 10%;">
		</div>
		<div class="ball3" style="margin-top: 20%;margin-left: -3%;">
		</div> 
		
		
		
		<div class="loginWindow" v-if="LoginShow" style="width: 40%;height: 330px;">
			
			<!-- <input type="text" v-model="username" placeholder="1323456" id="username" style="margin-top: 10%;margin-left: 27%;"> -->
			<el-input v-model="email" id="email" placeholder="请输入正确的邮箱地址"
                clearable
                maxlength="30"
                show-word-limit
                autocomplete="on"
                style="position: absolute;margin-top: 10%;margin-left: 27%;">

      </el-input>
			<el-input v-model="pwd" id="pwd" type="password" placeholder="请输入您的密码"
                clearable
                maxlength="15"
                style="position: absolute;margin-top: 24%;margin-left: 27%;"></el-input>
			<div class="cube" style="margin-top: 10%;margin-left: 10%;">
				<p>邮箱</p>
			</div>
			<div class="cube" style="margin-top: 24%;margin-left: 10%;" >
				<p>密码</p>
			</div>
			<p><a style="position: absolute;margin-top: 35%;margin-left:12%;cursor: pointer" v-on:click="clickSignUpIcon">没有账户？点击这里马上注册</a></p>

			<p> <a @click="visitHome" style="position: absolute;margin-top: 35%;margin-left:70%;cursor: pointer">不如试试游客登陆</a></p>


			<el-button @click="goToHome()"
			style="margin-top: 41%;margin-left: 40%;width: 20%" round type="primary">登陆
		</el-button>
			<div style="margin-left: 25%;color: #ff0000;font-size: 20px;">{{msg}}</div>
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
            msg:'',//接收数据
          // eslint-disable-next-line no-mixed-spaces-and-tabs
			      isActive:true,
          // eslint-disable-next-line no-mixed-spaces-and-tabs
			      LoginShow:true,
          // eslint-disable-next-line no-mixed-spaces-and-tabs
			      RegistShow:false
        }
    },
    methods:{
      clickSignUpIcon(){
        this.$router.push('/Regist')
      },
      visitHome(){
        this.$router.push('/Home')
      },

      // eslint-disable-next-line no-mixed-spaces-and-tabs
		 goToHome(){
        if(this.email&&this.pwd) {


          const that = this


          this.$axios.post("/api/login/" + this.email + '/' + this.pwd, {

            email: this.email,
            pwd: this.pwd,

          })
              .then(res => {
                if (res.data.success == true) {
                  console.log(res.data)
                  if (this.email !== 'admin') {
                    alert("真可惜");
                    alert("你这小子还真是个天才");
                  } else {
                    alert('欢迎您')
                    alert('尊贵的光头杀手47')
                  }

                  //将email跟token传入sessionStorage
                  sessionStorage.setItem('email', res.data.result.email)
                  console.log(sessionStorage.getItem('email'))
                  // sessionStorage.setItem('userToken',res.data.token)
                  //将email跟token放入vuex
                  this.$store.dispatch('setUser', res.data.result.email)
                  //  this.$store.dispatch('setToken',res.data.token)

                  that.$router.replace("/Home");


                } else if (res.data.success == false) {
                  console.log(res.data)
                  alert("恭喜您");
                  alert("您的本次登陆-----失败了");
                  alert("失败原因为：" + res.data.message)
                }
              })

              .catch(function (error) {
                alert(error.message)
                console.log(error.message);
              });
        }else {
          alert('你小子是不是有一行没填？')
          alert('重新来过')
        }
        },

    },
  // beforeRouteEnter:(to,from,next)=>{
  //     //组件内守卫
  //   next(vm=>{
  //     vm.$router.dispatch('setUser',null)
  //   })
  // }
}
</script>

<style>

</style>
