<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="项目名称" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.title }}
      </template>
    </el-table-column>
	<el-table-column label="负责人" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.name }}
      </template>
    </el-table-column>
	<el-table-column label="单位" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.unit }}
      </template>
    </el-table-column>
    <el-table-column label="经费" width="195" align="center">
      <template slot-scope="scope">
        ¥{{ scope.row.price }}
      </template>
    </el-table-column>
    <el-table-column label="状态" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        "已完成": 'success',
        "进行中": 'primary',
		"延期":"danger",
		"超期":"danger"
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
  //  this.fetchData()
	  this.list=[
		  {title:"玉米干旱致灾临界气象条件及其监测预警技术",price:"6,215",status:"已完成",unit:"省气象台",name:"测试"},
		  {title:"华南暖区暴雨发生发展机制及关键预报技术研究",price:"13,215",status:"进行中",unit:"省气候中心",name:"测试"},
		  {title:"南方大范围云系人工增雨作业潜力与作业技术研究",price:"12,215",status:"已完成",unit:"省气象服务中心",name:"测试"},
		  {title:"北方冬小麦精细化土壤墒情和灌溉预报技术研究",price:"16,215",status:"进行中",unit:"省气象信息中心",name:"测试"},
		  {title:"华北地区臭氧及其前体物时空变化规律与影响机理研究及应用",price:"9,215",status:"延期",unit:"大探中心",name:"测试"},
		  {title:"气候变化背景下农业气候资源的有效性评估",price:"9,215",status:"超期",unit:"省科研所",name:"测试"},
		  {title:"农作物病虫害发生气象条件监测、预警和评价技术",price:"12,215",status:"已完成",unit:"省气象灾防中心",name:"测试"},
		  {title:"闪电活动特征及其在灾害天气预警中的应用方法研究",price:"13,215",status:"进行中",unit:"省气象灾防中心",name:"测试"},
	  ]
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    }
  }
}
</script>
