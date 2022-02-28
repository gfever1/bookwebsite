<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header height="10vh"><Search></Search>
    </el-header>
    <el-container>
      <el-main><Main></Main></el-main>
    </el-container>
  </el-container>
</template>


<script>
import Search from '@/components/BS_header'

import Main from "@/components/BS_main";
export default {
  name: "BookShelf",
  components:{
    Search,
    Main

  },
}
</script>

<style scoped>

</style>