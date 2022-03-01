<template>
  <el-aside width="auto"  style="background-color: rgb(238, 241, 246);overflow-y:scroll;height: 85vh">

    <el-menu :default-openeds="['5']" >
      <el-submenu index="1" v-show="!adminState">
        <template slot="title"><i class="el-icon-s-home"></i>主要页面</template>
        <el-menu-item-group>
          <template slot="title">本站页面</template>
          <el-menu-item index="1-1" @click="enterHome">本站首页</el-menu-item>
<!--          <el-menu-item index="1-2" @click="enterBookShelf" v-show="">我的书架</el-menu-item>-->
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">参考网址</template>
          <el-menu-item index="1-3" onclick="location.href='https://www.qidian.com/'">起点阅读网</el-menu-item>
          <el-menu-item index="1-4" onclick="location.href='http://www.zongheng.com/'">纵横中文网</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="2" v-show="!adminState">
        <template slot="title"><i class="el-icon-menu"></i>分类</template>
        <el-menu-item-group >
          <template slot="title">玄幻</template>
          <el-menu-item index="2-1" @click="showByXuanhuan">东方玄幻</el-menu-item>
          <el-menu-item index="2-2" @click="showByXuanhuan">异世大陆</el-menu-item>
          <el-menu-item index="2-3" @click="showByXuanhuan">王朝争霸</el-menu-item>
          <el-menu-item index="2-4" @click="showByXuanhuan">高武世界</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="奇幻">
          <el-menu-item index="2-5" @click="showByQihuan">现代魔法</el-menu-item>
          <el-menu-item index="2-6" @click="showByQihuan">剑与魔法</el-menu-item>
          <el-menu-item index="2-7" @click="showByQihuan">神秘幻想</el-menu-item>
          <el-menu-item index="2-8" @click="showByQihuan">史诗奇幻</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="武侠">
          <el-menu-item index="2-9" @click="showByWuxia">传统武侠</el-menu-item>
          <el-menu-item index="2-10" @click="showByWuxia">武侠幻想</el-menu-item>
          <el-menu-item index="2-11" @click="showByWuxia">国术无双</el-menu-item>
          <el-menu-item index="2-12" @click="showByWuxia">古武未来</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="仙侠">
          <el-menu-item index="2-13" @click="showByXianxia">修真文明</el-menu-item>
          <el-menu-item index="2-14" @click="showByXianxia">幻想修仙</el-menu-item>
          <el-menu-item index="2-15" @click="showByXianxia">现代修真</el-menu-item>
          <el-menu-item index="2-16" @click="showByXianxia">古典仙侠</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="都市">
          <el-menu-item index="2-17" @click="showByYanqing">爱情婚姻</el-menu-item>
          <el-menu-item index="2-18" @click="showByDushi">都市生活</el-menu-item>
          <el-menu-item index="2-19" @click="showByDushi">都市异能</el-menu-item>
          <el-menu-item index="2-20" @click="showByDushi">异术超能</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="3" v-show="!adminState">
        <template slot="title"><i class="el-icon-s-data"></i>排行榜</template>
        <el-submenu index="3-1">
          <template slot="title" @click="enterHot">月票榜</template>
<!--          <el-menu-item index="3-1-1">1.夜的命名术</el-menu-item>
          <el-menu-item index="3-1-2">2.星门</el-menu-item>
          <el-menu-item index="3-1-3">3.明克街13号</el-menu-item>
          <el-menu-item index="3-1-4">4.不科学御兽</el-menu-item>
          <el-menu-item index="3-1-5">5.我就是不按套路出牌</el-menu-item>-->
        </el-submenu>
        <el-submenu index="3-2">
          <template slot="title" @click="enterHot">畅销榜</template>
<!--          <el-menu-item index="3-2-1">1.夜的命名术</el-menu-item>
          <el-menu-item index="3-2-2">2.星门</el-menu-item>
          <el-menu-item index="3-2-3">3.明克街13号</el-menu-item>
          <el-menu-item index="3-2-4">4.不科学御兽</el-menu-item>
          <el-menu-item index="3-2-5">5.我就是不按套路出牌</el-menu-item>-->
        </el-submenu>

      </el-submenu>
      <el-submenu index="4" v-show="!adminState">
        <template slot="title"><i class="el-icon-star-off"></i>大神</template>
        <el-menu-item-group>
          <template slot="title">白金作家</template>
          <el-menu-item index="4-1">知秋</el-menu-item>
          <el-menu-item index="5-2">爱潜水的乌贼</el-menu-item>
          <el-menu-item index="5-3">猫腻</el-menu-item>
          <el-menu-item index="5-4">烽火戏诸侯</el-menu-item>
          <el-menu-item index="5-5">三天两觉</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">人气作家</template>
          <el-menu-item index="5-6">知秋</el-menu-item>
          <el-menu-item index="5-7">爱潜水的乌贼</el-menu-item>
          <el-menu-item index="5-8">猫腻</el-menu-item>
          <el-menu-item index="5-9">烽火戏诸侯</el-menu-item>
          <el-menu-item index="5-10">三天两觉</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5" v-show="adminState">
        <template slot="title"><i class="el-icon-s-check"></i>审查</template>
        <el-menu-item-group>
          <template slot="title">审查列表</template>
          <el-menu-item index="5-1" @click="startChecking">待审查</el-menu-item>
          <el-menu-item index="5-2" disabled>未通过审查</el-menu-item>

        </el-menu-item-group>

      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "aside",
  data(){
    return{
      sort:'',
      adminState: false,
      isChecking: false,

    }
  },
  methods:{
    startChecking(){
      this.isChecking= true
      this.$bus.$emit('getisChecking',this.isChecking)

      this.$axios.get('/api/checkbook').then(res => {
        this.$bus.$emit('getCheckBook',res.data.result)
      })

    },
    enterHome(){
      this.$router.push('/')
      this.$axios.get('/api/books/').then(res=>{
        this.$bus.$emit('getBook',res.data.result)

      })
    },
    enterHot(){

      this.$axios.get('/api/hot/').then(res=>{
        this.$bus.$emit('getHotBook',res.data.result)

      })

    },

    showByXuanhuan(){
      this.$axios.post('/api/books/sort/'+'玄幻',{
        sort:'玄幻'

      }).then(res=>{
        this.$bus.$emit('getBookByXuanhuan',res.data.result)

      })
    },
    showByQihuan(){
      this.$axios.post('/api/books/sort/'+'奇幻',{
        sort:'奇幻'

      }).then(res=>{
        this.$bus.$emit('getBookByQihuan',res.data.result)

      })
    },
    showByDushi(){
      this.$axios.post('/api/books/sort/'+'都市',{
        sort:'都市'

      }).then(res=>{
        this.$bus.$emit('getBookByDushi',res.data.result)

      })
    },
    showByWuxia(){
      this.$axios.post('/api/books/sort/'+'武侠',{
        sort:'武侠'

      }).then(res=>{
        this.$bus.$emit('getBookByWuxia',res.data.result)

      })
    },
    showByYanqing(){
      this.$axios.post('/api/books/sort/'+'言情',{
        sort:'言情'

      }).then(res=>{
        this.$bus.$emit('getBookByYanqing',res.data.result)

      })
    },
    showByXianxia(){
      this.$axios.post('/api/books/sort/'+'仙侠',{
        sort:'仙侠'

      }).then(res=>{
        this.$bus.$emit('getBookByXianxia',res.data.result)

      })
    },
  },
  mounted() {
    if(sessionStorage.getItem('email')==='admin'){
      this.adminState = true
    }


    this.$bus.$on('getIsAdmin',(adminState)=>{
      this.adminState=adminState;
    })
  },
  beforeDestroy() {
    this.$bus.$off('getBookByXianxia')
    this.$bus.$off('getBookByYanqing')
    this.$bus.$off('getBookByWuxia')
    this.$bus.$off('getBookByDushi')
    this.$bus.$off('getBookByQihuan')
    this.$bus.$off('getBook')
  }
}
</script>

<style scoped>
el-aside {
  color: #333;
}
</style>