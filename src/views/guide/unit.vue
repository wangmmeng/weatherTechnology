<template>
  <div class="app-container">
	<div class="filter-container">
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
   <el-table :data="list" border fit highlight-current-row style="width: 100%">
		<el-table-column align="center" label="负责人" width="95">
		<template slot-scope="{row}">
			<span>{{ row.name }}</span>
		</template>
		</el-table-column>

		<el-table-column align="center" label="单位" width="95">
		<template slot-scope="scope">
			<span>{{ scope.row.unit }}</span>
		</template>
		</el-table-column>

		<el-table-column align="center" label="负责项目">
		<template slot-scope="scope">
			<span>{{ scope.row.project }}</span>
		</template>
		</el-table-column>

		<el-table-column label="诚信指数">
			<template slot-scope="{row}">
			<svg-icon v-for="n in + row.importance" :key="n" icon-class="star" class="meta-item__icon" />
			</template>
		</el-table-column>

		<el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
			<template slot-scope="{row,$index}">
			<el-button type="primary" size="mini" @click="handleUpdate(row)">
				修改
			</el-button>
			<el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
				删除
			</el-button>
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
      list: [
		  {name:"张三",unit:"单位1",project:"项目1，项目2",importance:2},
		  {name:"李四",unit:"单位1",project:"项目1，项目2",importance:2},
		  {name:"王五",unit:"单位2",project:"项目1",importance:4},
		  {name:"张三",unit:"单位3",project:"项目1，项目2",importance:5},
		  {name:"张三",unit:"单位4",project:"项目1，项目2",importance:1},
		  {name:"张三",unit:"单位1",project:"项目1，项目2",importance:1},		
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
