<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header height="10vh"><Search></Search>
    </el-header>
    <el-container>

      <AsidePart></AsidePart>
      <el-main><Main></Main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Search from '@/components/adminSearch'
import AsidePart from "@/components/adminAside";
import Main from "@/components/adminMain";
export default {
  name: "Admin",
  components:{
    Search,
    AsidePart,
    Main

  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style scoped>
el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

/*el-aside {
  color: #333;
}*/
</style>