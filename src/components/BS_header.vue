<template>
  <div class="center" >
    <el-row style="margin-top: 10px">
      <el-col :span="8" @click.native="enterHome"> <img src="https://rcode.zongheng.com/v2018/images/logo.png" width="167px" height="32px" style="margin-left: 30px;cursor: pointer">
      </el-col>
      <el-col :span="6" >
        <input type="text" name="keyword" class="" placeholder="请输入你想搜索的书名" v-model="title">
      </el-col>
      <el-col :span="4" :push="1">
        <input type="submit" class="searchForm_btn" value="" @click="search" >
      </el-col>
      <el-col :span="6" :push="6"  >
        <el-dropdown >
        <span class="el-dropdown-link" style="color: #d32f2f">
          <i  class="el-icon-collection" style="margin-right: 7px;font-size: 30px"></i>
          <span style="font-size: 18px">{{email}}</span>

        </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click="enterHome">回到首页</el-dropdown-item>
            <el-dropdown-item @click.native="exit">退出登录</el-dropdown-item>
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
      title: '',
      email: '',
    }
  },
  methods: {
    search() {
      /* console.log(dat.data.items)
       this.$bus.$emit('getBookList',dat.data.items)*/

      //js模板字符串，可以带参数
      this.$axios.get(`https://api.github.com/search/users?q=${this.title}`)
          .then(res => {
            console.log(res.data.items)
            this.$bus.$emit('getBookList',res.data.items)

          })
          .catch(function(error) {
            alert(error.message);
            console.log(error.message);
          });


    },
    enterHome(){
      this.$router.push('/')
      this.$axios.get('/api/books/').then(res=>{
        this.$bus.$emit('getBook',res.data.result)

      })
    },
    exit(){
      sessionStorage.clear()
      this.$router.push('/Login')

    },
  },
  computed:{
  },
  mounted() {
    this.email=sessionStorage.getItem('email')
    // console.log(this.email=sessionStorage.getItem('email'))
  },
  beforeDestroy() {
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