<template>

<el-container>
  <el-header><Search></Search></el-header>
  <el-main style="width: 60%;margin: 20px auto">
  <el-form :label-position="labelPosition" label-width="120px" :model="bookInfo" enctype="multipart/form-data" method="post"
           ref="form">
    <el-form-item label="小说名称">
      <el-input v-model="bookInfo.name" placeholder="比如夜的命名术"></el-input>
    </el-form-item>
    <el-form-item label="作者姓名">
      <el-input v-model="bookInfo.author" placeholder="比如会说话的肘子"></el-input>
    </el-form-item>
    <el-form-item label="小说类型">
      <el-input v-model="bookInfo.sort" placeholder="比如玄幻"></el-input>
    </el-form-item>
    <el-form-item label="小说简介">
      <el-input type="textarea" v-model="bookInfo.sumIntro"></el-input>
    </el-form-item>
    <el-form-item label="请选择txt文件">
      <input type="file" name="txt" id='txt' @change="upload($event)">
    </el-form-item>
    <el-form-item>
      <el-button   @click="onSubmit" name="提交">提交</el-button>
    </el-form-item>

  </el-form>
<!--    <form method="post" enctype="multipart/form-data" action="/api/upload">-->
<!--      <input type="file" class="file1" name="file1">-->
<!--      <button type="submit" class="but1">上传</button>-->



<!--    </form>-->

  </el-main>
</el-container>

</template>

<script>
import Search from '@/components/search.vue'
import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; boundary=FormBoundary';
export default {
  name: "Upload",
  data() {
    return {
      labelPosition: 'left',
      bookInfo: {
        name: '',
        author: '',
        sort: '',
        sumIntro: '',
        txt:''
      },
      file: ''
    }
  },
  components: {
    Search,
  },
  methods:{
    upload(e){
      // 获取file
      this.bookInfo.txt = e.target.files[0];
      // 实例化
     /* let formdata = new FormData()
      formdata.append('name',this.bookInfo.name)
      formdata.append('author',this.bookInfo.author)
      formdata.append('sort',this.bookInfo.sort)
      formdata.append('intro',this.bookInfo.sumIntro)
      formdata.append('file', this.file)

      axios.post('/api/upload',{
            file: formdata
          },{
            headers:{'Content-Type': 'multipart/form-data;boundary=FormBoundary',},
            //headers:{'Content-Type': 'multipart/form-data',},
            // transformRequest:[],
          }
      ).then(res=>{
            console.log(res.data)
          },
          error=>{
            console.log(error.message)

          })*/


    },
    onSubmit() {
      // 实例化
      let file = new FormData()
      file.append('name',this.bookInfo.name)
      file.append('author',this.bookInfo.author)
      file.append('sort',this.bookInfo.sort)
      file.append('intro',this.bookInfo.sumIntro)
      file.append('txt', this.bookInfo.txt)
      //file.append("file", document.getElementById("txt").files[0]);

      axios.post('/api/upload',{
        file: file
      },{
         headers:{'Content-Type': 'multipart/form-data;boundary=FormBoundary',},
        //headers:{'Content-Type': 'multipart/form-data',},
        // transformRequest:[],
          }
      ).then(res=>{
        console.log(res.data)
      },
          error=>{
            console.log(error.message)

          })
/*this.instance.post('/api/upload',formdata).then(
    function (res){
        console.log(res.data)
      }
)*/

    }
  }
}
</script>

<style scoped>

</style>