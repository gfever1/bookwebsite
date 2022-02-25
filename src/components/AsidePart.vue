<template>
  <el-aside width="auto"  style="background-color: rgb(238, 241, 246);overflow-y:scroll;height: 85vh">

    <el-menu :default-openeds="['2']" >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-home"></i>首页</template>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>分类</template>
        <el-menu-item-group>
          <template slot="title">玄幻</template>
          <el-menu-item index="2-1">东方玄幻</el-menu-item>
          <el-menu-item index="2-2">异世大陆</el-menu-item>
          <el-menu-item index="2-3">王朝争霸</el-menu-item>
          <el-menu-item index="2-4">高武世界</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="奇幻">
          <el-menu-item index="2-5">现代魔法</el-menu-item>
          <el-menu-item index="2-6">剑与魔法</el-menu-item>
          <el-menu-item index="2-7">神秘幻想</el-menu-item>
          <el-menu-item index="2-8">史诗奇幻</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="武侠">
          <el-menu-item index="2-9">传统武侠</el-menu-item>
          <el-menu-item index="2-10">武侠幻想</el-menu-item>
          <el-menu-item index="2-11">国术无双</el-menu-item>
          <el-menu-item index="2-12">古武未来</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="仙侠">
          <el-menu-item index="2-13">修真文明</el-menu-item>
          <el-menu-item index="2-14">幻想修仙</el-menu-item>
          <el-menu-item index="2-15">现代修真</el-menu-item>
          <el-menu-item index="2-16">古典仙侠</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="都市">
          <el-menu-item index="2-17">爱情婚姻</el-menu-item>
          <el-menu-item index="2-18">都市生活</el-menu-item>
          <el-menu-item index="2-19">都市异能</el-menu-item>
          <el-menu-item index="2-20">异术超能</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-s-data"></i>排行榜</template>
        <el-submenu index="3-1">
          <template slot="title">月票榜</template>
          <el-menu-item index="3-1-1">1.夜的命名术</el-menu-item>
          <el-menu-item index="3-1-2">2.星门</el-menu-item>
          <el-menu-item index="3-1-3">3.明克街13号</el-menu-item>
          <el-menu-item index="3-1-4">4.不科学御兽</el-menu-item>
          <el-menu-item index="3-1-5">5.我就是不按套路出牌</el-menu-item>
        </el-submenu>
        <el-submenu index="3-2">
          <template slot="title">畅销榜</template>
          <el-menu-item index="3-2-1">1.夜的命名术</el-menu-item>
          <el-menu-item index="3-2-2">2.星门</el-menu-item>
          <el-menu-item index="3-2-3">3.明克街13号</el-menu-item>
          <el-menu-item index="3-2-4">4.不科学御兽</el-menu-item>
          <el-menu-item index="3-2-5">5.我就是不按套路出牌</el-menu-item>
        </el-submenu>

      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-magic-stick"></i>免费</template>
        <el-submenu index="4-1">
          <template slot="title">本周限免</template>
          <el-menu-item index="4-1-1">1.夜的命名术</el-menu-item>
          <el-menu-item index="4-1-2">2.星门</el-menu-item>
          <el-menu-item index="4-1-3">3.明克街13号</el-menu-item>
          <el-menu-item index="4-1-4">4.不科学御兽</el-menu-item>
          <el-menu-item index="4-1-5">5.我就是不按套路出牌</el-menu-item>
        </el-submenu>
        <el-submenu index="4-2">
          <template slot="title">人气限免</template>
          <el-menu-item index="4-2-1">1.夜的命名术</el-menu-item>
          <el-menu-item index="4-2-2">2.星门</el-menu-item>
          <el-menu-item index="4-2-3">3.明克街13号</el-menu-item>
          <el-menu-item index="4-2-4">4.不科学御兽</el-menu-item>
          <el-menu-item index="4-2-5">5.我就是不按套路出牌</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-star-off"></i>大神</template>
        <el-menu-item-group>
          <template slot="title">白金作家</template>
          <el-menu-item index="5-1">知秋</el-menu-item>
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
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "aside",
  data(){
    return{
      /*  menu:[
          {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/Home'
          },
          {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/Home'
          },
        ]*/
    }
  }
}
</script>

<style scoped>
el-aside {
  color: #333;
}
</style>