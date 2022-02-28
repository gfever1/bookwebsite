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
      <input type="file" name="myfile" id='myfile' @change="upload($event)">
    </el-form-item>
    <el-form-item>
      <el-button   @click="onSubmit" name="提交">提交</el-button>
    </el-form-item>

  </el-form>

  </el-main>
</el-container>

</template>

<script>
import Search from '@/components/search.vue'
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
      },
      file: null
    }
  },
  components: {
    Search,
  },
  methods:{
    upload(e){
      // 获取file
      this.file = e.target.files[0];

    },
    onSubmit() {
      // 实例化
      let formdata = new FormData()
      formdata.append('file', this.file)
      console.log(formdata)
      this.$axios.post('/api/upload',{
        file: formdata
      }).then(res=>{
        console.log(res.data)
      },
          error=>{
            console.log(error.message)

          })
    }
  }
}
</script>

<style scoped>

</style>