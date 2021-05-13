<template>
	<div>
		<el-steps direction="vertical" :active="step">
			<el-step v-for="(item,index) in stepslist" :key="index" :title="item.title" :description="item.description"></el-step>
		</el-steps>
	</div>  
</template>

<script>

export default {
  data() {
    return {
        step:1,
		stepslist:[
			{title:"申报",description:"指南征集可提供初稿发布，意见收集等"},
			{title:"审核",description:"要求可对填报的项目格式化处理"},
			{title:"评审结果",description:"要求可对填报的项目格式化处理"}
		]
    }
  },
  created() {
	  
  },
  methods: {
    
  }
}
</script>

