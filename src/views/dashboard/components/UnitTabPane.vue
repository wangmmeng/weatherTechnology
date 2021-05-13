<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <keep-alive>
          <project-tab-pane v-if="activeName==item.key" :type="item.key" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ProjectTabPane from './ProjectTabPane'
export default {
  name: 'Tab',
  components: { ProjectTabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '申请情况', key: 'type1' },
        { label: '执行情况', key: 'type2' },
        { label: '汇总', key: 'type3' },
		{ label: '逾期调度', key: 'type4' },
		{ label: '成果展示', key: 'type5' }
      ],
      activeName: 'type1',
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // 初始化默认选中的选项卡
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>
