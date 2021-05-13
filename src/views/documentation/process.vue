<template>
	<div class="app-container">
		<el-tabs v-model="activeName">
			<el-tab-pane v-for="item in list" :key="item.key" :label="item.label" :name="item.key">
				<el-container>
					<el-aside width="400px" style="padding:0">
						<el-menu
							default-active="2"
							class="el-menu-vertical-demo"
							background-color="#eef1f6"
							active-text-color="#409EFF"
							style="border:0"
							>
							<el-menu-item index="1">
								<i class="el-icon-document"></i>
								<span slot="title">玉米干旱致灾临界气象条件及其监测预警技术</span>
							</el-menu-item>
							<el-menu-item index="2">
								<i class="el-icon-document"></i>
								<span slot="title">华南暖区暴雨发生发展机制及关键预报技术研究</span>
							</el-menu-item>
							<el-menu-item index="3">
								<i class="el-icon-document"></i>
								<span slot="title">南方大范围云系人工增雨作业潜力与作业技术研究</span>
							</el-menu-item>
							<el-menu-item index="4">
								<i class="el-icon-document"></i>
								<span slot="title">北方冬小麦精细化土壤墒情和灌溉预报技术研究</span>
							</el-menu-item>
						</el-menu>
					</el-aside>
					<el-main>
						<keep-alive>
							<el-steps direction="vertical" :active="step">
								<el-step v-for="(item,index) in stepslist" :key="index" :title="item.title" :description="item.description"></el-step>
							</el-steps>
						</keep-alive>
					</el-main>
				</el-container>			
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	data(){
		return {
			list:[
				{ label: '省气象台', key: 'type1' },
				{ label: '省气候中心', key: 'type2' },
				{ label: '省气象服务中心', key: 'type3' },
				{ label: '省气象信息中心', key: 'type4' },
				{ label: '大探中心', key: 'type5' },
				{ label: '省科研所', key: 'type6' },
				{ label: '省气象灾防中心', key: 'type7' }
			],
			activeName:"type1",
			step:4,
			stepslist:[
				{title:"指南征集",description:"指南征集可提供初稿发布，意见收集等"},
				{title:"项目申报",description:"要求可对填报的项目格式化处理"},
				{title:"项目立项",description:"要求可对填报的项目格式化处理"},
				{title:"项目评审",description:"要求可对填报的项目格式化处理"},
				{title:"任务书签订",description:"签订的任务合同书可输出制式合同，支持对最终版本的电子扫描版进行存档"},
				{title:"中期检查",description:"可入库可查"},
				{title:"变更程序及批复",description:"可入库可查"},
				{title:"验收材料提交",description:"完整材料电子存储"},
				{title:"验收评审",description:"完整材料电子存储"},
			]
		}
	}
}
</script>
