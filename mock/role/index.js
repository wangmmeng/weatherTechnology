const Mock = require('mockjs')
const { deepClone } = require('../utils')
const { asyncRoutes, constantRoutes } = require('./routes.js')

const routes = deepClone([...constantRoutes, ...asyncRoutes])

const roles = [
  {
    key: 'admin',
    name: '超级用户',
    description: '超级用户。有权查看所有页面。',
    routes: routes
  },
  {
    key: 'business',
    name: '业务管理员',
    description: '业务管理员。有权查看与业务相关的所有页面。',
    routes: routes
  },
  {
    key: 'department',
    name: '部门管理员',
    description: '部门管理员。有权查看与部门相关的所有页面。',
    routes: routes
  },
  {
    key: 'editor',
    name: '普通用户',
    description: '普通用户。可以查看除权限页以外的所有页面。',
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'expert',
    name: '专家',
    description: '专家。有权查看与科研项目相关的所有页面',
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'visitor',
    name: '游客',
    description: '只是个访客。只能看到主页。',
    routes: [{
      path: '',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard' }
        }
      ]
    }]
  }
]

module.exports = [
  // 模拟从服务器获取所有路由
  {
    url: '/vue-element-admin/routes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: routes
      }
    }
  },

  // 模拟从服务器获取所有角色
  {
    url: '/vue-element-admin/roles',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: roles
      }
    }
  },

  // 新增角色
  {
    url: '/vue-element-admin/role',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },

  // 修改角色
  {
    url: '/vue-element-admin/role/[A-Za-z0-9]',
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  // 删除角色
  {
    url: '/vue-element-admin/role/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
