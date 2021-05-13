<template>
  <div class="app-container">
	<div class="filter-container">
      <el-input placeholder="主持人" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input placeholder="项目名称" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
	  <el-select placeholder="单位" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in unitlist" :key="item.key" :label="item.name" :value="item.key" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        导出
      </el-button>
    </div>
    <el-table :data="subjectsList" style="width: 100%;" border>
      <el-table-column align="center" label="项目名称" width="220">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
	  <el-table-column align="header-center" label="主持人">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
	  <el-table-column align="header-center" label="单位">
        <template slot-scope="scope">
          {{ scope.row.unit }}
        </template>
      </el-table-column>
	  <el-table-column align="header-center" label="状态">
        <template slot-scope="scope">
          {{ scope.row.status }}
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
	  unitlist:[
		  {key:1,name:"单位1"},
		  {key:2,name:"单位2"},
		  {key:3,name:"单位3"},
		  {key:4,name:"单位4"}
	  ],
      subjectsList: [
		  {title:"新能源发电气象预报预警系统",unit:"单位1",name:"张三",status:"认证成功",time:"2021-05-21"}
	  ]
    }
  }
}
</script>

<style scoped>
	.filter-item{
		margin-right:10px;
	}
</style>
