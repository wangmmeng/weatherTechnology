<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%">
    
    <el-table-column min-width="300px" label="标题">
      <template slot-scope="{row}">
        <span>{{ row.title }}</span>
      </template>
    </el-table-column>

    <el-table-column width="110px" align="center" label="作者">
      <template slot-scope="scope">
        <span>{{ scope.row.author }}</span>
      </template>
    </el-table-column>

	<el-table-column width="180px" align="center" label="时间">
      <template slot-scope="scope">
        <span>{{ scope.row.timestamp }}</span>
      </template>
    </el-table-column>

  </el-table>
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
		  {timestamp:"2021-05-12",title:"我国基层气象防灾减灾应急能力稳步提升",author:"刘若馨"},
		  {timestamp:"2021-05-12",title:"我国首次面向公众发布气候趋势预测产品",author:"李一鹏 谷星月"}
	  	]
	  }else if(this.type=="type2"){
		 this.list=[
			{timestamp:"2021-05-13",title:"城阳：学党史 办实事 深入推进气象科普进社区工作",author:"王敏"},
			{timestamp:"2021-05-13",title:"青岛：气象部门全力做好“5.12”防灾减灾日气象宣传活动",author:"林泽磊"}
		 ]
	  }else{
		this.list=[
			{timestamp:"2021-05-10",title:"山东省气象局召开援疆工作座谈会",author:"祝熙航"},
			{timestamp:"2021-05-06",title:"省局召开五月份重点工作调度会",author:"祝熙航"}
		]
	  }
	 
 //   this.getList()
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

