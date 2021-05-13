<template>
  <div>
	  <el-button type="success" @click="handleAddUser">新增</el-button>
	  <el-table :data="list" border fit highlight-current-row style="width: 100%">
		<el-table-column align="center" label="姓名" width="95">
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
import { fetchList } from '@/api/article'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 15,
        type: this.type,
        sort: '+id'
      },
      loading: false
    }
  },
  created() {
    if(this.type=="type1"){
		this.list=[
			{name:"张三",unit:"单位1",project:"项目1，项目2",importance:2},
			{name:"李四",unit:"单位1",project:"项目1，项目2",importance:2},
			{name:"王五",unit:"单位2",project:"项目1",importance:4},
			{name:"张三",unit:"单位3",project:"项目1，项目2",importance:5},
			{name:"张三",unit:"单位4",project:"项目1，项目2",importance:1},
			{name:"张三",unit:"单位1",project:"项目1，项目2",importance:1},					
		]
	}else{
		this.list=[
			{name:"张三",unit:"单位1",project:"项目1，项目2",importance:2},
			{name:"李四",unit:"单位1",project:"项目1，项目2",importance:2},
			{name:"王五",unit:"单位2",project:"项目1",importance:4},
			{name:"张三",unit:"单位3",project:"项目1，项目2",importance:5},
			{name:"张三",unit:"单位4",project:"项目1，项目2",importance:1},
			{name:"张三",unit:"单位1",project:"项目1，项目2",importance:1},					
		]
	}
  },
  methods: {
    getList() {
      this.loading = true
      this.$emit('create') // for test
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.loading = false
      })
    }
  }
}
</script>

