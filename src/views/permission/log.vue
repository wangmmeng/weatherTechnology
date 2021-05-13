<template>
  <div class="app-container">
    <el-table :data="logsList" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="用户" width="220">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="header-center" label="操作">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column align="header-center" label="时间">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logsList: [
		  {name:"admin",content:"登录成功",time:"2021-05-21 19:20:23"},
		  {name:"admin",content:"新增用户",time:"2021-05-21 19:30:23"},
		  {name:"admin",content:"修改用户信息",time:"2021-05-21 19:40:23"},
		  {name:"visitor",content:"登录成功",time:"2021-05-21 19:20:23"},
		  {name:"visitor",content:"访问首页",time:"2021-05-21 19:30:23"},
		  {name:"editor",content:"登录成功",time:"2021-05-21 19:40:23"},
		  {name:"editor",content:"访问科研项目管理",time:"2021-05-21 19:28:23"},
		  {name:"editor",content:"访问科研成果管理",time:"2021-05-21 19:08:23"},
		  {name:"admin",content:"修改用户信息",time:"2021-05-21 19:40:23"},
		  {name:"admin",content:"登录成功",time:"2021-05-21 19:20:23"},
		  {name:"admin",content:"新增用户",time:"2021-05-21 19:30:23"},
		  {name:"admin",content:"修改用户信息",time:"2021-05-21 19:40:23"}
	  ]
    }
  }
}
</script>
