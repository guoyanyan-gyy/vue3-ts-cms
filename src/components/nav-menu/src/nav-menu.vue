<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-show="!collapse" class="title">gyy项目</span>
    </div>
    <el-menu
      background-color="#0c2135"
      text-color="#b7bdc3"
      :collapse="collapse"
      :unique-opened="true"
      active-text-color="#0a60bd"
      class="el-menu-vertical-demo"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 一级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><document /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 一级菜单子菜单 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 二级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, toRefs } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
const props = defineProps({
  collapse: Boolean
})
const { collapse } = toRefs(props)
// const handleChangeClick = () => {
//   collapse.value = !collapse.value
// }
const store = useStore()
const userMenus = computed(() => {
  return store.state.login.userMenus
})
const router = useRouter()
const handleMenuClick = (item: any) => {
  router.push({
    path: item.url ?? '/not-found'
  })
}
// defineExpose({
//   handleChangeClick
// })
</script>
<style lang="less">
.el-menu {
  border-right: none;
}
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }

    // // 目录
    // .el-submenu {
    //   background-color: #001529 !important;
    //   // 二级菜单 ( 默认背景 )
    //   .el-menu-item {
    //     padding-left: 50px !important;
    //     background-color: #0c2135 !important;
    //   }
    // }

    // ::v-deep .el-submenu__title {
    //   background-color: #001529 !important;
    // }

    // // hover 高亮
    // .el-menu-item:hover {
    //   color: #fff !important; // 菜单
    // }

    // .el-menu-item.is-active {
    //   color: #fff !important;
    //   background-color: #0a60bd !important;
    // }
  }
}
</style>
