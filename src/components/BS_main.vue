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
      <el-table-column prop="sumIntro" label="小说简介" width="700">
      </el-table-column>
      <el-table-column >
        <template slot-scope="scope">
        <el-button type="danger" round style="margin-left: 30px" @click="remove(scope.row.name)">不再收藏</el-button>
          </template>
      </el-table-column>
      <el-table-column>
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

    return {
      tableData:[{ptUrl: 'http://www.yetianlian.com/files/article/image/20/20281/20281s.jpg',
        name: '夜的命名术',
        author: '会说话的肘子',
        sumIntro: '蓝与紫的霓虹中，浓密的钢铁苍穹下，' +
            '数据洪流的前端，是科技革命之后的世界，也是现实与虚幻的分界。 ' +
            '钢铁与身体，过去与未来。这里，表世界与里世界并存，面前的一切，' +
            '像是时间之墙近在眼前。 黑暗逐渐笼罩。可你要明白啊我的朋友，我们不能用温柔去应对黑暗，要用火。'},
        {ptUrl: 'http://www.yetianlian.com/files/article/image/20/20281/20281s.jpg',
          name: '夜的命名术',
          author: '会说话的肘子',
          sumIntro: '蓝与紫的霓虹中，浓密的钢铁苍穹下，' +
              '数据洪流的前端，是科技革命之后的世界，也是现实与虚幻的分界。 ' +
              '钢铁与身体，过去与未来。这里，表世界与里世界并存，面前的一切，' +
              '像是时间之墙近在眼前。 黑暗逐渐笼罩。可你要明白啊我的朋友，我们不能用温柔去应对黑暗，要用火。'},
      ],
      currentPage:1,
      pageSize:4,

      email:'',

    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    remove(bookName) {
      let req = confirm('请再次确认您是否需要从书架上移除这本书')
      if (req) {
        this.$axios.post('/api//shelf/delete/' + this.email + '/' + bookName, {
          email: this.email,
          bookName: bookName,
        }).then(res => {
              console.log(res.data)
              alert('移除成功')
            },
            error => {
              console.log(error.message)
            }
        )
      }
    }
  },
  mounted() {
    this.email = sessionStorage.getItem('email')

    this.$axios.post('/api/shelf/view/'+this.email,{
      email:this.email
    }).then(
        res => {
          this.tableData = res.data.result
        },
        error => {
          console.log(error.message)
        }
    )
  },


  computed:{
    currentTotal(){
      return this.tableData.length
    },
  }
}
</script>
