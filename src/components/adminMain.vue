<template>

  <el-table :data="tableData" style="height:85vh;overflow-y: scroll">
    <el-table-column prop="cover" label="小说封面" width="140">
      <template slot-scope="scope">
        <img  :src="scope.row.address" width="100" height="100"  alt=""/>
      </template>
    </el-table-column>
    <el-table-column prop="bookName" label="小说名称" width="100">
    </el-table-column>
    <el-table-column prop="writerName" label="作者姓名" width="120">
    </el-table-column>
    <el-table-column prop="intro" label="小说简介" width="600">
    </el-table-column>
    <el-table-column >
      <template slot-scope="scope">
      <el-button type="success" round style="margin-left: 30px" @click="pass(scope.$index,tableData)">通过审核</el-button>
      </template>
    </el-table-column>
    <el-table-column >
      <template slot-scope="scope">
      <el-button type="danger" round style="margin-left: 15px" @click="noPass(scope.$index,tableData)">不通过审核</el-button>
      </template>
    </el-table-column>
  </el-table>



</template>

<script>
export default {
  name: "main",
  data() {
    const item = {
      address: 'http://www.yetianlian.com/files/article/image/20/20281/20281s.jpg',
      bookName: '夜的命名术',
      writerName: '会说话的肘子',
      intro: '蓝与紫的霓虹中，浓密的钢铁苍穹下，' +
          '数据洪流的前端，是科技革命之后的世界，也是现实与虚幻的分界。 ' +
          '钢铁与身体，过去与未来。这里，表世界与里世界并存，面前的一切，' +
          '像是时间之墙近在眼前。 黑暗逐渐笼罩。可你要明白啊我的朋友，我们不能用温柔去应对黑暗，要用火。'
    };
    return {
      tableData: Array(10).fill(item)
      /* tableData:[{
         address: 'http://www.yetianlian.com/files/article/image/20/20281/20281s.jpg',
         bookName: '夜的命名术',
         writerName: '会说话的肘子',
         intro: '蓝与紫的霓虹中，浓密的钢铁苍穹下，' +
             '数据洪流的前端，是科技革命之后的世界，也是现实与虚幻的分界。 ' +
             '钢铁与身体，过去与未来。这里，表世界与里世界并存，面前的一切，' +
             '像是时间之墙近在眼前。 黑暗逐渐笼罩。可你要明白啊我的朋友，我们不能用温柔去应对黑暗，要用火。'
       }]*/
    }
  },
  methods:{
    pass(index,rows){
      console.log('通过')
      rows.splice(index,1)
    },
    noPass(index,rows){
      console.log('未通过')
      rows.splice(index,1)
    },

  }
}
</script>

<style scoped>

</style>