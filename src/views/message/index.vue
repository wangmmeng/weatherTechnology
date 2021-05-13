<template>
  <div class="app-container">
	<el-button class="filter-item" type="primary" icon="el-icon-s-promotion" @click="handleSend">
	短信发送
	</el-button>
    <el-table :data="messagesList" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="header-center" label="内容">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
	  <el-table-column align="center" label="发送人" width="220">
        <template slot-scope="scope">
          {{ scope.row.send }}
        </template>
      </el-table-column>
	  <el-table-column align="center" label="接收人" width="220">
        <template slot-scope="scope">
          {{ scope.row.reception | receptFilter(usersList)}}
        </template>
      </el-table-column>
      <el-table-column align="header-center" label="时间">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
	  <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
	<el-dialog :visible.sync="dialogVisible" title="发送短信">
      <el-form :model="message" label-width="80px" label-position="left">
        <el-form-item label="选择用户">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
			<div style="margin: 15px 0;"></div>
			<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
				<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
			</el-checkbox-group>
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            v-model="message.content"
            :autosize="{ minRows: 2, maxRows: 4}"
            type="textarea"
            placeholder="短信内容"
          />
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="confirmMessage">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getUsers } from '@/api/user'
import { getMessages, addMessage, deleteMessage } from '@/api/message'
const cityOptions = [];
export default {
  filters: {
    receptFilter(value,options) {
		let valArray=value.split(",");
        return valArray.length;
    }
  },
  data() {
    return {
	  message:{
		  content:""
	  },
	  usersList: [],
      messagesList: [],
	  dialogVisible: false,
	  checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: false
    }
  },
  created() {
    // Mock: 从服务器获取所有注册用户和信息列表
	this.getUsers()
    this.getMessages()
  },
  methods:{
	  async getUsers() {
		const res = await getUsers()
		this.usersList = res.data
		this.usersList.map(res => {
            cityOptions.push(res.name)
        });
	  },
	  async getMessages() {
		const res = await getMessages()
		this.messagesList = res.data
	  },
	  handleSend() {
		this.dialogVisible = true
	  },
	  handleDelete({ $index, row }) {
      this.$confirm('确定删除该信息吗?', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          await deleteMessage(row.key)
          this.messagesList.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(err => { console.error(err) })
    },
	handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
	confirmMessage(){
     	this.dialogVisible = false
		this.$notify({
			title: '短信发送成功',
			type: 'success'
		})
	}
  }
}
</script>
