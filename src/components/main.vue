<template>
<el-container direction="vertical" >
  <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" >
    <el-table-column prop="cover" label="小说封面" width="140">
      <template slot-scope="scope">
        <img  :src="scope.row.ptUrl" width="100" height="100"  alt=""/>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="小说名称" width="100">
    </el-table-column>
    <el-table-column prop="sort" label="小说类型" width="100">
    </el-table-column>
    <el-table-column prop="author" label="作者姓名" width="120">
    </el-table-column>
    <el-table-column prop="sumIntro" label="小说简介" width="500">
    </el-table-column>
    <el-table-column >
      <el-button type="primary" round style="margin-left: 30px">加入书架</el-button>
    </el-table-column>
    <el-table-column >
      <el-link href="../assets/logo.png">
        <el-button type="primary" round style="margin-left: 25px">下载该书</el-button>
      </el-link>

    </el-table-column>
  </el-table>

  <el-pagination
      background

      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next, jumper"
      :total="currentTotal"
      style="margin:10px auto"
  >

  </el-pagination>

</el-container>


</template>

<script>
export default {
  name: "main",
  data() {
   /* const item = {
      address: 'http://www.yetianlian.com/files/article/image/20/20281/20281s.jpg',
      bookName: '夜的命名术',
      writerName: '会说话的肘子',
      intro: '蓝与紫的霓虹中，浓密的钢铁苍穹下，' +
          '数据洪流的前端，是科技革命之后的世界，也是现实与虚幻的分界。 ' +
          '钢铁与身体，过去与未来。这里，表世界与里世界并存，面前的一切，' +
          '像是时间之墙近在眼前。 黑暗逐渐笼罩。可你要明白啊我的朋友，我们不能用温柔去应对黑暗，要用火。'
    };*/
    return {
      //tableData: Array(10).fill(item),
      tableData:[],
      currentPage:1,
      pageSize:4,
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.$axios.get('/api/books/').then(res=>{
      this.tableData=res.data.result

    })

    this.$bus.$on('getBookList',(books)=>{
      console.log('getBookList: ',books)
      this.tableData =books
    })

    this.$bus.$on('getBook',(books)=>{
      console.log('getBook: ',books)
      this.tableData =books
    })

    this.$bus.$on('getBookByXuanhuan',(books)=>{
      console.log('getBookByXuanhuan: ',books)
      this.tableData =books
    })

    this.$bus.$on('getBookByQihuan',(books)=>{
      console.log('getBookByQihuan: ',books)
      this.tableData =books
    })

    this.$bus.$on('getBookByWuxia',(books)=>{
      console.log('getBookByWuxia: ',books)
      this.tableData =books
    })

    this.$bus.$on('getBookByYanqing',(books)=>{
      // console.log('getBookByYanqing: ',books)
      this.tableData =books
    })

    this.$bus.$on('getBookByDushi',(books)=>{
      this.tableData =books
    })

    this.$bus.$on('getBookByXianxia',(books)=>{
      this.tableData =books
    })
  },
  computed:{
    currentTotal(){
      return this.tableData.length

    }
  }
}
</script>

<style scoped>

</style>