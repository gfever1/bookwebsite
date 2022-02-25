<template>
<div class="center" >
  <el-row style="margin-top: 10px">
    <el-col :span="8"> <img src="https://rcode.zongheng.com/v2018/images/logo.png" width="167px" height="32px" style="margin-left: 30px">
    </el-col>
    <el-col :span="6" >
      <input type="text" name="keyword" class="searchForm_input searchForm_input2" placeholder="输入书名•作者" v-model="title">
    </el-col>
    <el-col :span="4" :push="1">
      <input type="submit" class="searchForm_btn" value="" @click="search" >

    </el-col>
    <el-col :span="1" :push="6" v-if="!IsLogIn">
      <button @click="clicklogInIcon">登录</button>
    </el-col>
    <el-col :span="1" :push="8" v-if="!IsLogIn">
      <button @click="clickSignUpIcon">注册</button>
    </el-col>

    <el-col :span="6" :push="6" v-if="IsLogIn" >
      <el-dropdown >
        <span class="el-dropdown-link" style="color: #d32f2f">
          <i class="el-icon-user-solid" style="margin-right: 7px;font-size: 25px"></i>
          <span style="font-size: 18px">{{mail}}</span>

        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>我的书架</el-dropdown-item>
          <el-dropdown-item @click="exit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </el-col>


  </el-row>

</div>
</template>

<script>

  export default {
    data() {
      return {
        title: null,
      }
    },
    methods: {  
      search() {  
        this.$router.push({ name: 'search', query: { title: this.title }})
      },
      clickSignUpIcon(){
        this.$router.push('/Regist')
      },
      clicklogInIcon(){
        this.$router.push('/Login')
      },
      exit(){
        this.$store.dispatch('setUser',null)
        this.$router.push('/Login')

      }

    },
    computed:{
      mail(){
       return sessionStorage.getItem('mail')
      },

      IsLogIn(){
        if(sessionStorage.getItem('mail')&&sessionStorage.getItem('userToken')){
          this.$store.commit('userStatus',sessionStorage.getItem('mail'))
        } else {
          this.$store.commit('userStatus',null)
        }
        return this.$store.getters.isLogin

      }

    }
  }

</script>

<style scoped lang="less">
  input {
    border: 2px rgb(4, 190, 2) solid;
    font-size: 14px;
    background: #f8fdff;
    width: 100%;
    height: 25px;
    line-height: 25px;
    color: #cbcfd1;
  }
  
  .searchForm_btn {
    position: absolute;
    height: 30px;
    width: 30px;
    color: #C0DEEA;
    line-height: 30px;
    border: none;
    background: url(https://rcode.zongheng.com/v2018/images/search.png) no-repeat center center #d32f2f;
    //background: url(http://m.qingdi.org/images/icon-search.gif) no-repeat 15% 50%;
    background-size: 18px;
    border-left: 1px #C0DEEA solid;
  }

  .center{
    width: 80%;
    margin: 0 auto;
  }

  .el-dropdown-link{
    cursor: pointer;
  }


</style>