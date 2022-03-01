<template>
<el-container direction="vertical" >
  <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" >
    <el-table-column prop="cover" label="小说封面" width="140">
      <template slot-scope="scope">
        <img  :src="scope.row.ptUrl" width="100" height="100"  alt=""/>
      </template>
    </el-table-column>
    <el-table-column prop="bookName" label="小说名称" width="100">
    </el-table-column>
    <el-table-column prop="sort" label="小说类型" width="100">
    </el-table-column>
    <el-table-column prop="author" label="作者姓名" width="120">
    </el-table-column>
    <el-table-column prop="sumIntro" label="小说简介" width="500">
    </el-table-column>
    <el-table-column v-if="!isChecking">
      <template slot-scope="scope">
      <el-button type="primary" round style="margin-left: 30px" @click="collect(scope.row.bookName,scope.row.author)">加入书架</el-button>
      </template>
    </el-table-column>

    <el-table-column v-if="!isChecking">

        <template slot-scope="scope">
        <el-button type="primary" round style="margin-left: 25px" @click="download(scope.row.bookName,scope.row.author)">下载该书</el-button>
        </template>


    </el-table-column>

    <el-table-column v-if="isChecking">
      <template slot-scope="scope">
        <el-button type="success" round style="margin-left: 30px" @click="pass(scope.row.bookName,scope.row.author)">通过审核</el-button>
      </template>
    </el-table-column>
    <el-table-column v-if="isChecking">
      <template slot-scope="scope">
        <el-button type="danger" round style="margin-left: 15px" @click="noPass(scope.row.bookName,scope.row.author)">不通过审核</el-button>
      </template>
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
    const item = {
      ptUrl: 'http://www.yetianlian.com/files/article/image/20/20281/20281s.jpg',
      bookName: '夜的命名术',
      author: '会说话的肘子',
      sumIntro: '蓝与紫的霓虹中，浓密的钢铁苍穹下，' +
          '数据洪流的前端，是科技革命之后的世界，也是现实与虚幻的分界。 ' +
          '钢铁与身体，过去与未来。这里，表世界与里世界并存，面前的一切，' +
          '像是时间之墙近在眼前。 黑暗逐渐笼罩。可你要明白啊我的朋友，我们不能用温柔去应对黑暗，要用火。'
    };
    return {
      tableData: Array(10).fill(item),
      //tableData:[],
      currentPage:1,
      pageSize:4,

      email: '',
      isChecking: false,
      BookName: 'abc.txt'
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    pass(bookName,author){
     /* console.log('通过')
      rows.splice(index,1)*/
      let req = confirm('请再次确认您是否选择审核通过这本书')
      if (req) {
        this.$axios.post('/api/pass/' + bookName + '/' + author, {
          bookName: bookName,
          author: author
        }).then(res => {
              console.log(res.data)
              alert(res.data.message)
            },
            error => {
              console.log(error.message)
            }
        )
      }
    },
    noPass(bookName,author){
     /* console.log('未通过')
      rows.splice(index,1)*/
      let req = confirm('请再次确认您是否选择审核不通过这本书')
      if (req) {
        this.$axios.post('/api/notpass/' + bookName + '/' + author, {
          bookName: bookName,
          author: author
        }).then(res => {
              console.log(res.data)
              alert(res.data.message)
            },
            error => {
              console.log(error.message)
            }
        )
      }
    },
    collect(bookName,author){
      let req = confirm('请再次确认您是否需要想在您的书架上添加这本书')
      if (req) {
        this.$axios.post('/api/shelf/add/' + this.email + '/' + bookName + '/' + author, {
          email: this.email,
          bookName: bookName,
          author: author
        }).then(res => {
              console.log(res.data)
              alert(res.data.message)
            },
            error => {
              console.log(error.message)
            }
        )
      }
    },
    download(bookName,author){
      let formData = new FormData()
      formData.append('bookName',bookName)
      formData.append('author',author)
      let req = confirm('请再次确认您是否选择下载这本书')
      if (req) {
        this.$axios.post('/api/download',formData,{
          responseType:'blob',
        } ).then(res => {
              let blob = new Blob([res.data], /*{ type: res.type }*/
              );
              // 获取文件名
              let filename = res.headers['content-disposition'];
              filename = decodeURIComponent(filename.split("filename=")[1]);
              // 创建 a标签 执行下载
              let downloadElement = document.createElement('a');
              let href = window.URL.createObjectURL(blob); //创建下载的链接
              downloadElement.href = href;
              downloadElement.download = filename; //下载后文件名
              document.body.appendChild(downloadElement); // 项目插入a元素
              downloadElement.click(); //点击下载
              document.body.removeChild(downloadElement); //下载完成移除元素
              window.URL.revokeObjectURL(href); //释放blob对象
              alert('下载成功')
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

    this.$bus.$on('getIsAdmin', (isAdmin) => {
      this.isAdmin = isAdmin;
    })

    this.$axios.get('/api/books/').then(
        res => {
          console.log(res.data)
          this.tableData = res.data.result
        },
        error => {
          console.log(error.message)

        }
    )

    this.$bus.$on('getBookList', (books) => {
      console.log('getBookList: ', books)
      this.tableData = books
    })

    this.$bus.$on('getBook', (books) => {
      console.log('getBook: ', books)
      this.tableData = books
    })

    this.$bus.$on('getBook1', (books) => {
      console.log('getBook1: ', books)
      this.tableData = books
    })

    this.$bus.$on('getBookByXuanhuan', (books) => {
      console.log('getBookByXuanhuan: ', books)
      this.tableData = books
    })

    this.$bus.$on('getBookByQihuan', (books) => {
      console.log('getBookByQihuan: ', books)
      this.tableData = books
    })

    this.$bus.$on('getBookByWuxia', (books) => {
      console.log('getBookByWuxia: ', books)
      this.tableData = books
    })

    this.$bus.$on('getBookByYanqing', (books) => {
      // console.log('getBookByYanqing: ',books)
      this.tableData = books
    })

    this.$bus.$on('getBookByDushi', (books) => {
      this.tableData = books
    })

    this.$bus.$on('getBookByXianxia', (books) => {
      this.tableData = books
    })

    this.$bus.$on('getHotBook',(books)=>{
      console.log('getHotBook: ', books)
      this.tableData = books
    })

    this.$bus.$on('getisChecking', (isChecking) => {
      this.isChecking = isChecking

    })

    this.$bus.$on('getCheckBook',(getCheckBook)=>{
      this.tableData = getCheckBook
    })




  },
  computed:{
    currentTotal(){
      return this.tableData.length
    },

  }
}
</script>

<style scoped>

</style>
