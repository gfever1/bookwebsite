<template>
  <el-container>
    <el-button type="primary" style="margin: 0 auto" @click="getApi">获取数据</el-button>
  </el-container>
</template>

<script>
//import {getMenu} from '../../api/data'
export default {
  name: "Test",
  methods:{
    getApi(){
      this.$axios.get("url")
      .then((res)=>{
        console.log(res)

      })
      .catch((err)=>{
        console.log(err)

      })

    }
  },
  mounted() {
   /* getMenu().then(res =>{
      console.log(res)
    })*/
  }
}
</script>

<style scoped>
el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

el-aside {
  color: #333;
}
</style>