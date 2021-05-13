<template>
  <div class="app-container">
    <el-button type="success" @click="handleAddUser" icon="el-icon-plus">新增</el-button>

    <el-table :data="usersList" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="用户名" width="220">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column align="header-center" label="密码">
        <template slot-scope="scope">
          {{ scope.row.password }}
        </template>
      </el-table-column>
	  <el-table-column align="header-center" label="姓名">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
	  <el-table-column align="header-center" label="手机号">
        <template slot-scope="scope">
          {{ scope.row.telephone }}
        </template>
      </el-table-column>
	  <el-table-column align="header-center" label="角色">
        <template slot-scope="scope">
          {{ scope.row.role | roleFilter(rolesList)}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">修改</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'修改用户':'新增用户'">
      <el-form :model="user" label-width="80px" label-position="left">
        <el-form-item label="用户名">
          <el-input v-model="user.username" placeholder="用户名" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password" placeholder="密码" />
        </el-form-item>
		<el-form-item label="姓名">
          <el-input v-model="user.name" placeholder="姓名" />
        </el-form-item>
		<el-form-item label="手机号">
          <el-input v-model="user.telephone" placeholder="手机号" />
        </el-form-item>
        <el-form-item label="角色">
			<el-input v-model="user.role" placeholder="角色" />
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="confirmUser">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { deepClone } from '@/utils'
import { getRoles } from '@/api/role'
import { getUsers, addUser, deleteUser, updateUser } from '@/api/user'

const defaultUser = {
  id:'',
  username: '',
  password: '',
  role: '',
  name: '',
  telephone: ''
}

export default {
   filters: {
    roleFilter(value,options) {
		let roleName;
        options.map(res => {
            if (value == res.key) {
                roleName = res.name;
            }
        });
        return roleName;
    }
  },
  data() {
    return {
      user: Object.assign({}, defaultUser),
      rolesList: [],
	  usersList: [],
      dialogVisible: false,
      dialogType: 'new'
    }
  },
  computed: {
    
  },
  created() {
    // Mock: 从服务器获取所有角色和用户列表
    this.getRoles()
	this.getUsers()
  },
  methods: {
    async getRoles() {
      const res = await getRoles()
      this.rolesList = res.data
    },
    async getUsers() {
      const res = await getUsers()
      this.usersList = res.data
    },
    handleAddUser() {
      this.role = Object.assign({}, defaultUser)
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    handleEdit(scope) {      
      this.user = deepClone(scope.row)
	  this.dialogType = 'edit'
      this.dialogVisible = true
    },
    handleDelete({ $index, row }) {
      this.$confirm('确定删除该用户吗?', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          await deleteUser(row.key)
          this.usersList.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(err => { console.error(err) })
    },
    async confirmUser() {
      const isEdit = this.dialogType === 'edit'
      if (isEdit) {
        await updateUser(this.user.id, this.user)
        for (let index = 0; index < this.usersList.length; index++) {
          if (this.usersList[index].id === this.role.id) {
            this.usersList.splice(index, 1, Object.assign({}, this.user))
            break
          }
        }
      } else {
        const { data } = await addUser(this.role)
        this.role.id = data.id
        this.usersList.push(this.role)
      }

      const {username, password, role } = this.role
      this.dialogVisible = false
      this.$notify({
        title: '成功',
        dangerouslyUseHTMLString: true,
        message:`
            <div>用户名: ${username}</div>
            <div>密码: ${password}}</div>
			<div>角色: ${role}</div>
          `,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
