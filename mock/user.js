const Mock = require('mockjs')
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  visitor: {
    token: 'visitor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  'visitor-token': {
    roles: ['visitor'],
    introduction: 'I am an visitor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Visitor'
  }
}

const allUsers = [
	{
		id:1,
		username: 'admin',
		password: '111111',
		role: 'admin',
		name:"张三",
		telephone:"18220932675"
	},
	{
		id:2,
		username: 'business',
		password: '111111',
		role: 'business',
		name:"李四",
		telephone:"15220932675"
	},
	{
		id:2,
		username: 'department',
		password: '111111',
		role: 'department',
		name:"王五",
		telephone:"18220922675"
	},
	{
		id:4,
		username: 'editor',
		password: '111111',
		role: 'editor',
		name:"赵六",
		telephone:"18920932675"
	},
	{
		id:5,
		username: 'expert',
		password: '111111',
		role: 'expert',
		name:"测试",
		telephone:"18000932675"
	},
	{
		id:6,
		username: 'visitor',
		password: '111111',
		role: 'visitor',
		name:"测试1",
		telephone:"18227932675"
	}
]

module.exports = [
  // 用户登录
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '帐户和密码不正确.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // 获取用户信息
  {
    url: '/vue-element-admin/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: '登录失败，无法获取用户详细信息.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // 用户退出登录
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  // 模拟从服务器获取所有用户
  {
    url: '/vue-element-admin/users',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: allUsers
      }
    }
  },
  // 新增用户
  {
    url: '/vue-element-admin/user',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },

  // 修改用户
  {
    url: '/vue-element-admin/user/[A-Za-z0-9]',
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  // 删除用户
  {
    url: '/vue-element-admin/user/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
